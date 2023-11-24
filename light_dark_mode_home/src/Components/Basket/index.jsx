import { useState } from "preact/hooks";
import React from "react";
import "./index.css";

function Basket({ navViewer ,adder}) {

  const { shopArr, addBasket } = adder;

  const { isopen, setIsopen } = navViewer;
  return (
    <>
      <div className={`${!isopen ? "open-close" : "basket"}`}>
        <p onClick={() => setIsopen(!isopen)}>x</p>

        <div className="basket-inner">
            {shopArr && shopArr.map((item)=>
                <div className="basketcard">
                    <div className="basketimage">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="baskettexts">
                        <h6>Name: {item.title}</h6>
                        {/* <p>Price: {item.price}</p> */}
                    </div>
                </div>
            )}
        </div>
      </div>
    </>
  );
}

export default Basket;
