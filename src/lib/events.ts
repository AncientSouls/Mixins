import * as _ from 'lodash';
import * as EventEmitter from 'events';

import {
  TClass,
  IInstance,
} from './mixins';

interface IEvents<IEventsList> extends IInstance {
  /**
   * Native nodejs EventEmitter.
   */
  emitter: EventEmitter;

  /**
   * Emit event with custom data and `"emit"` event with data `{ eventName: string, data: any }`
   */
  emit<IE extends keyof IEventsList>
  (eventName: IE, data: IEventsList[IE]): this;

  /**
   * Adds the listener function to the end of the listeners array for the event named eventName.
   */
  on<IE extends keyof IEventsList>
  (eventName: IE, listener: (data: IEventsList[IE]) => void): this;

  /**
   * Adds a one-time listener function for the event named eventName.
   */ 
  once<IE extends keyof IEventsList>
  (eventName: IE, listener: (data: IEventsList[IE]) => void): this;

  /**
   * Removes the specified listener from the listener array for the event named eventName.
   */
  off<IE extends keyof IEventsList>
  (eventName: IE, listener: (data: IEventsList[IE]) => void): this;

  /**
   * Delte all linstening events.
   */
  destroy: () => void;

  [key: string]: any;
}

interface IEventsEmitData {
  eventName: string;
  data: any;
}

interface IEventsList {
  [key: string]: any;
  emit: IEventsEmitData;
}

/**
 * Mixin your class with Events functionality.
 * @example
 * ```typescript
 * 
 * import { mixin, IEventsList, IEvents } from 'ancient-mixins/lib/events';
 * import { TClass } from 'ancient-mixins/lib/mixins';
 * const MyEvents: TClass<IEvents<IEventsList>> = mixin(class {});
 * ```
 */
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
  IEventsEmitData,
};
