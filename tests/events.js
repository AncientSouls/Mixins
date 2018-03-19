"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon = require("sinon");
const events_1 = require("../lib/events");
function default_1() {
    describe('Events:', () => {
        it('on() / once() / off() / emit()', () => {
            class TestEvents extends events_1.Events {
            }
            const events = new TestEvents();
            const callback = sinon.stub();
            callback.onCall(0).returns({ b: 'c' });
            callback.onCall(1).returns({ d: 'e' });
            callback.throws();
            const listener = data => chai_1.assert.deepEqual(data, callback());
            events.on('a', listener);
            events.once('a', ({ b }) => {
                events.once('a', ({ b }) => {
                    events.off('a', listener);
                });
                events.emit('a', { d: 'e' });
            });
            events.emit('a', { b: 'c' });
        });
        it('destroy()', () => {
            class TestEvents extends events_1.Events {
            }
            const events = new TestEvents();
            const listener = () => { };
            events.on('a', listener);
            events.on('a', listener);
            chai_1.assert.deepEqual(events.emitter._events, { a: [listener, listener] });
            events.destroy();
            chai_1.assert.deepEqual(events.emitter._events, {});
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=events.js.map