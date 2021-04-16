<template>
  <div>
    <h1>Reisefradrag</h1>

    <p v-if="travelDeduction">Here you go: {{ travelDeduction }}</p>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    let travelDeduction = ref("");
    onMounted(() => {
      travelDeduction.value = calculateDeduction();
      if (travelDeduction.value) console.log(travelDeduction);
    });

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

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }

          travelDeduction.value = data.reisefradrag;
          return travelDeduction.value;
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    };
    return { travelDeduction };
  },
};
</script>
