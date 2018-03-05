[ancient-mixins](../README.md) > [Manager](../classes/manager.md)



# Class: Manager

## Type parameters
#### IN 
#### IEventsList :  [IManagerEventsList](../interfaces/imanagereventslist.md)
## Hierarchy


↳  [IManager](../interfaces/imanager.md)

**↳ Manager**







## Indexable

\[key: `string`\]:&nbsp;`any`
## Index

### Constructors

* [constructor](manager.md#constructor)


### Properties

* [Node](manager.md#node)
* [destroy](manager.md#destroy)
* [emitter](manager.md#emitter)
* [generateId](manager.md#generateid)
* [id](manager.md#id)
* [isDestroyed](manager.md#isdestroyed)
* [nodes](manager.md#nodes)


### Methods

* [add](manager.md#add)
* [create](manager.md#create)
* [emit](manager.md#emit)
* [off](manager.md#off)
* [on](manager.md#on)
* [once](manager.md#once)
* [remove](manager.md#remove)
* [wrap](manager.md#wrap)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Manager**(id?: *`string`*): [Manager](manager.md)


*Inherited from [INode](../interfaces/inode.md).[constructor](../interfaces/inode.md#constructor)*

*Defined in [node.ts:25](https://github.com/AncientSouls/Mixins/blob/e93701d/src/lib/node.ts#L25)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |





**Returns:** [Manager](manager.md)

---


## Properties
<a id="node"></a>

### «Static» Node

**●  Node**:  *[TClass](../#tclass)`IN`* 

*Inherited from [IManager](../interfaces/imanager.md).[Node](../interfaces/imanager.md#node)*

*Defined in [manager.ts:29](https://github.com/AncientSouls/Mixins/blob/e93701d/src/lib/manager.ts#L29)*





___

<a id="destroy"></a>

### «Static» destroy

**●  destroy**:  *`function`* 

*Inherited from [INode](../interfaces/inode.md).[destroy](../interfaces/inode.md#destroy)*

*Defined in [node.ts:29](https://github.com/AncientSouls/Mixins/blob/e93701d/src/lib/node.ts#L29)*


#### Type declaration
►(): `void`





**Returns:** `void`






___

<a id="emitter"></a>

### «Static» emitter

**●  emitter**:  *`EventEmitter`* 

*Inherited from [IEvents](../interfaces/ievents.md).[emitter](../interfaces/ievents.md#emitter)*

*Defined in [events.ts:9](https://github.com/AncientSouls/Mixins/blob/e93701d/src/lib/events.ts#L9)*





___

<a id="generateid"></a>

### «Static» generateId

**●  generateId**:  *`function`* 

*Inherited from [INode](../interfaces/inode.md).[generateId](../interfaces/inode.md#generateid)*

*Defined in [node.ts:27](https://github.com/AncientSouls/Mixins/blob/e93701d/src/lib/node.ts#L27)*


#### Type declaration
►(): `string`





**Returns:** `string`






___

<a id="id"></a>

### «Static» id

**●  id**:  *`string`* 

*Inherited from [INode](../interfaces/inode.md).[id](../interfaces/inode.md#id)*

*Defined in [node.ts:25](https://github.com/AncientSouls/Mixins/blob/e93701d/src/lib/node.ts#L25)*





___

<a id="isdestroyed"></a>

### «Static» isDestroyed

**●  isDestroyed**:  *`boolean`* 

*Inherited from [INode](../interfaces/inode.md).[isDestroyed](../interfaces/inode.md#isdestroyed)*

*Defined in [node.ts:28](https://github.com/AncientSouls/Mixins/blob/e93701d/src/lib/node.ts#L28)*





___

<a id="nodes"></a>

### «Static» nodes

**●  nodes**:  *`object`* 

*Inherited from [IManager](../interfaces/imanager.md).[nodes](../interfaces/imanager.md#nodes)*

*Defined in [manager.ts:30](https://github.com/AncientSouls/Mixins/blob/e93701d/src/lib/manager.ts#L30)*


#### Type declaration


[id: `string`]: `IN`






___


## Methods
<a id="add"></a>

### «Static» add

► **add**(node: *`IN`*): `this`



*Inherited from [IManager](../interfaces/imanager.md).[add](../interfaces/imanager.md#add)*

*Defined in [manager.ts:31](https://github.com/AncientSouls/Mixins/blob/e93701d/src/lib/manager.ts#L31)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| node | `IN`   |  - |





**Returns:** `this`





___

<a id="create"></a>

### «Static» create

► **create**(id?: *`string`*): `IN`



*Inherited from [IManager](../interfaces/imanager.md).[create](../interfaces/imanager.md#create)*

*Defined in [manager.ts:34](https://github.com/AncientSouls/Mixins/blob/e93701d/src/lib/manager.ts#L34)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |





**Returns:** `IN`





___

<a id="emit"></a>

### «Static» emit

► **emit**IE(eventName: *`string`*, data: *`IEventsList[IE]`*): `this`



*Inherited from [IEvents](../interfaces/ievents.md).[emit](../interfaces/ievents.md#emit)*

*Defined in [events.ts:11](https://github.com/AncientSouls/Mixins/blob/e93701d/src/lib/events.ts#L11)*



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

*Defined in [events.ts:20](https://github.com/AncientSouls/Mixins/blob/e93701d/src/lib/events.ts#L20)*



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

*Defined in [events.ts:14](https://github.com/AncientSouls/Mixins/blob/e93701d/src/lib/events.ts#L14)*



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

*Defined in [events.ts:17](https://github.com/AncientSouls/Mixins/blob/e93701d/src/lib/events.ts#L17)*



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



*Inherited from [IManager](../interfaces/imanager.md).[remove](../interfaces/imanager.md#remove)*

*Defined in [manager.ts:33](https://github.com/AncientSouls/Mixins/blob/e93701d/src/lib/manager.ts#L33)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| node | `IN`   |  - |





**Returns:** `this`





___

<a id="wrap"></a>

### «Static» wrap

► **wrap**(node: *`IN`*): `this`



*Inherited from [IManager](../interfaces/imanager.md).[wrap](../interfaces/imanager.md#wrap)*

*Defined in [manager.ts:32](https://github.com/AncientSouls/Mixins/blob/e93701d/src/lib/manager.ts#L32)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| node | `IN`   |  - |





**Returns:** `this`





___


