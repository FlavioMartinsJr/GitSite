import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './components/Menu/index'
import { Navbar } from './components/Navbar/index'
import { Footer } from './components/Footer/index'
import { Private } from './pages/Private';
import { RequireAuth } from './controllers/Auth/RequireAuth';
import "./assets/scss/global.scss";


function App() {

    return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Routes>
            <Route path="/" element={<RequireAuth><Home/></RequireAuth>} />,
            <Route path="/private" element={<RequireAuth><Private/></RequireAuth>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
    );
 }

export default App;
