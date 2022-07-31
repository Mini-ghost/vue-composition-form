# useField

`useForm()` is a custom Vue composition api that will return specific field value, meta (state) and attributes, you can also add validation for that field.

`useField()` API is equal to `register()` that return by `useForm()`.

```ts
useField<Value>(name, {
    validate(value: Value) {}
}) 
```

## Options

### name (Required)

Name of the field.

- Type `string`

### options.validate

This function allows you to write your logic to validate your field, this is optional.

- Type `(value: Value) => void | string | Promise<string | void>`

## Returns

### value

Current field value.

- Type `Value`

### errors

Field error message.

- Type `ComputedRef<string | undefined>`

### touched

Return `true` after input first blur.

- Type `ComputedRef<boolean | undefined>`

### dirty

Return `true` if current field value are not equal initial value.

- Type `ComputedRef<boolean>`

### attrs.name

Input's name that we pass by.

- Type `string`

### attrs.onBlur

onBlur prop to subscribe the input blur event.

- Type `(event: Event) => void`

### attrs.onChange

onChange prop to subscribe the input change event.

- Type `() => void`

## Example

```vue
<script setup lang="ts">
import { useField } from '@vorms/core'

const { value, attrs } = useField<string>('ice', {
  validate(value) {
    let error: string | undefined

    if(!value.length) {
      error = 'This is required!!'
    }

    return error
  }
})
</script>

<template>
  <div>
    <input v-model="value" type="text" v-bind="attrs" >
  </div>
</template>
```
