import Image from "next/image"
import styles from "./ProductCard.module.css"
import { MdFavoriteBorder } from "react-icons/md"
import { BsCartPlus } from "react-icons/bs"
import { IoIosStar } from "react-icons/io"

const ProductCard = ({ images, index }: any) => {
  return (
    <div className={styles.container}>
      <Image
        className=" transition .5s"
        width={500}
        height={500}
        src={images[index % 2 ? 0 : 1]}
        alt="products"
      />
      <div className={styles.bottomSide}>
        <p className={styles.productTitle}>
          هودی مردانه مخمل سویت کرمی کد 001 مناسب
        </p>

        <div className={styles.price}>
          <p>175,000 تومان</p>
        </div>
        <div className={styles.optionList}>
          <div className={styles.mark}>
            <MdFavoriteBorder />
            <BsCartPlus title="افزودن به سبد خرید" />
          </div>

          <div className={styles.star}>
            {[...Array(5)].map((_, index: number) => (
              <IoIosStar key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
