[ancient-mixins](../README.md) > ["manager"](../modules/_manager_.md) > [IManager](../interfaces/_manager_.imanager.md)



# Interface: IManager

## Type parameters
#### IN 
#### IEventsList :  [IManagerEventsList](_manager_.imanagereventslist.md)
## Hierarchy


↳  [INode](_node_.inode.md)`IEventsList`

**↳ IManager**

↳  [Manager](../classes/_manager_.manager.md)










## Indexable

\[key: `string`\]:&nbsp;`any`

## Constructors
<a id="constructor"></a>


### ⊕ **new IManager**(id?: *`string`*): [IManager](_manager_.imanager.md)


*Inherited from [INode](_node_.inode.md).[constructor](_node_.inode.md#constructor)*

*Defined in [node.ts:25](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/node.ts#L25)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |





**Returns:** [IManager](_manager_.imanager.md)

---


## Properties
<a id="node"></a>

###  Node

**●  Node**:  *[TClass](../modules/_mixins_.md#tclass)`IN`* 

*Defined in [manager.ts:29](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/manager.ts#L29)*





___

<a id="destroy"></a>

###  destroy

**●  destroy**:  *`function`* 

*Inherited from [INode](_node_.inode.md).[destroy](_node_.inode.md#destroy)*

*Defined in [node.ts:29](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/node.ts#L29)*


#### Type declaration
►(): `void`





**Returns:** `void`






___

<a id="emitter"></a>

###  emitter

**●  emitter**:  *`EventEmitter`* 

*Inherited from [IEvents](_events_.ievents.md).[emitter](_events_.ievents.md#emitter)*

*Defined in [events.ts:9](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/events.ts#L9)*





___

<a id="generateid"></a>

###  generateId

**●  generateId**:  *`function`* 

*Inherited from [INode](_node_.inode.md).[generateId](_node_.inode.md#generateid)*

*Defined in [node.ts:27](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/node.ts#L27)*


#### Type declaration
►(): `string`





**Returns:** `string`






___

<a id="id"></a>

###  id

**●  id**:  *`string`* 

*Inherited from [INode](_node_.inode.md).[id](_node_.inode.md#id)*

*Defined in [node.ts:25](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/node.ts#L25)*





___

<a id="isdestroyed"></a>

###  isDestroyed

**●  isDestroyed**:  *`boolean`* 

*Inherited from [INode](_node_.inode.md).[isDestroyed](_node_.inode.md#isdestroyed)*

*Defined in [node.ts:28](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/node.ts#L28)*





___

<a id="nodes"></a>

###  nodes

**●  nodes**:  *`object`* 

*Defined in [manager.ts:30](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/manager.ts#L30)*


#### Type declaration


[id: `string`]: `IN`






___


## Methods
<a id="add"></a>

###  add

► **add**(node: *`IN`*): `this`



*Defined in [manager.ts:31](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/manager.ts#L31)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| node | `IN`   |  - |





**Returns:** `this`





___

<a id="create"></a>

###  create

► **create**(id?: *`string`*): `IN`



*Defined in [manager.ts:34](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/manager.ts#L34)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |





**Returns:** `IN`





___

<a id="emit"></a>

###  emit

► **emit**IE(eventName: *`string`*, data: *`IEventsList[IE]`*): `this`



*Inherited from [IEvents](_events_.ievents.md).[emit](_events_.ievents.md#emit)*

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

###  off

► **off**IE(eventName: *`string`*, listener: *`function`*): `this`



*Inherited from [IEvents](_events_.ievents.md).[off](_events_.ievents.md#off)*

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

###  on

► **on**IE(eventName: *`string`*, listener: *`function`*): `this`



*Inherited from [IEvents](_events_.ievents.md).[on](_events_.ievents.md#on)*

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

###  once

► **once**IE(eventName: *`string`*, listener: *`function`*): `this`



*Inherited from [IEvents](_events_.ievents.md).[once](_events_.ievents.md#once)*

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

###  remove

► **remove**(node: *`IN`*): `this`



*Defined in [manager.ts:33](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/manager.ts#L33)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| node | `IN`   |  - |





**Returns:** `this`





___

<a id="wrap"></a>

###  wrap

► **wrap**(node: *`IN`*): `this`



*Defined in [manager.ts:32](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/manager.ts#L32)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| node | `IN`   |  - |





**Returns:** `this`





___


