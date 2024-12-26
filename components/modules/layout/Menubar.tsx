'use client'

import { IoPersonOutline } from "react-icons/io5"
import { BsCart3 } from "react-icons/bs"
import Link from "next/link"
import { ReactElement } from "react"
import useScroll from "@/hooks/useScroll"
import styles from "./Menubar.module.css"
import Categories from "./Categories"

const Menubar = ({categoriesList}:any) => {
  type iconsType = {
    icon: ReactElement
    title: string
    href: string
  }
  type navbarMenuType = {
    title: string
    href: string
  }



  const navbarMenu: navbarMenuType[] = [
    { title: "خانه", href: "/" },
    { title: "فروشگاه", href: "/" },
    { title: "ارتباط با ما", href: "/" },
    { title: "تخفیفات شگفت انگیز", href: "/" },
  ]

  const { scrollY } = useScroll()

  const icons: iconsType[] = [
    { icon: <IoPersonOutline />, title: "پروفایل", href: "/profile" },
    { icon: <BsCart3 />, title: "سبد خرید", href: "/cart" },
  ]

  return (
    <div
      style={scrollY > 50 ? { top: 0 } : undefined}
      className={styles.header}
    >
      <div className={styles.menuBar}>
        <Categories />
        <div className={styles.rightSide}>
          {navbarMenu.map((item: navbarMenuType, index: number) => (
            <Link key={index} href={item.href}>
              {item.title}
            </Link>
          ))}
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
  )
}

export default Menubar
