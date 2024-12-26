
import { UnderLineSvg } from "@/public/svgs"
import styles from "./DiscountSection.module.css"
import Link from "next/link"
import { FaArrowCircleRight } from "react-icons/fa"
import DiscountSlide from "./submodules/DiscountSlide"
import GetData from "@/utils/GetBoosBoosImages"


const DiscountSection = async() => {
  const discountImages = [
    "/images/sampleProduct/hoodip.webp",
    "/images/sampleProduct/tshirtP.jpg",
    "/images/sampleProduct/tshirtP.jpg",
    "/images/sampleProduct/hoodip.webp",
    "/images/sampleProduct/tshirtP.jpg",
    "/images/sampleProduct/tshirtP.jpg",
  ]


  const data:any = await GetData('wp-json/wc/v3/products', 'on_sales=true')
 
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        <p>تخفیفای امروز قاطی شاپ</p>
        <UnderLineSvg />
      </h1>
      <div className={styles.discountContainer}>
        <div className={styles.leftSide}>
          <Link href={"/"}>مشاهده ی همه ی تخفیفای شگفت انگیز</Link>
          <FaArrowCircleRight />
        </div>

        <DiscountSlide discountImages ={discountImages}/>
      </div>
    </div>
  )
}

export default DiscountSection
