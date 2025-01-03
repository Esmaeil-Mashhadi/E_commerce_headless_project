import styles from "./NewProduct.module.css"
import { UnderLineSvg } from "@/public/svgs"
import Link from "next/link"
import { TiArrowLeft } from "react-icons/ti"
import { IoIosArrowDropleftCircle } from "react-icons/io"
import ProductCard from "../products/ProductCard"
import GetData from "@/utils/GetBoosBoosImages"

const NewProducts = async() => {
  const discountImages = [
    "/images/sampleProduct/hoodip.webp",
    "/images/sampleProduct/tshirtP.jpg",
  ]

    const data:any = await GetData('wp-json/wc/v3/products', '')


  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.header}>
          <p>جدیدترین ها در قاطی شاپ</p>
          <UnderLineSvg />
        </h1>

        <Link href={"/"}>
          مشاهده ی همه
          <TiArrowLeft />
        </Link>
      </div>
      <div className={styles.productList}>
        {Array.from({ length: 11 }).map((_, index) => (
          <ProductCard key={index} index={index} images={discountImages} />
        ))}
        <Link href={"/"}>
          مشاهده ی همه
          <IoIosArrowDropleftCircle />
        </Link>
      </div>
    </div>
  )
}

export default NewProducts
