<template>
  <div>
    <h1>Ciclo de Vida de un Componente</h1>
    <h2 style="color: red">{{ mensaje }}</h2>
    <button @click="cambiarMensaje()">Mostrar Mensaje</button>
  </div>
</template>

<script>
export default {
  name: "CicloVidaComponent",
  data() {
    return {
      mensaje: "Hoy es viernes",
    };
  },
  methods: {
    cambiarMensaje() {
      this.mensaje = "Hoy se sale!!!";
    },
  },
  mounted() {
    console.log("El componente ha sido montado en el DOM.");
  },
  created() {
    console.log("El componente ha sido creado.");
  },
  updated() {
    console.log("El componente ha sido actualizado.");
  },
  unmounted() {
    console.log("El componente ha sido desmontado del DOM.");
  },
};
</script>

<style></style>
