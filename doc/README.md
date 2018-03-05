
# Ancient Souls Mixins

Core functions, classes, types and interfaces.

[![GitHub Release](https://img.shields.io/github/release/AncientSouls/Mixins.svg)](https://github.com/AncientSouls/Mixins/releases)
[![NPM](https://img.shields.io/npm/v/ancient-mixins.svg)](https://www.npmjs.com/package/ancient-mixins)
[![Build Status](https://travis-ci.org/AncientSouls/Mixins.svg?branch=master)](https://travis-ci.org/AncientSouls/Mixins)
[![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://ancientsouls.github.io/)


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

* [mixin](#mixin)



---
# Type aliases
<a id="tclass"></a>

###  TClass

**Τ TClass**:  *`object`* 

*Defined in [mixins.ts:5](https://github.com/AncientSouls/Mixins/blob/8c09444/src/lib/mixins.ts#L5)*


#### Type declaration





___

<a id="tmanager"></a>

###  TManager

**Τ TManager**:  *[IManager](interfaces/imanager.md)[TNode](#tnode), [IManagerEventsList](interfaces/imanagereventslist.md)* 

*Defined in [manager.ts:16](https://github.com/AncientSouls/Mixins/blob/8c09444/src/lib/manager.ts#L16)*





___

<a id="tnode"></a>

###  TNode

**Τ TNode**:  *[INode](interfaces/inode.md)[INodeEventsList](interfaces/inodeeventslist.md)* 

*Defined in [node.ts:14](https://github.com/AncientSouls/Mixins/blob/8c09444/src/lib/node.ts#L14)*





___


# Variables
<a id="mixedevents"></a>

### «Const» MixedEvents

**●  MixedEvents**:  *[TClass](#tclass)[IEvents](interfaces/ievents.md)[IEventsList](interfaces/ieventslist.md)*  =  mixin(class {})

*Defined in [events.ts:59](https://github.com/AncientSouls/Mixins/blob/8c09444/src/lib/events.ts#L59)*





___

<a id="mixedmanager"></a>

### «Const» MixedManager

**●  MixedManager**:  *[TClass](#tclass)[TManager](#tmanager)*  =  mixin(Node)

*Defined in [manager.ts:86](https://github.com/AncientSouls/Mixins/blob/8c09444/src/lib/manager.ts#L86)*





___

<a id="mixednode"></a>

### «Const» MixedNode

**●  MixedNode**:  *[TClass](#tclass)[INode](interfaces/inode.md)[INodeEventsList](interfaces/inodeeventslist.md)*  =  mixin(Events)

*Defined in [node.ts:59](https://github.com/AncientSouls/Mixins/blob/8c09444/src/lib/node.ts#L59)*





___


# Functions
<a id="mixin"></a>

###  mixin

► **mixin**T(superClass: *`T`*): `any`



*Defined in [events.ts:30](https://github.com/AncientSouls/Mixins/blob/8c09444/src/lib/events.ts#L30)*



**Type parameters:**

#### T :  [TClass](#tclass)[IInstance](interfaces/iinstance.md)
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| superClass | `T`   |  - |





**Returns:** `any`





___


