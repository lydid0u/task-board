import addIcon from "../assets/add.svg" 

function AddTask({ onAdd }: { onAdd: () => void }) {
  return (
        <button onClick={onAdd} className="flex items-center gap-4 font-semibold bg-orange1 rounded-xl p-3">
            <div className="bg-orange3 p-3 rounded-xl">
                <img src={addIcon}/>
            </div>
            <p>Add new task</p>
        </button>
  )
}

export default AddTask