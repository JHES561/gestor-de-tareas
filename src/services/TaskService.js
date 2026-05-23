const KEY = 'tareas'

export function getTasks(){

  const tareas =
  localStorage.getItem(KEY)

  if(tareas){

    return JSON.parse(tareas)

  }

  return []

}

export function saveTasks(tareas){

  localStorage.setItem(
    KEY,
    JSON.stringify(tareas)
  )

}