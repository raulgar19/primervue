<template>
  <h1>Par o impar</h1>
</template>

<script>
export default {
  name: "ParImparComponent",
  data() {
    return {
      numero: 0,
    };
  },
  methods: {
    esParOImpar() {
      return this.numero % 2 === 0 ? "Par" : "Impar";
    },
  },
};
</script>

<style></style>
