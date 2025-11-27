import logo from "../assets/Logo.svg"
import edit from "../assets/edit.svg"

function BoardHeader({ name, description}: {name: string, description?: string}) {
  return (
    <>
    <div>
        <div className="flex flex-row gap-3">
            <img src={logo}/>
            <h1 className='text-[40px]'> {name} </h1>
            <img src={edit}/>
        </div>
        <p className='text-[1rem] pl-[3.25rem]'> {description}</p>
    </div>
    </>
  )
}

export default BoardHeader