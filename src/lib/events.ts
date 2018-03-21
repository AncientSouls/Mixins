import * as _ from 'lodash';
import * as EventEmitter from 'events';

import {
  TClass,
  IInstance,
} from './mixins';

interface IEvents<IEventsList> extends IInstance {
  emitter: EventEmitter;
  
  emit<IE extends keyof IEventsList>
  (eventName: IE, data: IEventsList[IE]): this;
  
  on<IE extends keyof IEventsList>
  (eventName: IE, listener: (data: IEventsList[IE]) => void): this;
  
  once<IE extends keyof IEventsList>
  (eventName: IE, listener: (data: IEventsList[IE]) => void): this;
  
  off<IE extends keyof IEventsList>
  (eventName: IE, listener: (data: IEventsList[IE]) => void): this;
  
  destroy: () => void;
  
  [key: string]: any;
}

interface IEventsList {
  [key: string]: any;
}

function mixin<T extends TClass<IInstance>>(
  superClass: T,
): any {
  return class Events extends superClass {
    emitter: EventEmitter = new EventEmitter();
    
    emit(eventName, data): this {
      this.emitter.emit(eventName, data);
      this.emitter.emit('emit', { eventName, data });
      return this;
    }
    
    on(eventName, listener): this {
      this.emitter.on(eventName, listener);
      return this;
    }
    
    once(eventName, listener): this {
      this.emitter.once(eventName, listener);
      return this;
    }
    
    off(eventName, listener): this {
      this.emitter.removeListener(eventName, listener);
      return this;
    }

    destroy() {
      const emitter: any = this.emitter;
      _.each(emitter._events, (f,name) => this.emitter.removeAllListeners(name));
    }
  };
}

const MixedEvents: TClass<IEvents<IEventsList>> = mixin(class {});
class Events extends MixedEvents {}

export {
  mixin as default,
  mixin,
  MixedEvents,
  Events,
  IEvents,
  IEventsList,
};
