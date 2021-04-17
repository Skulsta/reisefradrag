<template>
  <div>
    <div
      v-for="(variation, counter) in variations"
      :key="counter"
      class="variations grid grid-cols-2 mb-8 space-x-4"
    >
      <input-field
        label="Arbeidsreiser"
        type="number"
        :name="`variations[${counter}].km`"
        placeholder="35"
      />
      <input-field
        label="Besøksreiser"
        :name="`variations[${counter}].times`"
        type="number"
        placeholder="5"
      />
    </div>
    <div class="flex space-x-8">
      <div class="text-green-600 cursor-pointer" @click="addVariation">
        Legg til flere
      </div>
      <div
        v-show="variations.length"
        class="text-red-600 cursor-pointer opacity-75"
        @click="removeVariation"
      >
        Fjern siste felt
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import InputField from "../../components/InputField.vue";

export default {
  components: { InputField },
  setup() {
    const variations = ref(new Array());

    const addVariation = () => {
      variations.value.push({
        km: "",
        times: "", // TODO Fetch the main price to make it more conventient to enter variations that doesn't impact the price
      });
    };

    const removeVariation = (counter) => {
      variations.value.splice(counter, 1);
    };

    return {
      variations,
      addVariation,
      removeVariation,
    };
  },
};
</script>
