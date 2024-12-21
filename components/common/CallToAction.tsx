import Link from "next/link"
import styles from './CallToAction.module.css'
import { IoIosArrowDropright } from "react-icons/io"

const CallToAction = () => {
  return (
    <Link className={styles.callToActionLink} href="/">
      <IoIosArrowDropright className=" z-10" />
      <p className=" z-10">مشاهده ی تخفیفات </p>
    </Link>
  )
}

export default CallToAction
