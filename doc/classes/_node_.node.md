[ancient-mixins](../README.md) > ["node"](../modules/_node_.md) > [Node](../classes/_node_.node.md)



# Class: Node

## Type parameters
#### IEventsList :  [INodeEventsList](../interfaces/_node_.inodeeventslist.md)
## Hierarchy


↳  [INode](../interfaces/_node_.inode.md)

**↳ Node**







## Indexable

\[key: `string`\]:&nbsp;`any`
## Index

### Constructors

* [constructor](_node_.node.md#constructor)


### Properties

* [destroy](_node_.node.md#destroy)
* [emitter](_node_.node.md#emitter)
* [generateId](_node_.node.md#generateid)
* [id](_node_.node.md#id)
* [isDestroyed](_node_.node.md#isdestroyed)


### Methods

* [emit](_node_.node.md#emit)
* [off](_node_.node.md#off)
* [on](_node_.node.md#on)
* [once](_node_.node.md#once)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Node**(id?: *`string`*): [Node](_node_.node.md)


*Inherited from [INode](../interfaces/_node_.inode.md).[constructor](../interfaces/_node_.inode.md#constructor)*

*Defined in [node.ts:25](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/node.ts#L25)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |





**Returns:** [Node](_node_.node.md)

---


## Properties
<a id="destroy"></a>

### «Static» destroy

**●  destroy**:  *`function`* 

*Inherited from [INode](../interfaces/_node_.inode.md).[destroy](../interfaces/_node_.inode.md#destroy)*

*Defined in [node.ts:29](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/node.ts#L29)*


#### Type declaration
►(): `void`





**Returns:** `void`






___

<a id="emitter"></a>

### «Static» emitter

**●  emitter**:  *`EventEmitter`* 

*Inherited from [IEvents](../interfaces/_events_.ievents.md).[emitter](../interfaces/_events_.ievents.md#emitter)*

*Defined in [events.ts:9](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/events.ts#L9)*





___

<a id="generateid"></a>

### «Static» generateId

**●  generateId**:  *`function`* 

*Inherited from [INode](../interfaces/_node_.inode.md).[generateId](../interfaces/_node_.inode.md#generateid)*

*Defined in [node.ts:27](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/node.ts#L27)*


#### Type declaration
►(): `string`





**Returns:** `string`






___

<a id="id"></a>

### «Static» id

**●  id**:  *`string`* 

*Inherited from [INode](../interfaces/_node_.inode.md).[id](../interfaces/_node_.inode.md#id)*

*Defined in [node.ts:25](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/node.ts#L25)*





___

<a id="isdestroyed"></a>

### «Static» isDestroyed

**●  isDestroyed**:  *`boolean`* 

*Inherited from [INode](../interfaces/_node_.inode.md).[isDestroyed](../interfaces/_node_.inode.md#isdestroyed)*

*Defined in [node.ts:28](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/node.ts#L28)*





___


## Methods
<a id="emit"></a>

### «Static» emit

► **emit**IE(eventName: *`string`*, data: *`IEventsList[IE]`*): `this`



*Inherited from [IEvents](../interfaces/_events_.ievents.md).[emit](../interfaces/_events_.ievents.md#emit)*

*Defined in [events.ts:11](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/events.ts#L11)*



**Type parameters:**

#### IE :  `keyof IEventsList`
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventName | `string`   |  - |
| data | `IEventsList[IE]`   |  - |





**Returns:** `this`





___

<a id="off"></a>

### «Static» off

► **off**IE(eventName: *`string`*, listener: *`function`*): `this`



*Inherited from [IEvents](../interfaces/_events_.ievents.md).[off](../interfaces/_events_.ievents.md#off)*

*Defined in [events.ts:20](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/events.ts#L20)*



**Type parameters:**

#### IE :  `keyof IEventsList`
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventName | `string`   |  - |
| listener | `function`   |  - |





**Returns:** `this`





___

<a id="on"></a>

### «Static» on

► **on**IE(eventName: *`string`*, listener: *`function`*): `this`



*Inherited from [IEvents](../interfaces/_events_.ievents.md).[on](../interfaces/_events_.ievents.md#on)*

*Defined in [events.ts:14](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/events.ts#L14)*



**Type parameters:**

#### IE :  `keyof IEventsList`
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventName | `string`   |  - |
| listener | `function`   |  - |





**Returns:** `this`





___

<a id="once"></a>

### «Static» once

► **once**IE(eventName: *`string`*, listener: *`function`*): `this`



*Inherited from [IEvents](../interfaces/_events_.ievents.md).[once](../interfaces/_events_.ievents.md#once)*

*Defined in [events.ts:17](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/events.ts#L17)*



**Type parameters:**

#### IE :  `keyof IEventsList`
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventName | `string`   |  - |
| listener | `function`   |  - |





**Returns:** `this`





___


