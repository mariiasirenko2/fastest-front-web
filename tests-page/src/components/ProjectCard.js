import React, { useState } from "react"

export  const ProjectCard = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <div className='box'>
            <div className='product mtop' >
              <div className='product-details'>
                <h3>{shopItems.name}</h3>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

