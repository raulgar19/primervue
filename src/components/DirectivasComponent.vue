<template>
  <div>
    <h1>Ejemplo directivas</h1>
    <h3>{{ $data }}</h3>
    <hr />
    <label>Introduzca serie</label>
    <br />
    <input type="text" v-model="serieNueva" />
    <br />
    <button @click="nuevaSerie()">Añadir serie</button>
    <br />
    <ul v-if="series.length > 0">
      <li v-for="serie in series" :key="serie">
        {{ serie }}
      </li>
    </ul>
    <hr />
    <label>Introduzca un número</label>
    <br />
    <input type="number" v-model="numero" />
    <h3 v-if="numero > 0" style="color: green">Positivo</h3>
    <h3 v-else-if="numero < 0" style="color: red">Negativo</h3>
    <h3 v-else style="color: darkblue">Cero</h3>
  </div>
</template>

<script>
export default {
  name: "DirectivasComponent",
  data() {
    return {
      series: ["Futurama", "Mindhunter", "The Boys", "Stranger Things"],
      numero: 0,
      nombre: "Raúl",
      serieNueva: "",
    };
  },
  methods: {
    nuevaSerie() {
      this.series.push(this.serieNueva);
      this.serieNueva = "";
    },
  },
};
</script>

<style></style>
