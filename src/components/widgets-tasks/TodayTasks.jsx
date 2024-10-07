import { useTasks } from "../../context/TasksContext";
import ItemTodayTask from "./ItemTodayTask";
import { todayDate } from "../../context/Dates.js";

export default function TodayTasks() {
  const {tasks} = useTasks()
  return (
    <div className='w-[100vw] px-5'>
      <span className="text-xl font-semibold">Tareas del dia</span>
      <div className="flex flex-col gap-2 mt-2 overflow-auto">
        {tasks? 
          tasks.map(task => task.taskDate == todayDate ? <ItemTodayTask task={task} key={task._id}/> : null)
          :
          <div>No hay tareas para hoy</div>
          }
      </div>
    </div>
  )
}
