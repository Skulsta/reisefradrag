<template>
  <div className="max-w-screen-2xl p-8">
    <div class="flex flex-col items-center space-y-4 text-center text-gray-800">
      <h1 class="text-2xl">Reisefradrag</h1>
      <input
        :value="travelDeduction && travelDeduction.toLocaleString('nb-NO')"
        readOnly
        class="w-46 mx-4 my-8 text-center border-b focus:outline-none "
      />
      <form action="submit" @submit.prevent="submit">
        <multiple-inputs sectionLabel="Arbeidsreiser" @toParent="handler" />
        <multiple-inputs
          sectionLabel="Besøksreiser"
          @toParent="handleAnother"
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
          class="bg-green-500 focus:outline-none text-white hover:bg-green-600 py-2 w-1/2 my-8"
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
    let travelDeduction = ref("");
    let workTravels;
    let workKm = ref();
    let workTimes = ref();
    let visitKm = ref();
    let visitTimes = ref();
    let request;
    let visitTravels;
    let expenses = ref("");

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
        utgifterBomFergeEtc: parseInt(expenses.value),
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
      MultipleInputs,
      workTravels,
      handler,
      visitTravels,
      handleAnother,
      expenses,
    };
  },
};
</script>
