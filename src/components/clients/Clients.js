import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import One from '../../assets/clients/1.jpg'
import Two from '../../assets/clients/2.jpg'
import Three from '../../assets/clients/3.jpg'
import Four from '../../assets/clients/4.jpg'
import Six from '../../assets/clients/6.jpg'
import Seven from '../../assets/clients/7.jpg'
import Eight from '../../assets/clients/8.jpg'
import Nine from '../../assets/clients/9.jpg'
import Ten from '../../assets/clients/10.jpg'
import Eleven from '../../assets/clients/11.jpg'
import Twele from '../../assets/clients/12.jpg'
import Thirteen from '../../assets/clients/13.jpg'
import Fourteen from '../../assets/clients/14.jpg'
import './clients.css'

function Clients() {

  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 6 },
  };
  
  const items = [
    <img src={One} onDragStart={handleDragStart} alt=""/>,
    <img src={Two} onDragStart={handleDragStart} alt=""/>,
    <img src={Three} onDragStart={handleDragStart} alt="" />,
    <img src={Four} onDragStart={handleDragStart} alt="" />,
    <img src={Six} onDragStart={handleDragStart} alt="" />,
    <img src={Seven} onDragStart={handleDragStart} alt="" />,
    <img src={Eight} onDragStart={handleDragStart} alt="" />,
    <img src={Nine} onDragStart={handleDragStart} alt="" />,
    <img src={Ten} onDragStart={handleDragStart} alt="" />,
    <img src={Eleven} onDragStart={handleDragStart} alt="" />,
    <img src={Twele} onDragStart={handleDragStart} alt="" />,
    <img src={Thirteen} onDragStart={handleDragStart} alt="" />,
    <img src={Fourteen} onDragStart={handleDragStart} alt="" />,
  ]

  return (
    <div className='clients' id='clients'>
        <div className='container-fluid mt-4'>
            <div className='row'>
                <div className='title-sec'>
                   <h2 className='text-center'>Our Clients</h2>
                </div>
                <AliceCarousel mouseTracking items={items} responsive={responsive} controlsStrategy="alternate" autoPlay autoPlayStrategy="none" autoPlayInterval={1000} animationDuration={1000} animationType="fadeout" infinite touchTracking={false} disableDotsControls disableButtonsControls className="image-slider"/>
            </div>
        </div>
    </div>
  )
}

export default Clients