import { useEffect, useState } from "preact/hooks";
import React from "react";
import "./index.css";

function Home({adder}) {
  const [data, setData] = useState([]);

  const { shopArr, addBasket } = adder;


  useEffect(() => {
    console.log(shopArr);
  }, [shopArr]);

  useEffect(() => {
    fetch("http://localhost:3000/hybridBikes")
      .then((res) => res.json())
      .then((products) => setData(products));
  }, [data]);

  return (
    <>
      <section>
        <div className="container">
          <h1>TESLA EXHIBITION</h1>
          <div className="home-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              alias quos. Vitae earum laboriosam expedita cupiditate, adipisci
              quibusdam iure ipsa rerum distinctio saepe quae dolorem ullam
              autem ipsam. Quia, est.
            </p>
          </div>
          <div className="wrapper">
            {data &&
              data.map((x) => (
                <div className="card">
                  <div className="image">
                    <img src={x.image} alt="" />
                  </div>
                  <div className="texts">
                    <h3>Name: {x.title}</h3>
                    <p>Price: ${x.price}</p>
                    <hr />
                    <button
                      onClick={() => addBasket(x.id, x.image, x.title, x.price)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
