import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

const App = () =>{
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a mi tienda de Cafe"}/>
    </div>
  )
}

 

export default App
