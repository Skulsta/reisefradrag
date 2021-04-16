<template>
  <div className="max-w-screen-2xl p-8">
    <div class="flex flex-col items-center space-y-4">
      <h1 class="text-2xl">Reisefradrag</h1>

      <p v-if="travelDeduction">Here you go: {{ travelDeduction }}</p>
      <form action="submit" @submit.prevent="showData">
        <travel-inputs />
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import TravelInputs from "./TravelInputs.vue";
export default {
  components: { TravelInputs },
  setup() {
    let travelDeduction = ref("");
    const calculateDeduction = () => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          arbeidsreiser: [
            { km: 91, antall: 180 },
            { km: 378, antall: 4 },
          ],
          besoeksreiser: [{ km: 580, antall: 4 }],
          utgifterBomFergeEtc: 4850,
        }),
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
    travelDeduction.value = calculateDeduction();

    return { travelDeduction };
  },
};
</script>
