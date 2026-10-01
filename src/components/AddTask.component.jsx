import { useState } from "react";

const AddTask = ({ setTaskList, taskList }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [userInput, setUserInput] = useState("");

  const handleToggleView = () => {
    setIsFormVisible(!isFormVisible);
    setUserInput("");
  };

  const handleAddToList = () => {
    if (!userInput.trim()) return;
    const tempTaskList = [...taskList];
    tempTaskList.push({
      task: userInput.trim(),
      isComplete: false,
    });
    setTaskList(tempTaskList);
    setUserInput("");
    setIsFormVisible(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAddToList();
    if (e.key === "Escape") handleToggleView();
  };

  return (
    <div>
      {isFormVisible ? (
        <div>
          <label>New Task</label>
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="What needs to be done?"
            autoFocus
          />
          <div>
            <button onClick={handleAddToList}>Add Task</button>
            <button onClick={handleToggleView}>Cancel</button>
          </div>
          <p>Press Enter to add, Esc to cancel</p>
        </div>
      ) : (
        <button onClick={handleToggleView}>
          Add a new task...
        </button>
      )}
    </div>
  );
};

export default AddTask;