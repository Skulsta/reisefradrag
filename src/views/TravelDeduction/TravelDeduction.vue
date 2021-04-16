<template>
  <div>
    <h1>Reisefradrag</h1>
  </div>
</template>
<script>
import { onMounted } from "vue";
import calculateDeduction from "../../functions/calculateDeduction";
export default {
  setup() {
    onMounted(() => {
      return calculateDeduction();
    });
  },
};
</script>
