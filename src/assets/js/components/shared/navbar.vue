<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary z-depth-1">

    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" :to="{ path: 'home'} ">Home</router-link>
      </li>
      <!-- <li class="nav-item active">
        <router-link class="nav-link" :to="{ path: 'portfolio'} ">Portfólio</router-link>
      </li>
      <li class="nav-item active">
        <router-link class="nav-link" :to="{ path: 'contato'} ">Contato</router-link>
      </li> -->
    </ul>

  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
