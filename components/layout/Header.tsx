import Image from "next/image"
import styles from "./Header.module.css"

import { FaHeadset } from "react-icons/fa"
import { IoSyncCircleOutline } from "react-icons/io5"
import { MdOutlineLocalShipping } from "react-icons/md"
import { ReactElement } from "react"
import Menubar from "../modules/layout/Menubar"
import GetData from "@/utils/GetBoosBoosImages"

const Header = async () => {
  type servicesMenuType = {
    title: string
    slogan: string
    icon: ReactElement
  }


  const categoriesList:any = await GetData('/wp-json/wc/v3/products/categories', 'per_page=100')

  const servicesMenu: servicesMenuType[] = [
    {
      title: "پاسخگویی همه روزه",
      icon: <FaHeadset />,
      slogan: "از ساعت 9 صبح تا 12 شب حتی روز های تعطیل ",
    },
    {
      title: "گارانتی تعویض و بازگشت کالا",
      icon: <IoSyncCircleOutline />,
      slogan: "ظرف 24 ساعت بعد از رسیدن کالا اگر نظرتون عوض شد ما می پذیریم",
    },
    {
      title: "ارسال رایگان",
      icon: <MdOutlineLocalShipping />,
      slogan: "ارسال رایگان برای خرید های بالای 500 هزار تومان",
    },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.topHeader}>
        <div className={styles.logo}>
          <Image
            width={500}
            height={500}
            src="/images/logo.png"
            alt="لوگوی قاطی شاپ"
          />
        </div>

        <div className={styles.search}>
          <button>جست و جو</button>
          <input placeholder="دنبال محصول خاصی می گردی...  ؟ " />
        </div>

        <div className={styles.infoSection}>
          {servicesMenu.map((item: servicesMenuType, index: number) => (
            <div className={styles.infoContainer} key={index}>
              <h2>{item.icon}</h2>
              <div className={styles.infoDescription}>
                <p>{item.title}</p>
                <p>{item.slogan}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Menubar categoriesList={categoriesList} />
    </div>
  )
}

export default Header
