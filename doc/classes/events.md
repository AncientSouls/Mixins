[ancient-mixins](../README.md) > [Events](../classes/events.md)



# Class: Events

## Type parameters
#### IEventsList 
## Hierarchy


↳  [IEvents](../interfaces/ievents.md)

**↳ Events**







## Indexable

\[key: `string`\]:&nbsp;`any`
## Index

### Properties

* [emitter](events.md#emitter)


### Methods

* [emit](events.md#emit)
* [off](events.md#off)
* [on](events.md#on)
* [once](events.md#once)



---
## Properties
<a id="emitter"></a>

### «Static» emitter

**●  emitter**:  *`EventEmitter`* 

*Inherited from [IEvents](../interfaces/ievents.md).[emitter](../interfaces/ievents.md#emitter)*

*Defined in [lib/events.ts:9](https://github.com/AncientSouls/Mixins/blob/310ab09/src/lib/events.ts#L9)*





___


## Methods
<a id="emit"></a>

### «Static» emit

► **emit**IE(eventName: *`string`*, data: *`IEventsList[IE]`*): `this`



*Inherited from [IEvents](../interfaces/ievents.md).[emit](../interfaces/ievents.md#emit)*

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

### «Static» off

► **off**IE(eventName: *`string`*, listener: *`function`*): `this`



*Inherited from [IEvents](../interfaces/ievents.md).[off](../interfaces/ievents.md#off)*

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

### «Static» on

► **on**IE(eventName: *`string`*, listener: *`function`*): `this`



*Inherited from [IEvents](../interfaces/ievents.md).[on](../interfaces/ievents.md#on)*

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

### «Static» once

► **once**IE(eventName: *`string`*, listener: *`function`*): `this`



*Inherited from [IEvents](../interfaces/ievents.md).[once](../interfaces/ievents.md#once)*

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


