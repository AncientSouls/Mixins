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
  TNode,
} from './node';

import {
  List,
} from './list';

type TManager = IManager<TNode, IManagerEventsList>;

interface IManagerEventData {
  node: TNode;
  manager: TManager;
}

interface IManagerEventsList extends INodeEventsList {
  added: IManagerEventData;
  removed: IManagerEventData;
}

interface IManager<IN, IEventsList extends IManagerEventsList> extends INode<IEventsList> {
  Node: TClass<IN>;
  nodes: { [id:string]: IN };
  add(node: IN): this;
  wrap(node: IN): this;
  remove(node: IN): this;
  create(id?: string): IN;
}

/**
 * Mixin your class with manager functionality.
 * @example
 * ```typescript
 * 
 * import { mixin, TManager } from 'ancient-mixins/lib/manager';
 * import { TClass } from 'ancient-mixins/lib/mixins';
 * const MixedManager: TClass<TManager> = mixin(Node);
 * ```
 */
function mixin<T extends TClass<IInstance>>(
  superClass: T,
): any {
  return class Manager extends superClass {
    public list = new List();
    
    add(node) {
      if (node.isDestroyed) {
        throw new Error(`Destroyed node ${node.id} cant be added to ${this.id}.`);
      }

      this.list.add(node);
      this.wrap(node);
      this.emit('added', { node, manager: this });
      
      return this;
    }
    
    wrap(node) {
      node.on('destroyed', () => this.remove(node));
      
      return this;
    }
    
    remove(node) {
      this.list.remove(node);
      this.emit('removed', { node, manager: this });
      
      return this;
    }
  };
}

const MixedManager: TClass<TManager> = mixin(Node);
class Manager extends MixedManager {}

export {
  mixin as default,
  mixin,
  MixedManager,
  Manager,
  IManager,
  IManagerEventData,
  IManagerEventsList,
  TNode,
  TManager,
};
