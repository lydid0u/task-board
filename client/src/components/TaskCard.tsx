import type { Task } from '../types.ts'

// Mapping des statuts -> classes Tailwind (doivent être des chaînes)
const bgColors = {
  "in-progress": "bg-orange2",
  "completed": "bg-vert1",
  "wont-do": "bg-rouge1",
}

const iconColors = {
  "in-progress": "bg-orange3",
  "completed": "bg-vert2",
  "wont-do": "bg-rouge2",
}

function TaskCard({ task }: { task: Task }) {
  return (
    <>
      <div className={`flex gap-4 p-3 items-center m-3 ${bgColors[task.status]} rounded-xl`}>
        <img className="bg-white rounded-xl p-3" src={task.icon}/>
        <div className="flex flex-col">
            <p className='text-[1.25rem] font-semibold'> {task.name}</p>
            <p className='text-[1rem]'> {task.description}</p>
        </div>
        <div className={`${iconColors[task.status]} ml-auto p-3 rounded-xl`}>
            <img src={task.icon}/>
        </div>
      </div>
    </>
  )
}

export default TaskCard