<template>
  <div className="max-w-screen-2xl p-8">
    <div class="flex flex-col items-center space-y-4">
      <h1 class="text-2xl">Reisefradrag</h1>
      <p v-if="travelDeduction">Here you go: {{ travelDeduction }}</p>

      <form action="submit" @submit.prevent="(e) => submit(e)">
        <label>Arbeidsreiser</label>
        <div class="grid grid-cols-2 mb-8 space-x-4">
          <input
            class="border"
            label="km"
            v-model="workKm"
            name="km"
            type="number"
            placeholder="200"
          />
          <input
            class="border"
            label="Antall"
            v-model="workTimes"
            name="times"
            type="number"
            placeholder="5"
          />
        </div>
        <label>Besøksreiser</label>
        <div class="grid grid-cols-2 mb-8 space-x-4">
          <input
            class="border"
            label="km"
            v-model="visitKm"
            name="km"
            type="number"
            placeholder="200"
          />
          <input
            class="border"
            label="Antall"
            v-model="visitTimes"
            name="times"
            type="number"
            placeholder="5"
          />
        </div>
        <p>Travel inputs component below</p>
        <travel-inputs
          @updateArray="
            {
              updateArray();
            }
          "
        />
        <button>Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
// import InputField from "../../components/InputField.vue";
import TravelInputs from "./TravelInputs.vue";
export default {
  components: {
    TravelInputs,
    // InputField,
  },
  setup() {
    let travelDeduction = ref("");
    const workTravels = ref([{ km: "", times: "" }]);
    let workKm = ref();
    let workTimes = ref();
    let visitKm = ref();
    let visitTimes = ref();
    let request;
    const variations = ref([{ km: "", times: "" }]);

    const updateArray = (value, counter) => {
      value.target.name.match("km")
        ? (variations.value[counter].km = value.target.value)
        : (variations.value[counter].times = value.target.value);
      console.log(variations.value);
    };

    const addVariation = () => {
      variations.value.push({
        km: "",
        times: "", // TODO Fetch the main price to make it more conventient to enter variations that doesn't impact the price
      });
    };

    const removeVariation = (counter) => {
      variations.value.splice(counter, 1);
    };

    const getTravelInputs = () => {};

    const submit = () => {
      getTravelInputs();
      request = {
        arbeidsreiser: [
          { km: parseInt(workKm.value) || 0, antall: workTimes.value || 0 },
        ],
        besoeksreiser: [
          { km: visitKm.value || 0, antall: visitTimes.value || 0 },
        ],
        utgifterBomFergeEtc: 4850,
      };
      travelDeduction.value = calculateDeduction();
    };

    const calculateDeduction = () => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      };
      fetch(
        "https://9f22opit6e.execute-api.us-east-2.amazonaws.com/default/reisefradrag",
        requestOptions
      )
        .then(async (response) => {
          const data = await response.json();

          if (!response.ok) {
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }

          travelDeduction.value = data.reisefradrag;
        })
        .catch((error) => {
          // Display error message to the user if this happens
          console.error("There was an error!", error);
        });
    };

    // call on submit with values
    // calculateDeduction();

    return {
      travelDeduction,
      submit,
      workKm,
      workTimes,
      visitKm,
      visitTimes,
      TravelInputs,
      workTravels,
      addVariation,
      removeVariation,
      updateArray,
      //   InputField,
    };
  },
};
</script>
