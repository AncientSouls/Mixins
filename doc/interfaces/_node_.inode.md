[ancient-mixins](../README.md) > ["node"](../modules/_node_.md) > [INode](../interfaces/_node_.inode.md)



# Interface: INode

## Type parameters
#### IEventsList :  [INodeEventsList](_node_.inodeeventslist.md)
## Hierarchy


↳  [IEvents](_events_.ievents.md)`IEventsList`

**↳ INode**

↳  [Node](../classes/_node_.node.md)




↳  [IManager](_manager_.imanager.md)










## Indexable

\[key: `string`\]:&nbsp;`any`

## Constructors
<a id="constructor"></a>


### ⊕ **new INode**(id?: *`string`*): [INode](_node_.inode.md)


*Defined in [node.ts:25](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/node.ts#L25)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |





**Returns:** [INode](_node_.inode.md)

---


## Properties
<a id="destroy"></a>

###  destroy

**●  destroy**:  *`function`* 

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

*Defined in [node.ts:27](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/node.ts#L27)*


#### Type declaration
►(): `string`





**Returns:** `string`






___

<a id="id"></a>

###  id

**●  id**:  *`string`* 

*Defined in [node.ts:25](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/node.ts#L25)*





___

<a id="isdestroyed"></a>

###  isDestroyed

**●  isDestroyed**:  *`boolean`* 

*Defined in [node.ts:28](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/node.ts#L28)*





___


## Methods
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


