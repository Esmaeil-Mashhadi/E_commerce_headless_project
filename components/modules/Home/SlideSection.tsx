"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import styles from "./SlideSection.module.css"
import Image from "next/image"

import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Pagination } from "swiper/modules"
import { IoIosArrowDropright } from "react-icons/io"

import { useEffect, useState } from "react"
import Link from "next/link"
import { EdgeSvg } from "@/utils/svgs"

const SlideSection = () => {
  const sliderImages: sliderImagesType[] = [
    { src: "/images/banner/1.png", alt: "سویت" },
    { src: "/images/banner/2.png", alt: "سویت" },
    { src: "/images/banner/3.png", alt: "سویت" },
    { src: "/images/banner/4.png", alt: "سویت" },
  ]

  const [discountImageIndex, setDiscountImageIndex] = useState(3)

  type sliderImagesType = {
    src: string
    alt: string
  }

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       if (sliderImages.length - 1 >= discountImageIndex) {
  //         setDiscountImageIndex(0)
  //       } else {
  //         setDiscountImageIndex((prev) => prev++)
  //       }
  //     }, 1000)

  //     return () => {
  //       clearInterval(interval)
  //     }
  //   }, [discountImageIndex])

  return (
    <div className={styles.container}>
      <div className={styles.discountSection}>
        <div className={styles.imageContainer}>
          <Image
            width={500}
            height={500}
            src={sliderImages[discountImageIndex].src}
            alt={sliderImages[discountImageIndex].alt}
          />
          <div className={styles.outerLayerDiscount}>
            <div className={styles.right}> 
              <EdgeSvg />
            </div>
            <Link href="/">
              <IoIosArrowDropright />
              <p>مشاهده ی تخفیفات </p>
            </Link>
            <div className={styles.top}>
              <EdgeSvg />
            </div>
          </div>
        </div>

        <div className={styles.timerCounter}>
          <div>
            <p>00</p>
            <p>روز</p>
          </div>
          <div>
            <p>00</p>
            <p>ساعت</p>
          </div>
          <div>
            <p>00</p>
            <p>دقیقه</p>
          </div>
          <div>
            <p>00</p>
            <p>ثانیه</p>
          </div>
        </div>
      </div>

      <div className={styles.slider}>
        <Swiper
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          modules={[Pagination, Autoplay]}
          pagination={{ dynamicBullets: true, clickable: true }}
          className={styles.mySwiper}
        >
          {sliderImages.map((item: sliderImagesType, index: number) => (
            <SwiperSlide key={index}>
              <Image width={500} height={500} src={item.src} alt={item.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default SlideSection
