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


function mixin<T extends TClass<IInstance>>(
  superClass: T,
): any {
  return class Manager extends superClass {
    public Node = Node;
    
    nodes = {};
    
    add(node) {
      if (node.isDestroyed) {
        throw new Error(`Destroyed node ${node.id} cant be added to ${this.id}.`);
      }
      
      this.nodes[node.id] = node;
      this.wrap(node);
      this.emit('added', { node, manager: this });
      
      return this;
    }
    
    wrap(node) {
      const listener = ({ eventName, data }) => {
        if (eventName === 'destroyed') this.remove(node);
        else this.emit(eventName, _.extend({}, data, { manager: this }));
      };
      node.on('emit', listener);
      this.on('destroyed', () => node.off('emit', listener));
      
      return this;
    }
    
    remove(node) {
      if (this.nodes[node.id]) {
        delete this.nodes[node.id];
        this.emit('removed', { node, manager: this });
      }
      
      return this;
    }
    
    create(id?) {
      const node = new this.Node(id);
      this.add(node);
      return node;
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
