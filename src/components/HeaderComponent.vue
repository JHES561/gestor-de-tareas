<script>

export default {

  methods:{

    logout(){

      localStorage.removeItem('usuario')

      this.$router.push('/login')

    }

  }

}

</script>

<template>

<header class="header">

  <h2>
    Gestor de Tareas
  </h2>

  <button
    class="logout-btn"
    @click="logout"
  >
    Cerrar sesión
  </button>

</header>

</template>