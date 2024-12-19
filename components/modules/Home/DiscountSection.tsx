'use client'

import { UnderLineSvg } from "@/public/svgs"
import styles from "./DiscountSection.module.css"
import Link from "next/link"
import { FaArrowCircleRight } from "react-icons/fa"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import Image from "next/image"

const DiscountSection = () => {
  const discountImages = [
    "/images/sampleProduct/hoodip.webp",
    "/images/sampleProduct/tshirtP.jpg",
    "/images/sampleProduct/tshirtP.jpg",
    "/images/sampleProduct/hoodip.webp",
    "/images/sampleProduct/tshirtP.jpg",
    "/images/sampleProduct/tshirtP.jpg",
  ]
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
      </div>
    </div>
  )
}

export default DiscountSection
