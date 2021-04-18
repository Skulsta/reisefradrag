<template>
  <div>
    <label>{{ sectionLabel }}</label>
    <div
      v-for="(variation, counter) in variations"
      :key="counter"
      class="variations grid grid-cols-2 mb-8 space-x-4"
      @change="(e) => updateArray(e, counter)"
    >
      <input
        type="number"
        :name="`variations[${counter}].km`"
        placeholder="35"
        class="border"
      />
      <input
        :name="`variations[${counter}].times`"
        type="number"
        placeholder="5"
        class="border"
      />
    </div>
    <div class="flex space-x-8">
      <div class="text-green-600 cursor-pointer" @click="addVariation">
        Legg til flere
      </div>
      <div
        v-show="variations.length > 1"
        class="text-red-600 cursor-pointer opacity-75"
        @click="removeVariation"
      >
        Fjern siste felt
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, toRaw } from "vue";

export default defineComponent({
  props: {
    sectionLabel: { type: String, default: "" },
  },
  setup() {
    const variations = ref([{ km: "", antall: "" }]);

    const updateArray = function(value, counter) {
      value.target.name.match("km")
        ? (variations.value[counter].km = parseInt(value.target.value))
        : (variations.value[counter].antall = parseInt(value.target.value));
      this.$emit("toParent", toRaw(variations.value));
    };

    const addVariation = () => {
      variations.value.push({
        km: "",
        antall: "",
      });
    };

    const removeVariation = (counter) => {
      // TODO This should update some value to resolve a bug
      variations.value.splice(counter, 1);
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
