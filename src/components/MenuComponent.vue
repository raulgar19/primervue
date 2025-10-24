<template>
  <nav>
    <ul id="menu">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/musica">Musica</router-link>
      </li>
      <li>
        <router-link to="/cine">Cine</router-link>
      </li>
      <li>
        <router-link to="/cicloVida">Ciclo de Vida</router-link>
      </li>
      <li>
        <router-link to="/directivas">Directivas</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<style>
ul#menu {
  display: inline;
}
</style>
