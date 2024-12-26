import { UnderLineSvg } from "@/public/svgs"
import styles from "./TopSales.module.css"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/grid"
import TopSalesSlide from "./submodules/TopSalesSlide"
import GetData from "@/utils/GetBoosBoosImages"


const TopSales = async() => {
  const leftList = [
    "/images/sampleProduct/hoodip.webp",
    "/images/sampleProduct/tshirtP.jpg",
    "/images/sampleProduct/tshirtP.jpg",
  ]

  

  const data:any = await GetData('/wp-json/wc/v3/products', 'orderby=popularity')


  return (
    <div className={styles.container}>
      <h1 className={styles.headerTitle}>
        محصولات پر طرفدار
        <UnderLineSvg />
      </h1>

     <TopSalesSlide leftList={leftList} products={{}} />

    </div>
  )
}

export default TopSales
