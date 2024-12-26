import React, { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"
import styles from "./Layout.module.css"
const Layout = async({ children }: { children: ReactNode }) => {

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.children}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
