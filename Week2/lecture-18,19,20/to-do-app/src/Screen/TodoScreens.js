// import { Component } from "react";
import { useState } from "react";
import Tasks from "../components/Tasks";

const TodoScreen = () => {
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="Screen">
      <h1 className="ui heading center">To Do List</h1>
      <div>
        <button
          onClick={(e) => {
            setTaskList([
              ...taskList,
              {
                title: "goig to gym",
                description: "going to gym is good for muscle growth",
              },
            ]);
          }}
          className="ui secondary button"
        >
          Add Task
        </button>
        {taskList.map((task) => (
          <Tasks />
        ))}
      </div>
    </div>
  );
};
// class TodoScreen extends Component {
//   state = {
//     taskCount: 0,
//   };
//   render() {
//     return (
//       <div className="Screen">
//         <h1 className="ui heading center">To Do List</h1>
//         <div>
//           <button
//             onClick={(e) => {
//               this.setState({
//                 ...this.state,
//                 taskCount: this.state.taskCount + 1,
//               });
//               console.log(this.state.taskCount);
//             }}
//             className="ui secondary button"
//           >
//             Add Task
//           </button>
//           <p>No of task is {this.state.taskCount}</p>
//         </div>
//       </div>
//     );
//   }
// }

export default TodoScreen;
