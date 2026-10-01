import { useState } from "react";

const ViewTasks = ({ taskList, setTaskList }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredList, setFilteredList] = useState([...taskList])

  const handleMarkComplete = (index) => {
    const temp = { ...taskList[index] };
    temp.isComplete = true;
    const tempTaskList = [...taskList];
    tempTaskList[index] = temp;
    setTaskList(tempTaskList);
  };

  const handleChange = (event) => {
    const query = event.target.value
    setSearchQuery(query);

    const filteredList = taskList.filter(item => {
      if (item.task.toLowerCase().includes(searchQuery.toLowerCase())) {
        return true
      } else {
        return false;
      }
    })
    setFilteredList(filteredList)
  };


  const renderList = (searchQuery === "") ? taskList : filteredList


  return (
    <div>
      <input value={searchQuery} onChange={handleChange} placeholder="Search Tasks..." />

      <div>
        {renderList.map((item, index) => {
          return (
            <div style={{ marginTop: 20 }} key={index}>
              <div style={{ display: "flex", gap: 20 }}>
                <span>TASK {String(index + 1).padStart(2, "0")}</span>
                <span>{item.task}</span>
                <span>{item.isComplete ? "Completed" : "Pending"}</span>
              </div>

              <button
                onClick={() => !item.isComplete && handleMarkComplete(index)}
                disabled={item.isComplete}
              >
                {item.isComplete ? "Done" : "Mark Complete"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewTasks;