<template>
  <img src="../assets/images/travel-image-3.png" alt="Travel" />
</template>

<script>
export default {
  setup() {
    const imageNumber = Math.ceil(Math.random() * 5);
    const image = "../assets/images/travel-image-1.png";
    return { imageNumber, image };
  },
};
</script>
