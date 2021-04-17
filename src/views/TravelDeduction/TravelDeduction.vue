<template>
  <div className="max-w-screen-2xl p-8">
    <div class="flex flex-col items-center space-y-4">
      <h1 class="text-2xl">Reisefradrag</h1>
      <p v-if="travelDeduction">Here you go: {{ travelDeduction }}</p>

      <form action="submit" @submit.prevent="(e) => submit(e)">
        <div class="grid grid-cols-2 mb-8 space-x-4">
          <input v-model="workKm" name="km" type="number" />
          <input
            v-model="workTimes"
            name="times"
            type="number"
            placeholder="5"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    let travelDeduction = ref("");
    let workKm = ref(102);
    let workTimes = ref(180);
    let request;

    const submit = () => {
      request = {
        arbeidsreiser: [
          { km: parseInt(workKm.value), antall: workTimes.value },
        ],
        besoeksreiser: [{ km: 580, antall: 4 }],
        utgifterBomFergeEtc: 4850,
      };
      console.log(request);
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

    return { travelDeduction, submit, workKm, workTimes };
  },
};
</script>
