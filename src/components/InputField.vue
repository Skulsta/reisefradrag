<template>
  <input
    :value="modelValue"
    type="number"
    class="border"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script>
export default {
  props: {
    modelValue: { type: [String, Number], default: "" },
  },
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button,
input[type="number"] {
  -webkit-appearance: none;
  -moz-appearance: textfield;
  margin: 0;
}
</style>
