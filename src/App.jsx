import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductsList from './pages/ProductList';
import ProductDetails from './pages/ProductDetailes';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-base-200 flex flex-col justify-between">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
