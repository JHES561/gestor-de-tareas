<script>

export default {

  data(){

    return{

      usuario:'',
      password:'',
      error:''

    }

  },

  methods:{

    login(){

      if(

        this.usuario === 'admin'
        &&
        this.password === '1234'

      ){

        localStorage.setItem(
          'usuario',
          this.usuario
        )

        this.$router.push(
          '/dashboard/tareas'
        )

      }

      else{

        this.error =
        'Credenciales incorrectas'

      }

    }

  }

}

</script>

<template>

<div class="login-container">

  <div class="login-box">

    <h1>
      Gestor de Tareas
    </h1>

    <input
      v-model="usuario"
      placeholder="Usuario"
    >

    <input
      v-model="password"
      type="password"
      placeholder="Contraseña"
    >

    <button @click="login">

      Ingresar

    </button>

    <p class="error">

      {{ error }}

    </p>

  </div>

</div>

</template>