<template>
  <div>
    <h1>Propiedad Conmutada</h1>
    <ul>
      <li v-for="juego of juegosRojos" :key="juego" v-html="juego"></li>
    </ul>
    <label>Introduzca un número</label>
    <input type="number" v-model="numero" />
    <div v-html="evaluarNumero"></div>
  </div>
</template>

<script>
export default {
  name: "PropiedadConmutada",
  computed: {
    evaluarNumero() {
      let data = "";
      if (this.numero % 2 == 0) {
        data = "<h4 style='color:green'>Par: " + this.numero + "</h4>";
      } else {
        data = "<h4 style='color:green'>Impar: " + this.numero + "</h4>";
      }
      return data;
    },

    juegosRojos() {
      var datos = this.juegos;
      var i = 0;

      for (var juego of this.juegos) {
        var juegoRojo = "<span style='color:red'>" + juego + "</span>";
        datos[i] = juegoRojo;
        i++;
      }

      return datos;
    },
  },
  data() {
    return {
      juegos: ["Parchís", "Canicas", "Luz verde, luz roja", "La galleta"],
      numero: 0,
    };
  },
};
</script>
