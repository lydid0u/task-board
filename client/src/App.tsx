import './index.css'
import { useState } from 'react'
import type { Board, Task } from './types.ts'
import BoardHeader from './components/BoardHeader.tsx';
import TaskCard from './components/TaskCard'
import AddTask from './components/AddTask'

const testBoard: Board = {
  id: 1,
  name: "My Task Boarddd",
  description: "Tasks board to keep myself organised",
  tasks: [
    {
      id: 1,
      name: "Complete this challenge",
      description: "Complete this challenge and deploy it",
      status: "in-progress",
      icon: '/assets/in-progress.svg'
    },
    {
      id: 2,
      name: "Create the board",
      status: "completed",
      description: "Create the board to manage tasks",
      icon: '/assets/completed.svg'
    },
    {
      id: 3,
      name: "Cheat",
      status: "wont-do",
      description: "Find a way to cheat on the challenge",
      icon: '/assets/wont-do.svg'
    },
  ],
};

function App() {
  const [board, setBoard] = useState<Board>(testBoard);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  
  function addTask() {
  const newTask: Task = (
    {
      id: Date.now(),
      name: "Use useState",
      description: "Use useState here",
      status: "in-progress",
      icon: '/assets/in-progress.svg'
    })

    setBoard({
      ...board,
      tasks: [...board.tasks, newTask]
    })
}

  return (
    <>
    <div className='flex flex-col items-center font-outfit bg-fond min-h-screen'>
      <BoardHeader name={board.name} description={board.description}/>
      <div className='m-4 w-[602px]'>   
        {board.tasks.map((task) => (
          <TaskCard key={task.id} task={task} onSelect={onSelect: () => void}/>
        ))}    
        <AddTask onAdd={addTask}/>
      </div>
    </div>
    </>
  )
}

export default App
