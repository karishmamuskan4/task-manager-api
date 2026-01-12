import tasks from '../data/tasks.js'

const getAllTasks = (req,res)=>{
    console.log("GET ALL TASKS HIT");
    res.json(tasks)
}
const getTaskById = (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find(task => task.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json(task);
};

   

const createTask = (req, res) => {
  const { title } = req.body;

  const newTask = {
    id: tasks.length + 1,
    title
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const id = Number(req.params.id);
  const { title } = req.body;

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  task.title = title;

  res.status(200).json({
    message: "Task updated successfully",
    task
  });
};

const deleteTask = (req, res) => {
  const id = Number(req.params.id);

  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  const deletedTask = tasks.splice(index, 1);

  res.status(200).json({
    message: "Task deleted successfully",
    task: deletedTask[0]
  });
};



export{
   getAllTasks,getTaskById,createTask,updateTask, deleteTask
}