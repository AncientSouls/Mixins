



## Index

### Classes

* [Events](classes/events.md)
* [Manager](classes/manager.md)
* [Node](classes/node.md)


### Interfaces

* [IEvents](interfaces/ievents.md)
* [IEventsList](interfaces/ieventslist.md)
* [IInstance](interfaces/iinstance.md)
* [IManager](interfaces/imanager.md)
* [IManagerEventData](interfaces/imanagereventdata.md)
* [IManagerEventsList](interfaces/imanagereventslist.md)
* [INode](interfaces/inode.md)
* [INodeEventData](interfaces/inodeeventdata.md)
* [INodeEventsList](interfaces/inodeeventslist.md)


### Type aliases

* [TClass](#tclass)
* [TManager](#tmanager)
* [TNode](#tnode)


### Variables

* [MixedEvents](#mixedevents)
* [MixedManager](#mixedmanager)
* [MixedNode](#mixednode)


### Functions

* [default](#default)
* [mixin](#mixin)



---
# Type aliases
<a id="tclass"></a>

###  TClass

**Τ TClass**:  *`object`* 

*Defined in [lib/mixins.ts:5](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/mixins.ts#L5)*


#### Type declaration





___

<a id="tmanager"></a>

###  TManager

**Τ TManager**:  *[IManager](interfaces/imanager.md)[TNode](#tnode), [IManagerEventsList](interfaces/imanagereventslist.md)* 

*Defined in [lib/manager.ts:16](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/manager.ts#L16)*





___

<a id="tnode"></a>

###  TNode

**Τ TNode**:  *[INode](interfaces/inode.md)[INodeEventsList](interfaces/inodeeventslist.md)* 

*Defined in [lib/node.ts:14](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/node.ts#L14)*





___


# Variables
<a id="mixedevents"></a>

### «Const» MixedEvents

**●  MixedEvents**:  *[TClass](#tclass)[IEvents](interfaces/ievents.md)[IEventsList](interfaces/ieventslist.md)*  =  mixin(class {})

*Defined in [lib/events.ts:59](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/events.ts#L59)*





___

<a id="mixedmanager"></a>

### «Const» MixedManager

**●  MixedManager**:  *[TClass](#tclass)[TManager](#tmanager)*  =  mixin(Node)

*Defined in [lib/manager.ts:86](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/manager.ts#L86)*





___

<a id="mixednode"></a>

### «Const» MixedNode

**●  MixedNode**:  *[TClass](#tclass)[INode](interfaces/inode.md)[INodeEventsList](interfaces/inodeeventslist.md)*  =  mixin(Events)

*Defined in [lib/node.ts:59](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/node.ts#L59)*





___


# Functions
<a id="default"></a>

###  default

► **default**(): `void`



*Defined in [tests/events.ts:8](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/tests/events.ts#L8)*





**Returns:** `void`





___

<a id="mixin"></a>

###  mixin

► **mixin**T(superClass: *`T`*): `any`



*Defined in [lib/events.ts:30](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/events.ts#L30)*



**Type parameters:**

#### T :  [TClass](#tclass)[IInstance](interfaces/iinstance.md)
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| superClass | `T`   |  - |





**Returns:** `any`





___


