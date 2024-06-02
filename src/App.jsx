import "./css/main.css"
import NavBar from "./components/NavBar"
import ItemListCont from "./components/ItemListCont"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import NotFound from "./components/NotFound"
import ContactForm from "./components/Contacto"
import Inicio from "./components/Inicio"
import ItemDetailCont from "./components/ItemDetailCont"



function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/"element={<Inicio/>}></Route>
      <Route path="/productos" element ={<ItemListCont/>}></Route>
      <Route path="/category/:categoryId" element= {<ItemListCont/>}></Route>
      <Route path="/item/:itemId" element = {<ItemDetailCont/>}></Route>
      <Route path="/contacto" element ={<ContactForm/>}></Route>
      <Route path="/*" element ={<NotFound/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
