[ancient-mixins](../README.md) > ["events"](../modules/_events_.md) > [Events](../classes/_events_.events.md)



# Class: Events

## Type parameters
#### IEventsList 
## Hierarchy


↳  [IEvents](../interfaces/_events_.ievents.md)

**↳ Events**







## Indexable

\[key: `string`\]:&nbsp;`any`
## Index

### Properties

* [emitter](_events_.events.md#emitter)


### Methods

* [emit](_events_.events.md#emit)
* [off](_events_.events.md#off)
* [on](_events_.events.md#on)
* [once](_events_.events.md#once)



---
## Properties
<a id="emitter"></a>

### «Static» emitter

**●  emitter**:  *`EventEmitter`* 

*Inherited from [IEvents](../interfaces/_events_.ievents.md).[emitter](../interfaces/_events_.ievents.md#emitter)*

*Defined in [events.ts:9](https://github.com/AncientSouls/Mixins/blob/1f04eec/src/lib/events.ts#L9)*





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


