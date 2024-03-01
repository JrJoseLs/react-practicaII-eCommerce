import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Nosotros from './components/Nosotros';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />

          {/* Corrección de la ruta para mostrar detalles de un artículo */}
          <Route path="item/:id" element={<ItemDetailContainer />} />

          {/* Corrección de la ruta para mostrar una lista de productos */}
          <Route path="/productos" element={<ItemListContainer />} />

          {/* Corrección de la ruta para mostrar una lista de productos filtrados por categoría */}
          <Route path="/productos/:categoria" element={<ItemListContainer />} />

          <Route path="/nosotros" element={<Nosotros />} /> 
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
