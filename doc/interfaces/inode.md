[ancient-mixins](../README.md) > [INode](../interfaces/inode.md)



# Interface: INode

## Type parameters
#### IEventsList :  [INodeEventsList](inodeeventslist.md)
## Hierarchy


↳  [IEvents](ievents.md)`IEventsList`

**↳ INode**

↳  [Node](../classes/node.md)




↳  [IManager](imanager.md)










## Indexable

\[key: `string`\]:&nbsp;`any`

## Constructors
<a id="constructor"></a>


### ⊕ **new INode**(id?: *`string`*): [INode](inode.md)


*Defined in [lib/node.ts:25](https://github.com/AncientSouls/Mixins/blob/310ab09/src/lib/node.ts#L25)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |





**Returns:** [INode](inode.md)

---


## Properties
<a id="destroy"></a>

###  destroy

**●  destroy**:  *`function`* 

*Defined in [lib/node.ts:29](https://github.com/AncientSouls/Mixins/blob/310ab09/src/lib/node.ts#L29)*


#### Type declaration
►(): `void`





**Returns:** `void`






___

<a id="emitter"></a>

###  emitter

**●  emitter**:  *`EventEmitter`* 

*Inherited from [IEvents](ievents.md).[emitter](ievents.md#emitter)*

*Defined in [lib/events.ts:9](https://github.com/AncientSouls/Mixins/blob/310ab09/src/lib/events.ts#L9)*





___

<a id="generateid"></a>

###  generateId

**●  generateId**:  *`function`* 

*Defined in [lib/node.ts:27](https://github.com/AncientSouls/Mixins/blob/310ab09/src/lib/node.ts#L27)*


#### Type declaration
►(): `string`





**Returns:** `string`






___

<a id="id"></a>

###  id

**●  id**:  *`string`* 

*Defined in [lib/node.ts:25](https://github.com/AncientSouls/Mixins/blob/310ab09/src/lib/node.ts#L25)*





___

<a id="isdestroyed"></a>

###  isDestroyed

**●  isDestroyed**:  *`boolean`* 

*Defined in [lib/node.ts:28](https://github.com/AncientSouls/Mixins/blob/310ab09/src/lib/node.ts#L28)*





___


## Methods
<a id="emit"></a>

###  emit

► **emit**IE(eventName: *`string`*, data: *`IEventsList[IE]`*): `this`



*Inherited from [IEvents](ievents.md).[emit](ievents.md#emit)*

*Defined in [lib/events.ts:11](https://github.com/AncientSouls/Mixins/blob/310ab09/src/lib/events.ts#L11)*



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

*Defined in [lib/events.ts:20](https://github.com/AncientSouls/Mixins/blob/310ab09/src/lib/events.ts#L20)*



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

*Defined in [lib/events.ts:14](https://github.com/AncientSouls/Mixins/blob/310ab09/src/lib/events.ts#L14)*



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

*Defined in [lib/events.ts:17](https://github.com/AncientSouls/Mixins/blob/310ab09/src/lib/events.ts#L17)*



**Type parameters:**

#### IE :  `keyof IEventsList`
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventName | `string`   |  - |
| listener | `function`   |  - |





**Returns:** `this`





___


