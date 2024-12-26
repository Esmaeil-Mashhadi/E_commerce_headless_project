'use client'
import styles from './DiscountSlide,.module.css'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import Image from "next/image"
const DiscountSlide = ({discountImages , discountedProducts}:any) => {
  return (
    <div className={styles.rightSide}>
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className={styles.mySwiper}
    >
      {discountImages.map((item: any, index: number) => (
        <SwiperSlide key={index}>
          <Image
            src={item}
            width={500}
            height={500}
            alt="'discounted images"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default DiscountSlide