import SlideSection from "@/components/modules/Home/SlideSection"
import styles from "./Home.module.css"
import PopularCategories from "@/components/modules/Home/PopularCategories"
import TopSales from "@/components/modules/Home/TopSales"
import DiscountSection from "@/components/modules/Home/DiscountSection"
import NewProducts from "@/components/modules/Home/NewProducts"

const Home = () => {
  return (
    <div className={styles.container}>
      <SlideSection />
      <PopularCategories />
      <TopSales />
      <DiscountSection />
      <NewProducts />
    </div>
  )
}

export default Home
