import React, { useState } from "react"

export  const ProjectCard = ({ testItems, addToCart }) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }

    return (
        <>
            {testItems.map((testItems, index) => {
                return (
                    <div className='box'>
                        <div className='product mtop' >
                            <div className='product-details'>
                                <h3>{testItems.name}</h3>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

