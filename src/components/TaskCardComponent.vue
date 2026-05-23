<script>

export default {

  props:[
    'tarea',
    'index'
  ],

  emits:[
    'eliminar',
    'completar'
  ]

}

</script>

<template>

<div class="task-card">

  <h3>
    {{ tarea.nombre }}
  </h3>

  <p>
    {{ tarea.descripcion }}
  </p>

  <span
    class="estado"
    :class="{
      completada:tarea.completada
    }"
  >

    {{
      tarea.completada
      ? 'Completada'
      : 'Pendiente'
    }}

  </span>

  <div class="task-actions">

    <button
      class="complete-btn"
      @click="$emit('completar')"
    >
      Completar
    </button>

    <button
      class="delete-btn"
      @click="$emit('eliminar')"
    >
      Eliminar
    </button>

  </div>

</div>

</template>