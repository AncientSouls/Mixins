import * as EventEmitter from 'events';
import * as _ from 'lodash';

import {
  TClass,
  IInstance,
} from './mixins';

import {
  Node,
  INode,
  INodeEventsList,
  INodeEventData,
  TNode,
} from './node';

type TList = IList<TNode, IListEventsList>;

interface IListEventsList extends INodeEventsList {
  destroyed: INodeEventData;
}

interface IList<IN, IEventsList extends IListEventsList> extends INode<IEventsList> {
  Node: TClass<IN>;
  nodes: { [id:string]: IN };
  add(node: IN): this;
  wrap(node: IN): this;
  remove(node: IN): this;
  create(id?: string): IN;
}

/**
 * Mixin your class with List functionality.
 * @example
 * ```typescript
 * 
 * import { mixin, TList } from 'ancient-mixins/lib/List';
 * import { TClass } from 'ancient-mixins/lib/mixins';
 * const MixedList: TClass<TList> = mixin(Node);
 * ```
 */
function mixin<T extends TClass<IInstance>>(
  superClass: T,
): any {
  return class List extends superClass {
    public Node = Node;
    
    nodes = {};
    
    add(node) {
      this.nodes[node.id] = node;
      this.wrap(node);
      
      return this;
    }
    
    wrap(node) {
      const listener = ({ eventName, data }) => {
        this.emit(eventName, data);
      };
      node.on('emit', listener);
      this.on('destroyed', () => node.off('emit', listener));
      
      return this;
    }
    
    remove(node) {
      if (this.nodes[node.id]) {
        delete this.nodes[node.id];
      }
      
      return this;
    }
  };
}

const MixedList: TClass<TList> = mixin(Node);
class List extends MixedList {}

export {
  mixin as default,
  mixin,
  MixedList,
  List,
  IList,
  IListEventsList,
  TNode,
  TList,
};
