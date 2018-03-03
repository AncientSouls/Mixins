import 'mocha';
import { assert } from 'chai';
import * as sinon from 'sinon';

import {
  Events,
  IEvents,
  IEventsList,
} from '../lib/events';

interface ITestEventsList extends IEventsList {
  a: { b?: 'c', d?: 'e' };
}

class TestEvents extends Events implements IEvents<ITestEventsList> {}

export default function () {
  describe('Events:', () => {
    it('on() / once() / off() / emit()', () => {
      const events: IEvents<ITestEventsList> = new TestEvents();
      
      const callback = sinon.stub();
      callback.onCall(0).returns({ b: 'c' });
      callback.onCall(1).returns({ d: 'e' });
      callback.throws();
      
      const listener = data => assert.deepEqual(data, callback());
      
      events.on('a', listener);
      events.once('a', ({ b }) => {
        events.once('a', ({ b }) => {
          events.off('a', listener);
        });
        events.emit('a', { d: 'e' });
      });
      events.emit('a', { b: 'c' });
    });
  });
}
