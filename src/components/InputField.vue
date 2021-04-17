<template>
  <div class="flex flex-col">
    <label>{{ label }}</label>
    <input
      type="number"
      v-bind="$attrs"
      :value="value"
      class="border"
      @input="$emit('update:model-value', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  props: {
    name: { type: String, default: "" },
    label: { type: String, default: "" },
    value: { type: String, default: "" },
    modelValue: { type: [String, Number], default: "" },
  },
  emits: ["update:model-value"],
};
</script>
