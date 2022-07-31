# useFieldArray

`useFieldArray()` is a custom Vue composition api that will return specific fields values, meta (state), attributes and provides common operation helpers, you can also add validation for those fields.

```ts
useFieldArray<Value>(name, {
  validate(value: Value[]) {}
})
```

## Options

### name (Required)

Name of the field array.

- Type `string`

### options.validate

This function allows you to write your logic to validate your field, this is optional.

- Type

```ts
(value: Value[]) => FormErrors<Value[]> | void | Promise<FormErrors<Value[]> | void>
```

## Returns

### fields

This array contains every entry of field's key, value, meta and attrs.

- Type `Ref<FieldEntry<Value>[]>`  

### append

Append an item to the field array.

- Type `(value: Value) => void`

### prepend

Prepend an item to the field array.

- Type `(value: Value) => void`

### swap

Swap items position.

- Type `(indexA: number, indexB: number) => void`

### remove

Remove item at the specified position, or remove all when no index provided.

- Type `(index?: number) => void`

### move

Move item to another position.

- Type `(from: number, to: number) => void`

### insert

Insert item at the specified position.

- Type `(index: number, value: Value) => void`

### update

Update int at the specified position.

- Type `(index: number, value: Value) => void`

### replace

Replace the entire field array values.

- Type `(values: Value[]) => void`

## Example

```vue
<script setup lang="ts">
import { useForm, useFieldArray } from '@vorms/core'

const { handleSubmit } = useForm({
  initialValues: {
    foods: ['Bubble Tea', 'Stinky Tofu', 'Scallion Pancake']
  },
  onSubmit(data) {
    console.log(data)
  }
})

const { fields, append } = useFieldArray<string>('foods')

const onAppend = () => {
  append('Taiwanese Fried Chicken')
}
</script>

<template>
  <form @submit="handleSubmit">
    <div v-for="field in fields" :key="field.key">
      <input v-model="field.value" type="text" :name="field.name" v-bind="field.attrs">
    </div>
    <button type="button" @click="onAppend">
      Append
    </button>
    <button type="submit">
      Order
    </button>
    <input type="submit" />
  </form>
</template>
```
