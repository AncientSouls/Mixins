"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const events_1 = require("./events");
function mixin(superClass) {
    return class Node extends superClass {
        constructor(...args) {
            super();
            this.isDestroyed = false;
            this.id = args[0] || this.generateId();
        }
        generateId() {
            return uuid_1.v4();
        }
        destroy() {
            if (!this.isDestroyed) {
                this.isDestroyed = true;
                this.emit('destroyed', { node: this });
            }
        }
    };
}
exports.default = mixin;
exports.mixin = mixin;
const MixedNode = mixin(events_1.Events);
exports.MixedNode = MixedNode;
class Node extends MixedNode {
}
exports.Node = Node;
//# sourceMappingURL=node.js.map