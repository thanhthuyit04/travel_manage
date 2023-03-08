import React, {useEffect} from 'react'
import './main.css'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import img1 from '../../Assets/Images/img1.jpg'
import img2 from '../../Assets/Images/img2.jpg'
import img3 from '../../Assets/Images/img3.jpg'
import img4 from '../../Assets/Images/img4.jpg'
import img5 from '../../Assets/Images/img5.jpg'
import img6 from '../../Assets/Images/img6.jpg'
import img7 from '../../Assets/Images/img7.jpg'
import img8 from '../../Assets/Images/img8.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: img1,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epition of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'The epition of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'The epition of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'The epition of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id:5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'The epition of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'The epition of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id:7,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: 'The epition of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id:8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'The epition of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities.'
  },
]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <section className="main container section">
      
      <div className="secTitle">
        <h3 className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return(
              <div data-aos="fade-up" className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon"/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon"/>
                  </button>
                </div>

              </div>
            )
          })
        }

      </div>

    </section>
  )
}

export default Main