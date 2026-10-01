import { useState } from "react";
import AddTask from "./components/AddTask.component";
import ViewTasks from "./components/ViewTasks.component";

const App = () => {
  const [taskList, setTaskList] = useState([]);

  return (
    <div>
      <AddTask taskList={taskList} setTaskList={setTaskList} />
      <ViewTasks taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default App;