import {Routes, Route} from 'react-router-dom'
import Layout from './componentes/Layout'
import Home from './pages/Home'
import CadastroCliente from './pages/CadastroCliente'
import './App.css'
import Produtos from './pages/Produtos'
import CadastroProduto from './pages/CadastroProduto'

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/cadastro-cliente" element={<CadastroCliente/>}/>
        <Route path="/produtos" element={<Produtos/>}/>
      </Route>
    </Routes>
  )
}

export default App
