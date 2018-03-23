"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("./node");
function mixin(superClass) {
    return class List extends superClass {
        constructor() {
            super(...arguments);
            this.Node = node_1.Node;
            this.nodes = {};
        }
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
exports.default = mixin;
exports.mixin = mixin;
const MixedList = mixin(node_1.Node);
exports.MixedList = MixedList;
class List extends MixedList {
}
exports.List = List;
//# sourceMappingURL=list.js.map