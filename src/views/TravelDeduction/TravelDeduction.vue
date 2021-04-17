<template>
  <div className="max-w-screen-2xl p-8">
    <div class="flex flex-col items-center space-y-4">
      <h1 class="text-2xl">Reisefradrag</h1>
      <p v-if="travelDeduction">Here you go: {{ travelDeduction }}</p>

      <form action="submit" @submit.prevent="submit">
        <travel-inputs sectionLabel="Arbeidsreiser" @toParent="handler" />
        <travel-inputs sectionLabel="Besøksreiser" @toParent="handleAnother" />
        <button>Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
// import InputField from "../../components/InputField.vue";
import TravelInputs from "../../components/TravelInputs.vue";
export default {
  components: {
    TravelInputs,
    // InputField,
  },
  setup() {
    let travelDeduction = ref("");
    let workTravels;
    let workKm = ref();
    let workTimes = ref();
    let visitKm = ref();
    let visitTimes = ref();
    let request;
    let visitTravels;

    const handler = (value) => {
      workTravels = value;
    };

    const handleAnother = (value) => {
      visitTravels = value;
    };

    const submit = () => {
      request = {
        arbeidsreiser: workTravels ? workTravels : [{ km: 0, antall: 0 }],
        besoeksreiser: visitTravels ? visitTravels : [{ km: 0, antall: 0 }],
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
          console.error("There was an error!", error);
        });
    };

    return {
      travelDeduction,
      submit,
      workKm,
      workTimes,
      visitKm,
      visitTimes,
      TravelInputs,
      workTravels,
      handler,
      visitTravels,
      handleAnother,
    };
  },
};
</script>
