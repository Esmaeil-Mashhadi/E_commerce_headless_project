import Link from "next/link"
import styles from './CallToAction.module.css'
import { IoIosArrowDropright } from "react-icons/io"

const CallToAction = () => {
  return (
    <Link className={styles.callToActionLink} href="/">
      <IoIosArrowDropright />
      <p>مشاهده ی تخفیفات </p>
    </Link>
  )
}

export default CallToAction
