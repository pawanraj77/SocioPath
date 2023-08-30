"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const page = () => {

  const [images, setimages] = useState([])

  useEffect(() => {
    getimages()
  }, [])
  

  const getimages = async () => {
    const response = await axios.get("https://picsum.photos/v2/list")
    const data = response.data
    setimages(data)
    console.log(images)

  }
 
  return (
    <div>
      <button onClick={getimages} class='bg-green-300 px-12 py-8 justify-between'>Get Images</button>
      <div>
        {images.map((elem,i) => {
          return <img 
          key={i}
          src={elem.download_url}
          width={350}
          height={350}
          class='m-10 rounded inline-block'
          />
        })}
      </div>
    </div>
    
  )
}

export default page
