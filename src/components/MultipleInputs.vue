<template>
  <div class="mb-8">
    <label>{{ sectionLabel }}</label>
    <div
      v-for="(variation, counter) in variations"
      :key="counter"
      class="variations grid grid-cols-2 mb-4 space-x-4"
      @change="(e) => updateArray(e, counter)"
    >
      <input-field
        id="km"
        type="number"
        :name="`variations[${counter}].km`"
        placeholder="35"
        v-model="km"
        metaText="km"
      />
      <input-field
        id="times"
        :name="`variations[${counter}].times`"
        type="number"
        placeholder="5"
        v-model="times"
        metaText="antall"
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
    const km = ref("");
    const times = ref("");

    const updateArray = function(value, counter) {
      value.target.id === "km"
        ? (variations.value[counter].km = parseInt(km.value))
        : (variations.value[counter].antall = parseInt(times.value));
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
      km,
      times,
    };
  },
});
</script>
