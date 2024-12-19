import Link from "next/link"
import styles from "./PopularCategories.module.css"
import { UnderLineSvg } from "@/public/svgs"

const PopularCategories = () => {
  const popularList = [
    {
      title: "تی شرت",
      url: "products/t-shirts",
      imageSrc: "/images/popularCategories/tShirt.jpg",
    },
    {
      title: "هودی",
      url: "products/hoodies",
      imageSrc: "/images/popularCategories/hoodi.jpg",
    },
    {
      title: "لوازم جانبی موبایل",
      url: "products/mobile-accessories",
      imageSrc: "/images/popularCategories/acc.jpg",
    },
    {
      title: "ادکلن",
      url: "products/perfumes",
      imageSrc: "/images/popularCategories/perfume.jpg",
    },
  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.headerTitle}>
        <p> دسته بندی های محبوب </p>
        <UnderLineSvg />
      </h1>
      <div className="flex items-center justify-around w-full">
        {popularList.map((item: any, index: number) => (
          <Link key={index} href={item.url} className={styles.circle}>
            <img  src={item.imageSrc} />
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PopularCategories
