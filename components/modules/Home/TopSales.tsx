"use client"
import { UnderLineSvg } from "@/public/svgs"
import styles from "./TopSales.module.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/grid"

import { Grid, Pagination } from "swiper/modules"

const TopSales = () => {
  const leftList = [
    "/images/sampleProduct/hoodip.webp",
    "/images/sampleProduct/tshirtP.jpg",
    "/images/sampleProduct/tshirtP.jpg",
  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.headerTitle}>
        محصولات پر طرفدار
        <UnderLineSvg />
      </h1>

      <div className={styles.sliderSection}>
        <div className={styles.rightSlider}>
          <Swiper
            slidesPerView={3}
            grid={{
              rows: 2,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className={styles.mySwiper}
          >
            {Array.from({ length: 10 }, (_, index) => (
              <SwiperSlide key={index} className={styles.rightSlide}>
                <img src={leftList[index % leftList.length]} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.leftSlider}>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className={styles.mySwiper}
          >
            {leftList.map((item: any, index: number) => (
              <SwiperSlide key={index} className={styles.leftSlide}>
                <img  src={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default TopSales
