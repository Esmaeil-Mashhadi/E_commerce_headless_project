'use client'

import styles from './TopSalesSlide.module.css'
import { Swiper, SwiperSlide } from "swiper/react"
import { Grid, Pagination } from "swiper/modules"

const TopSalesSlide = ({leftList , products}:any) => {
  return (
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
  )
}

export default TopSalesSlide