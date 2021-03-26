import React, { useEffect } from "react";
import ImageGallery from 'react-image-gallery';
const images = [
    {
      original: 'https://images.pexels.com/photos/1165049/pexels-photo-1165049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      thumbnail: 'https://images.pexels.com/photos/1165049/pexels-photo-1165049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      original: 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      thumbnail: 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        original: 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        thumbnail: 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        original: 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        thumbnail: 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        original: 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        thumbnail: 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
  ];

  const Gallery=()=>{

    
    useEffect(()=>{
        let buttonTarget=document.querySelector(".image-gallery-thumbnail");
        let div=document.createElement("div");
        div.classList.add("indicator");
        buttonTarget.appendChild(div);


    })


      return (
          <div className="gallery_asme">
              <ImageGallery
                autoPlay={false}
                items={images}>
              </ImageGallery>;
              <div className="extras">
                  <h3>Yo yoyoyo YO</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
          </div>
      )
  }
  
  export default Gallery;