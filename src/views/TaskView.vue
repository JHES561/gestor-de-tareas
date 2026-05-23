<script>

import TaskCardComponent
from '../components/TaskCardComponent.vue'

import {
  getTasks,
  saveTasks
}
from '../services/TaskService'

export default {

  components:{
    TaskCardComponent
  },

  data(){

    return{

      tareas:[],

      nuevaTarea:{
        nombre:'',
        descripcion:'',
        completada:false
      }

    }

  },

  mounted(){

    this.tareas =
    getTasks()

  },

  methods:{

    agregarTarea(){

      this.tareas.push({

        ...this.nuevaTarea

      })

      saveTasks(this.tareas)

      this.nuevaTarea = {

        nombre:'',
        descripcion:'',
        completada:false

      }

    },

    eliminar(index){

      this.tareas.splice(index,1)

      saveTasks(this.tareas)

    },

    completar(index){

      this.tareas[index]
      .completada = true

      saveTasks(this.tareas)

    }

  }

}

</script>

<template>

<div>

  <h2>
    Mis tareas
  </h2>

  <div class="task-form">

    <input
      v-model="nuevaTarea.nombre"
      placeholder="Nombre"
    >

    <textarea
      v-model="nuevaTarea.descripcion"
      placeholder="Descripción"
    ></textarea>

    <button @click="agregarTarea">

      Agregar tarea

    </button>

  </div>

  <div class="tasks-grid">

    <TaskCardComponent

      v-for="(tarea,index)
      in tareas"

      :key="index"

      :tarea="tarea"

      :index="index"

      @eliminar="eliminar(index)"

      @completar="completar(index)"

    />

  </div>

</div>

</template>