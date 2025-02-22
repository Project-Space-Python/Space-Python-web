import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Payment from './Payment/Payment'; 
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }

  return (
    <Router>
      <div className="grid-container">
        <head>
          <link rel="stylesheet" href="style.css"></link>
          <title>Space Python</title>
        </head>
        <body>
          <header className="header">
            <div className="brand">
              <button onClick={openMenu}>&#9776;</button>
              <a href="index.html">Space Python</a>
            </div>
            <div className="header-links">
              <a href="cart.html">Cart</a>
              <a href="signin.html">Sign In</a>
              <Link to="/">Home</Link>
              <Link to="/catalog">Catalog</Link>
              <Link to="/orders">Orders</Link>
              <Link to="/payment">Payment</Link> {/* Added Payment link */}
            </div>
          </header> 
          <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
              <li><a href="index.html">Pants</a></li>
              <li><a href="index.html">Shirts</a></li>
            </ul>
          </aside>
          <main className="main">
            <div className="content">
              <Routes>
                <Route path="/" element={<h2>Home Page</h2>} />
                <Route path="/catalog" element={<h2>Catalog Page</h2>} />
                <Route path="/orders" element={<h2>Orders Page</h2>} />
                <Route path="/payment" element={<Payment />} /> {/* Added Payment Route */}
              </Routes>
            </div>                
          </main>
          <footer className="footer">
            &copy;2022 Space Python
          </footer>
        </body>
      </div>
    </Router>
  );
}

export default App;

