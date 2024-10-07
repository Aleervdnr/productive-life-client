import { useEffect, useState } from "react";
import TodayTasks from "../components/widgets-tasks/TodayTasks";
import WeekTasks from "../components/widgets-tasks/WeekTasks";
import MonthTasks from "../components/widgets-tasks/MonthTasks";
import TaskForm from "../components/taskForm/TaskForm.jsx";
import { useTasks } from "../context/TasksContext.jsx";

export default function TasksPage({ setActiveItem }) {
  const { getTasks, setTasksIsLoading } = useTasks();

  useEffect(() => {
    setActiveItem("tasks");
    getTasks();
    setTasksIsLoading(false)
  }, []);

  const [tabActive, setTabActive] = useState("hoy");

  const handleChangeTab = (name) => {
    setTabActive(name);
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="font-medium flex gap-2 px-5 mb-3">
        <div
          className={`px-[5px] py-[3px] rounded ${
            tabActive == "hoy" && `bg-dark-400`
          }`}
          onClick={() => handleChangeTab("hoy")}
        >
          Hoy
        </div>
        <div
          className={`px-[5px] py-[3px] rounded ${
            tabActive == "semana" && `bg-dark-400`
          }`}
          onClick={() => handleChangeTab("semana")}
        >
          Semana
        </div>
        <div
          className={`px-[5px] py-[3px] rounded ${
            tabActive == "mes" && `bg-dark-400`
          }`}
          onClick={() => handleChangeTab("mes")}
        >
          Mes
        </div>
      </div>
      <div
        className={`z-10 grid grid-cols-[repeat(3,1fr)] transition-transform ease-in duration-300 ${
          tabActive == "semana" && "translate-x-[calc(-100vw)]"
        } ${tabActive == "mes" && "translate-x-[calc(-200vw)]"} `}
      >
        <TodayTasks />
        <WeekTasks />
        <MonthTasks />
      </div>
      <TaskForm />
    </div>
  );
}
