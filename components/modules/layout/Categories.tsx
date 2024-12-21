import { MdKeyboardArrowUp } from "react-icons/md"
import styles from "./Categories.module.css"
import { PiListLight } from "react-icons/pi"
import { useState } from "react"

const Categories = () => {
  const [drop, setDrop] = useState(false)
  const dropDownHandler = () => {
    setDrop(!drop)
  }

  const dropStyle: any = {
    "--height": drop ? "300px" : "0px",
    "--opacity": drop ? "1" : "0",
    "--event": drop ? "auto" : "none",
  }
  return (
    <div
      onMouseEnter={dropDownHandler}
      onMouseLeave={() => setDrop(false)}
      className={styles.container}
    >
      <div className="flex gap-2 items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <PiListLight className="" />
          دسته بندی ها
        </div>
        <MdKeyboardArrowUp   className={`scale-[1.5] transform ${drop ? 'rotate-180' : ''} transition duration-75`} 
 />
      </div>

      <div style={dropStyle} className={styles.dropDownMenu}>
        <ul className="">
          {[...Array(10)].map((item: any, index: number) => (
            <li key={index}>{index}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Categories
