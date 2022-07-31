# useFormContext

`useFormContext()` is a custom Vue composition api that allow you access the form context. This is useful with deeply nested component structures.

## Example

```vue
<script setup lang="ts">
import { useForm } from '@vorms/core'
import NestedTextField from './components/NestedTextField.vue'

const { handleSubmit } = useForm({
  initialValues: {
    drink: '',
  }
})
</script>

<template>
  <form @submit="handleSubmit">
    <NestedTextField />
    <button type="submit">
      Submit
    <button>
  </form>
</template>
```

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useField, useFormContext } from '@vorms/core'

const { validateField } = useFormContext()

// You can also use `register` return from `useFormContext()`
const { value, attrs, error } = useField('drink', {
  validate(value) {
    // Check stock
  }
})

const isValidating = ref(false)

const onCheckStock = async () => {
  isValidating.value = true
  await validateField('drink')
  isValidating.value = false
}
</script>

<template>
  <div>
    <label>Drink</label>
    <input v-model="value" type="text" :readonly="isValidating" v-bind="attrs">
    <button type="button" @click="onCheckStock" :disabled="isValidating">
      Check stock
    </button>
    <div v-if="error">
      {{ error }}
    </div>
  </div>
</template>
```
