<template>
  <h1>Mi primer vue de viernes, que ilusión!!!</h1>
  <img src="../assets/images/logo.png" />
  <h2>Su nombre es: {{ nombre }}</h2>
  <h2>Su edad es: {{ edad }}</h2>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      nombre: "Alumno",
      edad: 22,
      miArray: [],
      objeto: {},
    };
  },
};
</script>

<style>
h1 {
  color: blue;
}

@import "../assets/css/estilos.css";
</style>
