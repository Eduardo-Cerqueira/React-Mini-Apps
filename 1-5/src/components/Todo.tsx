import { useState } from "react";
import { Button, Input, Space } from 'antd';
import TaskRow from "./TaskRow";

export default function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [content, setContent] = useState<string>("");

  const addTask = () => {
    if (content) {
      const taskExists = (element: Task) => element.content == content
      const taskIndex = tasks.findIndex(taskExists)

      taskIndex == -1 ? setTasks((previousTasks) => [
        ...previousTasks,
        {
          content: content,
          checked: false
        }
      ]) : alert("Task already exists !")
    }
    else
      alert("Task is empty !")
  }

  return (
    <>
      <Space.Compact style={{ width: '100%', display: 'flex' }}>
        <Input onChange={(event) => setContent(event.target.value)} placeholder="Write a task here ..." />
        <Button type="primary" onClick={addTask}><div style={{ display: 'inline-block', height: '20px', width: '20px' }} className="i-line-md-plus-square"/></Button>
      </Space.Compact>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      {tasks.length > 0 &&
      <div style={{width: '50%'}}>
        <h4>Todo</h4>
        <hr/>
        {tasks.map((task: Task, index: number) => (
        <>
          {!task.checked &&
            <TaskRow index={index} task={task} tasks={tasks} setTasks={setTasks}/>
          }
        </>
        ))}
        <h4>Done</h4>
        <hr/>
          {tasks.map((task: Task, index: number) => (
        <>
          {task.checked &&
            <TaskRow index={index} task={task} tasks={tasks} setTasks={setTasks} line={true}/>
          }
        </>
        ))}
        </div>
        }
      </div>
    </>
  );
}
