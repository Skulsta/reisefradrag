<template>
  <div class="mb-8 text-left">
    <label class="text-xl">{{ sectionLabel }}</label>
    <div
      v-for="(variation, counter) in variations"
      :key="counter"
      class="variations grid grid-cols-2 my-4 space-x-4"
      @input="(e) => updateArray(e, counter)"
    >
      <input-field type="number" name="km" placeholder="35" metaText="km" />
      <input-field
        name="times"
        type="number"
        placeholder="5"
        metaText="antall"
      />
    </div>
    <div class="flex space-x-8">
      <div
        class="text-green-600 hover:text-green-500 cursor-pointer"
        @click="addVariation"
      >
        Legg til flere
      </div>
      <div
        v-show="variations.length > 1"
        class="text-red-600 hover:text-red-400 cursor-pointer"
        @click="removeVariation"
      >
        Fjern felt
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, toRaw } from "vue";
import InputField from "./InputField.vue";

export default defineComponent({
  props: {
    sectionLabel: { type: String, default: "" },
  },
  components: {
    InputField,
  },
  setup() {
    const variations = ref([{ km: "", antall: "" }]);

    const updateArray = function(value, counter) {
      const result = value.target.value;
      value.target.name === "km"
        ? (variations.value[counter].km = parseInt(result))
        : (variations.value[counter].antall = parseInt(result));
      this.$emit("toParent", toRaw(variations.value));
      console.log(variations.value);
    };

    const addVariation = () => {
      variations.value.push({
        km: "",
        antall: "",
      });
    };

    const removeVariation = () => {
      variations.value.splice(variations.value.length - 1, 1);
    };

    return {
      variations,
      addVariation,
      removeVariation,
      updateArray,
    };
  },
});
</script>
