[ancient-mixins](../README.md) > [Node](../classes/node.md)



# Class: Node

## Type parameters
#### IEventsList :  [INodeEventsList](../interfaces/inodeeventslist.md)
## Hierarchy


↳  [INode](../interfaces/inode.md)

**↳ Node**







## Indexable

\[key: `string`\]:&nbsp;`any`
## Index

### Constructors

* [constructor](node.md#constructor)


### Properties

* [destroy](node.md#destroy)
* [emitter](node.md#emitter)
* [generateId](node.md#generateid)
* [id](node.md#id)
* [isDestroyed](node.md#isdestroyed)


### Methods

* [emit](node.md#emit)
* [off](node.md#off)
* [on](node.md#on)
* [once](node.md#once)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Node**(id?: *`string`*): [Node](node.md)


*Inherited from [INode](../interfaces/inode.md).[constructor](../interfaces/inode.md#constructor)*

*Defined in [lib/node.ts:25](https://github.com/AncientSouls/Mixins/blob/1e3c8a9/src/lib/node.ts#L25)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |





**Returns:** [Node](node.md)

---


## Properties
<a id="destroy"></a>

### «Static» destroy

**●  destroy**:  *`function`* 

*Inherited from [INode](../interfaces/inode.md).[destroy](../interfaces/inode.md#destroy)*

*Defined in [lib/node.ts:29](https://github.com/AncientSouls/Mixins/blob/1e3c8a9/src/lib/node.ts#L29)*


#### Type declaration
►(): `void`





**Returns:** `void`






___

<a id="emitter"></a>

### «Static» emitter

**●  emitter**:  *`EventEmitter`* 

*Inherited from [IEvents](../interfaces/ievents.md).[emitter](../interfaces/ievents.md#emitter)*

*Defined in [lib/events.ts:9](https://github.com/AncientSouls/Mixins/blob/1e3c8a9/src/lib/events.ts#L9)*





___

<a id="generateid"></a>

### «Static» generateId

**●  generateId**:  *`function`* 

*Inherited from [INode](../interfaces/inode.md).[generateId](../interfaces/inode.md#generateid)*

*Defined in [lib/node.ts:27](https://github.com/AncientSouls/Mixins/blob/1e3c8a9/src/lib/node.ts#L27)*


#### Type declaration
►(): `string`





**Returns:** `string`






___

<a id="id"></a>

### «Static» id

**●  id**:  *`string`* 

*Inherited from [INode](../interfaces/inode.md).[id](../interfaces/inode.md#id)*

*Defined in [lib/node.ts:25](https://github.com/AncientSouls/Mixins/blob/1e3c8a9/src/lib/node.ts#L25)*





___

<a id="isdestroyed"></a>

### «Static» isDestroyed

**●  isDestroyed**:  *`boolean`* 

*Inherited from [INode](../interfaces/inode.md).[isDestroyed](../interfaces/inode.md#isdestroyed)*

*Defined in [lib/node.ts:28](https://github.com/AncientSouls/Mixins/blob/1e3c8a9/src/lib/node.ts#L28)*





___


## Methods
<a id="emit"></a>

### «Static» emit

► **emit**IE(eventName: *`string`*, data: *`IEventsList[IE]`*): `this`



*Inherited from [IEvents](../interfaces/ievents.md).[emit](../interfaces/ievents.md#emit)*

*Defined in [lib/events.ts:11](https://github.com/AncientSouls/Mixins/blob/1e3c8a9/src/lib/events.ts#L11)*



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



*Inherited from [IEvents](../interfaces/ievents.md).[off](../interfaces/ievents.md#off)*

*Defined in [lib/events.ts:20](https://github.com/AncientSouls/Mixins/blob/1e3c8a9/src/lib/events.ts#L20)*



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



*Inherited from [IEvents](../interfaces/ievents.md).[on](../interfaces/ievents.md#on)*

*Defined in [lib/events.ts:14](https://github.com/AncientSouls/Mixins/blob/1e3c8a9/src/lib/events.ts#L14)*



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



*Inherited from [IEvents](../interfaces/ievents.md).[once](../interfaces/ievents.md#once)*

*Defined in [lib/events.ts:17](https://github.com/AncientSouls/Mixins/blob/1e3c8a9/src/lib/events.ts#L17)*



**Type parameters:**

#### IE :  `keyof IEventsList`
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventName | `string`   |  - |
| listener | `function`   |  - |





**Returns:** `this`





___


