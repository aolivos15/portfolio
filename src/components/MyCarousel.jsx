'use client'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Image } from "@nextui-org/react"

const MyCarousel = ({ images, length }) => {

  return (
    <Carousel showThumbs={false} infiniteLoop={true}>
      {Array.from({ length: length }).map((_, index) => (
        <div className="p-1" key={index}>
          <Image
            alt="Plataforma para terapias online"
            className="object-cover rounded-xl my-8 max-w-full"
            src={images[index]}
          // width={700}
          />
        </div>
      ))}
    </Carousel>
  );

}

export default MyCarousel;