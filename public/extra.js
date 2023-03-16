import React from 'react'
import './deliveryCollection.css'
import Carousel from 'react-bootstrap/Carousel';

const deliveryItems = [
    {
        id:1,
        title: "Pizza",
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
        id:2,
        title: "Burger",
        cover: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    },
    {
        id:3,
        title: "Chicken",
        cover: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
    },
    {
        id:4,
        title: "Biryani",
        cover: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    },
    {
        id:5,
        title: "Thali",
        cover: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
    },
    {
        id:6,
        title: "Rolls",
        cover: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
    },
    {
        id:7,
        title: "Paneer",
        cover: "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
    },
    {
        id:8,
        title: "Momos",
        cover: "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
    },
    {
        id:9,
        title: "Cake",
        cover: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
    },
    {
        id:10,
        title: "Fried Rice",
        cover: "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
    },
]

const deliveryCollection = () => {

        const [index, setIndex] = useState(0);
        
        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };

  return (
    <div className='delivery-collection'>
      <div className='max-width'>
        <div className='collection-title'> Inspiration for your first order </div>
       <Carousel activeIndex={index} onSelect={handleSelect}>
       {deliveryItems.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="delivery-image"
          src={slide.cover}
          alt="slider image"
        />
        <Carousel.Caption>
          <h3>{slide.title}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      
        )
      })}
      <button class="carousel-control-prev" type="button" data-bs-target="#testimonials-carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#testimonials-carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </Carousel>
      </div>
    </div>
  )
}

export default deliveryCollection
