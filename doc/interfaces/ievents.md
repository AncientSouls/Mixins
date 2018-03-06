[ancient-mixins](../README.md) > [IEvents](../interfaces/ievents.md)



# Interface: IEvents

## Type parameters
#### IEventsList 
## Hierarchy


 [IInstance](iinstance.md)

**↳ IEvents**

↳  [Events](../classes/events.md)




↳  [INode](inode.md)










## Indexable

\[key: `string`\]:&nbsp;`any`

## Properties
<a id="emitter"></a>

###  emitter

**●  emitter**:  *`EventEmitter`* 

*Defined in [events.ts:9](https://github.com/AncientSouls/Mixins/blob/791ea5c/src/lib/events.ts#L9)*





___


## Methods
<a id="emit"></a>

###  emit

► **emit**IE(eventName: *`string`*, data: *`IEventsList[IE]`*): `this`



*Defined in [events.ts:11](https://github.com/AncientSouls/Mixins/blob/791ea5c/src/lib/events.ts#L11)*



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



*Defined in [events.ts:20](https://github.com/AncientSouls/Mixins/blob/791ea5c/src/lib/events.ts#L20)*



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



*Defined in [events.ts:14](https://github.com/AncientSouls/Mixins/blob/791ea5c/src/lib/events.ts#L14)*



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



*Defined in [events.ts:17](https://github.com/AncientSouls/Mixins/blob/791ea5c/src/lib/events.ts#L17)*



**Type parameters:**

#### IE :  `keyof IEventsList`
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventName | `string`   |  - |
| listener | `function`   |  - |





**Returns:** `this`





___


