import "./css/main.css"
import NavBar from "./components/NavBar"
import ItemListCont from "./components/ItemListCont"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import NotFound from "./components/NotFound"
import ContactForm from "./components/Contacto"
import NuestrasMarcasCont from "./components/NuestrasMarcasCont"
import Inicio from "./components/Inicio"


function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/"element={<Inicio/>}></Route>
      <Route path="/productos" element ={<ItemListCont/>}></Route>
      <Route path="/nuestras-marcas" element ={<NuestrasMarcasCont/>}></Route>
      <Route path="/contacto" element ={<ContactForm/>}></Route>
      <Route path="/*" element ={<NotFound/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
