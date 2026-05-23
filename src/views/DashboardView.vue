<script>

import HeaderComponent
from '../components/HeaderComponent.vue'

export default {

  components:{

    HeaderComponent

  }

}

</script>

<template>

<div>

  <HeaderComponent />

  <div class="dashboard">

    <router-view />

  </div>

</div>

</template>