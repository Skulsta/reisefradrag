<template>
  <div className="max-w-screen-2xl px-8 py-12 font-light mx-auto">
    <div class="flex flex-col items-center text-center text-gray-800">
      <img
        :class="travelDeduction > 0 && 'animate-bounce'"
        src="../../assets/images/travel-image-3.png"
        alt="Travel"
      />
      <div
        v-show="travelDeduction > 0"
        class="font-medium text-xl pl-20 -mt-12 text-green-600"
      >
        <p class="text-sm text-right text-gray-600 font-light">
          Fradrag:
        </p>
        {{
          travelDeduction && Math.trunc(travelDeduction).toLocaleString("nb-NO")
        }}
        kr
      </div>
      <div class="items-end mt-8 mb-4 text-gray-700">
        <h1 class=" text-2xl">Reisefradrag</h1>
        <p class="text-base">
          Fyll ut feltene for å regne ut inntektsfradrag
        </p>
        <div class="h-4 text-red-600">
          <p v-show="request && travelDeduction === 0">
            Beløpet gir ikke rett på fradrag 😥
          </p>
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
        <div class="text-left flex">
          <div class=" max-w-md text-gray-800">
            <div>
              <label class="text-xl" for="expenses">Utgifter</label>
              <p class="py-4">
                I visse tilfeller kan du ha krav på fradrag for utgifter til
                bompenger og ferge i tillegg til reisefradraget.
                <a
                  class="text-green-600 hover:text-green-500"
                  href="https://www.skatteetaten.no/person/skatt/skattemelding/finn-post/3/2/8/"
                  target="_blank"
                  rel="noreferrer"
                  >Les mer</a
                >
              </p>
              <input-field
                class=" w-1/2"
                type="number"
                v-model="expenses"
                metaText="kr"
                placeholder="2 500"
              />
            </div>
          </div>
        </div>
        <button
          class="bg-green-500 text-lg border-2 hover:text-green-500 border-green-500 focus:outline-none text-white hover:bg-white py-2 w-full sm:w-2/3 my-8"
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
      window.scrollTo(0, 0);
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
