import { TClass, IInstance } from './mixins';
import { INode, INodeEventsList, INodeEventData, TNode } from './node';
declare type TList = IList<TNode, IListEventsList>;
interface IListEventsList extends INodeEventsList {
    destroyed: INodeEventData;
}
interface IList<IN, IEventsList extends IListEventsList> extends INode<IEventsList> {
    Node: TClass<IN>;
    nodes: {
        [id: string]: IN;
    };
    add(node: IN): this;
    wrap(node: IN): this;
    remove(node: IN): this;
    create(id?: string): IN;
}
declare function mixin<T extends TClass<IInstance>>(superClass: T): any;
declare const MixedList: TClass<TList>;
declare class List extends MixedList {
}
export { mixin as default, mixin, MixedList, List, IList, IListEventsList, TNode, TList };
