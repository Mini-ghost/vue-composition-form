# Get Started

Vorms is a form validate library based on [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html).

## Installation

```bash
npm install @vorms/core
```

## CDN

```html
<script src="https://unpkg.com/@vorms/core"></script>
```

It will be exposed to global as `window.Vorms`

## Usage Example

```vue
<script setup lang="ts">
import { useForm } from '@vorms/core'

interface InitialValues {
  drink: string,
  sugar: number
}

const { register, handleSubmit, handleReset } = useForm<InitialValues>({
  initialValues: {
    drink: '',
    sugar: 30,
  },
  onSubmit(data) {
    console.log(data)
  }
})

const { value: drink, attrs: drinkFieldAttrs } = register('drink')
const { value: sugar, attrs: sugarFieldAttrs } = register('sugar')
</script>

<template>
  <form @submit="handleSubmit" @reset="handleReset">
    <label>Drink</label>
    <input v-model="drink" type="text" v-bind="drinkFieldAttrs">

    <label>Sugar level</label>
    <input v-model="sugar" type="number" v-bind="sugarFieldAttrs">

    <button type="reset">Reset</button>
    <button type="submit">Submit</button>
  </form>
</template>
```

More example please read the next section: [Examples](./examples)
