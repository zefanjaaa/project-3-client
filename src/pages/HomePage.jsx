import React from 'react'
import {Carousel} from 'react-bootstrap'
import "../style/HomePage.css"

function HomePage() {
  return (
    <div>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="IMG_2265.JPG"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <a href="/product/products" class="link-light linkCaursel">
          <p>
            SHOP NEW ARRIVALS NOW
          </p>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="IMG_2263.JPG"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <a href="/product/art" class="link-light linkCaursel">
          <p>
            SHOP ART NOW
          </p>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="IMG_2251.JPG"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <a href="/product/homegoods" class="link-light linkCaursel">
          <p>
            SHOP HOME DECOR NOW
          </p>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    



    </div>
  )
}

export default HomePage