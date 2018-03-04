[ancient-mixins](../README.md) > [IManager](../interfaces/imanager.md)



# Interface: IManager

## Type parameters
#### IN 
#### IEventsList :  [IManagerEventsList](imanagereventslist.md)
## Hierarchy


↳  [INode](inode.md)`IEventsList`

**↳ IManager**

↳  [Manager](../classes/manager.md)










## Indexable

\[key: `string`\]:&nbsp;`any`

## Constructors
<a id="constructor"></a>


### ⊕ **new IManager**(id?: *`string`*): [IManager](imanager.md)


*Inherited from [INode](inode.md).[constructor](inode.md#constructor)*

*Defined in [lib/node.ts:25](https://github.com/AncientSouls/Mixins/blob/1e3c8a9/src/lib/node.ts#L25)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |





**Returns:** [IManager](imanager.md)

---


## Properties
<a id="node"></a>

###  Node

**●  Node**:  *[TClass](../#tclass)`IN`* 

*Defined in [lib/manager.ts:29](https://github.com/AncientSouls/Mixins/blob/1e3c8a9/src/lib/manager.ts#L29)*





___

<a id="destroy"></a>

###  destroy

**●  destroy**:  *`function`* 

*Inherited from [INode](inode.md).[destroy](inode.md#destroy)*

*Defined in [lib/node.ts:29](https://github.com/AncientSouls/Mixins/blob/1e3c8a9/src/lib/node.ts#L29)*


#### Type declaration
►(): `void`





**Returns:** `void`






___

<a id="emitter"></a>

###  emitter

**●  emitter**:  *`EventEmitter`* 

*Inherited from [IEvents](ievents.md).[emitter](ievents.md#emitter)*

*Defined in [lib/events.ts:9](https://github.com/AncientSouls/Mixins/blob/1e3c8a9/src/lib/events.ts#L9)*





___

<a id="generateid"></a>

###  generateId

**●  generateId**:  *`function`* 

*Inherited from [INode](inode.md).[generateId](inode.md#generateid)*

*Defined in [lib/node.ts:27](https://github.com/AncientSouls/Mixins/blob/1e3c8a9/src/lib/node.ts#L27)*


#### Type declaration
►(): `string`





**Returns:** `string`






___

<a id="id"></a>

###  id

**●  id**:  *`string`* 

*Inherited from [INode](inode.md).[id](inode.md#id)*

*Defined in [lib/node.ts:25](https://github.com/AncientSouls/Mixins/blob/1e3c8a9/src/lib/node.ts#L25)*





___

<a id="isdestroyed"></a>

###  isDestroyed

**●  isDestroyed**:  *`boolean`* 

*Inherited from [INode](inode.md).[isDestroyed](inode.md#isdestroyed)*

*Defined in [lib/node.ts:28](https://github.com/AncientSouls/Mixins/blob/1e3c8a9/src/lib/node.ts#L28)*





___

<a id="nodes"></a>

###  nodes

**●  nodes**:  *`object`* 

*Defined in [lib/manager.ts:30](https://github.com/AncientSouls/Mixins/blob/1e3c8a9/src/lib/manager.ts#L30)*


#### Type declaration


[id: `string`]: `IN`






___


## Methods
<a id="add"></a>

###  add

► **add**(node: *`IN`*): `this`



*Defined in [lib/manager.ts:31](https://github.com/AncientSouls/Mixins/blob/1e3c8a9/src/lib/manager.ts#L31)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| node | `IN`   |  - |





**Returns:** `this`





___

<a id="create"></a>

###  create

► **create**(id?: *`string`*): `IN`



*Defined in [lib/manager.ts:34](https://github.com/AncientSouls/Mixins/blob/1e3c8a9/src/lib/manager.ts#L34)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |





**Returns:** `IN`





___

<a id="emit"></a>

###  emit

► **emit**IE(eventName: *`string`*, data: *`IEventsList[IE]`*): `this`



*Inherited from [IEvents](ievents.md).[emit](ievents.md#emit)*

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

###  off

► **off**IE(eventName: *`string`*, listener: *`function`*): `this`



*Inherited from [IEvents](ievents.md).[off](ievents.md#off)*

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

###  on

► **on**IE(eventName: *`string`*, listener: *`function`*): `this`



*Inherited from [IEvents](ievents.md).[on](ievents.md#on)*

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

###  once

► **once**IE(eventName: *`string`*, listener: *`function`*): `this`



*Inherited from [IEvents](ievents.md).[once](ievents.md#once)*

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

<a id="remove"></a>

###  remove

► **remove**(node: *`IN`*): `this`



*Defined in [lib/manager.ts:33](https://github.com/AncientSouls/Mixins/blob/1e3c8a9/src/lib/manager.ts#L33)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| node | `IN`   |  - |





**Returns:** `this`





___

<a id="wrap"></a>

###  wrap

► **wrap**(node: *`IN`*): `this`



*Defined in [lib/manager.ts:32](https://github.com/AncientSouls/Mixins/blob/1e3c8a9/src/lib/manager.ts#L32)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| node | `IN`   |  - |





**Returns:** `this`





___


