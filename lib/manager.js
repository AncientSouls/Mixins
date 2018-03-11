"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const node_1 = require("./node");
function mixin(superClass) {
    return class Manager extends superClass {
        constructor() {
            super(...arguments);
            this.Node = node_1.Node;
            this.nodes = {};
        }
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
                if (eventName === 'destroyed')
                    this.remove(node);
                else
                    this.emit(eventName, _.extend({}, data, { manager: this }));
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
        create(id) {
            const node = new this.Node(id);
            this.add(node);
            return node;
        }
    };
}
exports.default = mixin;
exports.mixin = mixin;
const MixedManager = mixin(node_1.Node);
exports.MixedManager = MixedManager;
class Manager extends MixedManager {
}
exports.Manager = Manager;
//# sourceMappingURL=manager.js.map