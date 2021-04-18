<template>
  <div className="max-w-screen-2xl p-8 font-light mx-auto">
    <div class="flex flex-col items-center space-y-8 text-center text-gray-800">
      <div class="h-2">
        <p v-show="request && travelDeduction === 0">
          Beløpet gir dessverre ikke rett på fradrag 😥
        </p>
      </div>
      <div class="flex text-xl space-x-2 text-gray-800 border-b">
        <h1>Reisefradrag:</h1>
        <div class="font-medium text-green-600">
          {{
            travelDeduction &&
              Math.trunc(travelDeduction).toLocaleString("nb-NO")
          }}
          kr
        </div>
      </div>
      <form action="submit" @submit.prevent="submit">
        <multiple-inputs
          sectionLabel="Arbeidsreiser"
          @updateTravels="getWorkTravels"
        />
        <multiple-inputs
          sectionLabel="Besøksreiser"
          @updateTravels="getVisitTravels"
        />
        <div class="text-left">
          <label for="expenses">Utgifter</label>
          <input-field
            class="w-1/2"
            type="number"
            v-model="expenses"
            metaText="kr"
            placeholder="2 500"
          />
        </div>
        <button
          class="bg-green-500 text-lg border-2 hover:text-green-500 border-green-500 focus:outline-none text-white hover:bg-white py-2 w-full sm:w-2/3 my-12"
        >
          Fullfør
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import MultipleInputs from "../../components/MultipleInputs.vue";
import InputField from "../../components/InputField.vue";
export default {
  components: {
    MultipleInputs,
    InputField,
  },
  setup() {
    let travelDeduction = ref("0");
    let workTravels;
    let visitTravels;
    let request = ref();
    let expenses = ref("");

    const getWorkTravels = (value) => {
      workTravels = value;
    };

    const getVisitTravels = (value) => {
      visitTravels = value;
    };

    const submit = () => {
      request.value = {
        arbeidsreiser: workTravels ? workTravels : [{ km: 0, antall: 0 }],
        besoeksreiser: visitTravels ? visitTravels : [{ km: 0, antall: 0 }],
        utgifterBomFergeEtc: parseInt(expenses.value),
      };
      travelDeduction.value = calculateDeduction();
    };

    const calculateDeduction = () => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request.value),
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
      MultipleInputs,
      workTravels,
      getWorkTravels,
      visitTravels,
      getVisitTravels,
      expenses,
      request,
    };
  },
};
</script>
