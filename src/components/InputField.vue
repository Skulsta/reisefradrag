<template>
  <div>
    <div
      class="font-light text-gray border focus-within:border-green-500 relative p-4"
    >
      <input
        :name="name"
        :id="id"
        :value="modelValue"
        :placeholder="placeholder"
        type="number"
        class="block font-light w-full appearance-none focus:outline-none text-left"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span
        ><label
          v-show="metaText"
          class="absolute top-0 py-4 right-0 mx-4"
          :for="name"
        >
          {{ metaText }}
        </label>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: { type: String, default: "" },
    id: { type: String, default: "" },
    modelValue: { type: [String, Number], default: "" },
    placeholder: { type: [String, Number], default: "" },
    metaText: { type: String, default: "" },
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
