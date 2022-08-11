import React,{useState} from 'react'
import { FaTimes } from "react-icons/fa";
import './gallery.css'

function Gallery() {
 
  let data = [
    {
        id: 1,
        imgsrc: 'https://rathinamtechzone.com/images/interior/interior-1-min.JPG'
    },
    {
        id: 2,
        imgsrc: 'https://rathinamtechzone.com/images/interior/interior-2-min.JPG'
    },
    {
        id: 3,
        imgsrc: 'https://rathinamtechzone.com/images/interior/interior-4-min.JPG'
    },
    {
        id: 4,
        imgsrc: 'https://rathinamtechzone.com/images/interior/interior-5-min.JPG'
    },
    {
        id: 5,
        imgsrc: 'https://rathinamtechzone.com/images/interior/interior-6-min.JPG'
    },
    {
        id: 6,
        imgsrc: 'https://rathinamtechzone.com/images/interior/interior-7-min.JPG'
    },
    {
        id: 7,
        imgsrc: 'https://rathinamtechzone.com/images/interior/interior-8-min.JPG'
    },
    {
        id: 8,
        imgsrc: 'https://rathinamtechzone.com/images/interior/interior-9-min.JPG'
    },
    {
        id: 9,
        imgsrc: 'https://rathinamtechzone.com/images/interior/interior-10-min.JPG'
    },
    {
        id: 10,
        imgsrc: 'https://rathinamtechzone.com/images/interior/interior-11-min.JPG'
    },
    {
        id: 11,
        imgsrc: 'https://rathinamtechzone.com/images/interior/interior-12-min.JPG'
    },
    {
        id: 12,
        imgsrc: 'https://rathinamtechzone.com/images/interior/interior-13-min.JPG'
    },
  ] 
  
  const [model, setModel] = useState(false)
  const [tempimgSrc,settempimgSrc] = useState('')
  
  const getImage = (imgsrc) => {
    settempimgSrc(imgsrc)  
    setModel(true)   
  }

  return (
    <>
        <div  className={model? "model open" : "model"}>
            <img src={tempimgSrc} alt=""/>
            <FaTimes onClick={()=> setModel(false)}/>
        </div>
        <div className='gallery' id="gallery">
            <div className='container mt-4'>
                <div className='row'>
                    <div className='title-sec'>
                        <h2 className='text-center'>Our Gallery</h2>
                    </div>
                    <div className='gallery-img'>
                    {
                        data.map((img,i) => {
                            return <div className='pics' key={i} onClick={()=> getImage(img.imgsrc)}>
                            <img src={img.imgsrc} alt="" style={{width: '100%'}}/>
                            </div>
                        })
                    }
                    </div> 
                </div>
            </div>
        </div>
    </>
  )
}

export default Gallery