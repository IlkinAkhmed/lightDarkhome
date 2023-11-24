import { useState } from 'preact/hooks'
import './app.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Basket from './Components/Basket'

export function App() {


  const [shopArr, setShopArr] = useState([]);

  

  function addBasket(id, image, title, price) {
    setShopArr([...shopArr,{ id, image, title, price}]);
  }

  const [isopen, setIsopen] = useState(false)
  return (
    <>
      <Navbar navViewer = {{isopen,setIsopen}}/>
      <Home adder = {{shopArr,addBasket}}/>
      <Basket navViewer = {{isopen,setIsopen}} adder = {{shopArr,addBasket}}/>
    </>
  )
}
