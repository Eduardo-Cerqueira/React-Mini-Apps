import { Button, Checkbox } from "antd";

export default function TaskRow({ index, task, tasks, setTasks, line}: any) {
  function getLineCSS() {
    return line ? 'inline-block' : 'none'
  }
  
    return (
    <>
    <div key={index}>
      <Checkbox
      style={{marginLeft:'35px'}}
      checked={task.checked}
      onChange={() => {
        const newTasks = tasks.slice()
        newTasks[index].checked = !newTasks[index].checked
        return setTasks(newTasks)
        }
      }
    />
    <div style={{display: 'inline-block', marginLeft: '25px'}}>
      <p style={{textDecorationLine: getLineCSS()}}>{task.content}</p>
    </div>
    <Button
    style={{marginLeft:'80%'}}
    className="i-line-md-close"
    onClick={() => {
      const newTasks = tasks.slice()
      newTasks.splice(index, 1)
      return setTasks(newTasks)
      }
    }/>
    </div>
    </>
  );
}