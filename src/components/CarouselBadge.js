import React from 'react'
import { Carousel } from 'react-bootstrap'

export const CarouselBadge = () => {
  const Img1 = require('../assets/notices/notice1.jpg')
  const Img2 = require('../assets/notices/notice2.jpg')
  const Img3 = require('../assets/notices/notice3.jpg')
  return (
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100' src={Img1} alt='Noticia' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={Img2} alt='Noticia' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={Img3} alt='Noticia' />
      </Carousel.Item>
    </Carousel>
  )
}
