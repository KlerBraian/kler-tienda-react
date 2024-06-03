import "./css/main.css"
import NavBar from "./components/NavBar"
import ItemListCont from "./components/ItemListCont"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import NotFound from "./components/NotFound"
import ContactForm from "./components/Contacto"
import ItemDetailCont from "./components/ItemDetailCont"
import { Footer } from "./components/Footer"



function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/"element={<ItemListCont/>}></Route>
      <Route path="/category/:categoryId" element= {<ItemListCont/>}></Route>
      <Route path="/item/:itemId" element = {<ItemDetailCont/>}></Route>
      <Route path="/contacto" element ={<ContactForm/>}></Route>
      <Route path="/*" element ={<NotFound/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
