<template>
  <h1>Par o impar</h1>
  <input type="number" v-model="numero" />
  <p>El número {{ numero }} es: {{ esParOImpar() }}</p>
  <br />
  <button @click="generarRandom()">Generar random</button>
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

    generarRandom() {
      var num = parseInt(Math.random() * 100) + 1;
      this.numero = num;
    },
  },
};
</script>

<style></style>
