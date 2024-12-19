"use client"

import Image from "next/image"
import styles from "./Header.module.css"
import { IoPersonOutline } from "react-icons/io5"
import { BsCart3 } from "react-icons/bs"
import Link from "next/link"
import { ReactElement } from "react"
import useScroll from "@/hooks/useScroll"
import { PiListLight } from "react-icons/pi"
import { MdKeyboardArrowUp } from "react-icons/md"
import { FaHeadset } from "react-icons/fa"
import { IoSyncCircleOutline } from "react-icons/io5"
import { MdOutlineLocalShipping } from "react-icons/md"

const Header = () => {
  type iconsType = {
    icon: ReactElement
    title: string
    href: string
  }
  type navbarMenuType = {
    title: string
    href: string
  }
  type servicesMenuType={
    title:string , 
    slogan:string , 
    icon:ReactElement
  }

  const { scrollY } = useScroll()

  const icons: iconsType[] = [
    { icon: <IoPersonOutline />, title: "پروفایل", href: "/profile" },
    { icon: <BsCart3 />, title: "سبد خرید", href: "/cart" },
  ]

  const navbarMenu: navbarMenuType[] = [
    { title: "خانه", href: "/" },
    { title: "فروشگاه", href: "/" },
    { title: "ارتباط با ما", href: "/" },
    { title: "تخفیفات شگفت انگیز", href: "/" },
  ]

  const servicesMenu:servicesMenuType[] = [
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
            {servicesMenu.map((item:servicesMenuType , index:number)=>(
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

      <div
        style={scrollY > 50 ? { top:0 } :undefined}
        className={styles.header}
      >
        <div className={styles.menuBar}>
          <div className={styles.rightSide}>
            <div className={styles.categories}>
              <div className="flex gap-2 items-center">
                <PiListLight className="" />
                دسته بندی ها
              </div>
              <MdKeyboardArrowUp className="scale-[1.5]" />
            </div>
            <div className={styles.navbarMenus}>
              {navbarMenu.map((item: navbarMenuType, index: number) => (
                <Link key={index} href={item.href}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.leftSide}>
            {icons.map((item: iconsType, index: number) => (
              <Link key={index} href={item.href} title={item.title}>
                <p>{item.icon}</p>
                <p>{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
