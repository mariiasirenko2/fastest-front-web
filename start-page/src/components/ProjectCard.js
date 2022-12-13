import React, { useState } from "react"

export  const ProjectCard = ({ testItems }) => {

    return (
        <>
            {testItems && testItems.map((testItems) => {
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

