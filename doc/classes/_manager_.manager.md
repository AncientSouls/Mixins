[ancient-mixins](../README.md) > ["manager"](../modules/_manager_.md) > [Manager](../classes/_manager_.manager.md)



# Class: Manager

## Type parameters
#### IN 
#### IEventsList :  [IManagerEventsList](../interfaces/_manager_.imanagereventslist.md)
## Hierarchy


↳  [IManager](../interfaces/_manager_.imanager.md)

**↳ Manager**







## Indexable

\[key: `string`\]:&nbsp;`any`
## Index

### Constructors

* [constructor](_manager_.manager.md#constructor)


### Properties

* [Node](_manager_.manager.md#node)
* [destroy](_manager_.manager.md#destroy)
* [emitter](_manager_.manager.md#emitter)
* [generateId](_manager_.manager.md#generateid)
* [id](_manager_.manager.md#id)
* [isDestroyed](_manager_.manager.md#isdestroyed)
* [nodes](_manager_.manager.md#nodes)


### Methods

* [add](_manager_.manager.md#add)
* [create](_manager_.manager.md#create)
* [emit](_manager_.manager.md#emit)
* [off](_manager_.manager.md#off)
* [on](_manager_.manager.md#on)
* [once](_manager_.manager.md#once)
* [remove](_manager_.manager.md#remove)
* [wrap](_manager_.manager.md#wrap)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Manager**(id?: *`string`*): [Manager](_manager_.manager.md)


*Inherited from [INode](../interfaces/_node_.inode.md).[constructor](../interfaces/_node_.inode.md#constructor)*

*Defined in [node.ts:25](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/node.ts#L25)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |





**Returns:** [Manager](_manager_.manager.md)

---


## Properties
<a id="node"></a>

### «Static» Node

**●  Node**:  *[TClass](../modules/_mixins_.md#tclass)`IN`* 

*Inherited from [IManager](../interfaces/_manager_.imanager.md).[Node](../interfaces/_manager_.imanager.md#node)*

*Defined in [manager.ts:29](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/manager.ts#L29)*





___

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

<a id="nodes"></a>

### «Static» nodes

**●  nodes**:  *`object`* 

*Inherited from [IManager](../interfaces/_manager_.imanager.md).[nodes](../interfaces/_manager_.imanager.md#nodes)*

*Defined in [manager.ts:30](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/manager.ts#L30)*


#### Type declaration


[id: `string`]: `IN`






___


## Methods
<a id="add"></a>

### «Static» add

► **add**(node: *`IN`*): `this`



*Inherited from [IManager](../interfaces/_manager_.imanager.md).[add](../interfaces/_manager_.imanager.md#add)*

*Defined in [manager.ts:31](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/manager.ts#L31)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| node | `IN`   |  - |





**Returns:** `this`





___

<a id="create"></a>

### «Static» create

► **create**(id?: *`string`*): `IN`



*Inherited from [IManager](../interfaces/_manager_.imanager.md).[create](../interfaces/_manager_.imanager.md#create)*

*Defined in [manager.ts:34](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/manager.ts#L34)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |





**Returns:** `IN`





___

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

<a id="remove"></a>

### «Static» remove

► **remove**(node: *`IN`*): `this`



*Inherited from [IManager](../interfaces/_manager_.imanager.md).[remove](../interfaces/_manager_.imanager.md#remove)*

*Defined in [manager.ts:33](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/manager.ts#L33)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| node | `IN`   |  - |





**Returns:** `this`





___

<a id="wrap"></a>

### «Static» wrap

► **wrap**(node: *`IN`*): `this`



*Inherited from [IManager](../interfaces/_manager_.imanager.md).[wrap](../interfaces/_manager_.imanager.md#wrap)*

*Defined in [manager.ts:32](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/manager.ts#L32)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| node | `IN`   |  - |





**Returns:** `this`





___


