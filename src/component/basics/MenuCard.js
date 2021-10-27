import React from 'react'

const MenuCard = ({ menuData, onAdd }) => {
    
  
    return (

        <>
        <section className="main-card--cointainer">
            {menuData.map((curElem) => {
                const {id,name,catogery,image,description,price}=curElem
                return (
                    <>
                        <div className="card-container" key={id}>
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">{id}</span>
                                    
                                    <span className="card-author subtle">{price}</span>
                                    <h2 className="card-title">{name}</h2>
                                    <span className="card-description subtle">{description}</span>
                                    <div className="card-read">Read</div>

                                </div>
                                <img src={curElem.image} alt="images" className="card-media"/>
                                
                                <button className="card-tag" onClick={() => onAdd(curElem)}>
                                    Add To Basket
                                </button>

                            </div>


                        </div>
                    </>
                )

            })}
    </section>
        </>
    )
}

export default MenuCard
