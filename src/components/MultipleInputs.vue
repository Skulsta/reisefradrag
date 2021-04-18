<template>
  <div class="mb-8 text-left">
    <label class="text-xl">{{ sectionLabel }}</label>
    <div
      v-for="(variation, counter) in travels"
      :key="counter"
      class="grid grid-cols-2 my-4 space-x-4"
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
        v-show="travels.length > 1"
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
    const travels = ref([{ km: "", antall: "" }]);

    const updateArray = function(value, counter) {
      const result = value.target.value;
      value.target.name === "km"
        ? (travels.value[counter].km = parseInt(result))
        : (travels.value[counter].antall = parseInt(result));
      this.$emit("toParent", toRaw(travels.value));
      console.log(travels.value);
    };

    const addVariation = () => {
      travels.value.push({
        km: "",
        antall: "",
      });
    };

    const removeVariation = () => {
      travels.value.splice(travels.value.length - 1, 1);
    };

    return {
      travels,
      addVariation,
      removeVariation,
      updateArray,
    };
  },
});
</script>
