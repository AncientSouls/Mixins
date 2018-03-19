import { v4 } from 'uuid';

import {
  TClass,
  IInstance,
} from './mixins';

import {
  Events,
  IEvents,
  IEventsList,
} from './events';

type TNode = INode<INodeEventsList>;

interface INodeEventData {
  node: INode<INodeEventsList>;
}

interface INodeEventsList extends IEventsList {
  destroyed: INodeEventData;
}

interface INode<IEventsList extends INodeEventsList> extends IEvents<IEventsList> {
  id: string;
  new (id?: string);
  generateId: () => string;
  isDestroyed: boolean;
  destroy: () => void;
}

function mixin<T extends TClass<IInstance>>(
  superClass: T,
): any {
  return class Node extends superClass {
    public id;
    
    constructor(...args) {
      super();
      this.id = args[0] || this.generateId();
    }
    
    generateId() {
      return v4();
    }
    
    isDestroyed = false;
    
    destroy() {
      if (!this.isDestroyed) {
        this.isDestroyed = true;
        this.emit('destroyed', { node: this });
        super.destroy();
      }
    }
  };
}


const MixedNode: TClass<INode<INodeEventsList>> = mixin(Events);
class Node extends MixedNode {}

export {
  mixin as default,
  mixin,
  MixedNode,
  Node,
  INode,
  INodeEventData,
  INodeEventsList,
  TNode,
};
