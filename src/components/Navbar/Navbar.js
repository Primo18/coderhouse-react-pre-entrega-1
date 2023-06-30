import React, { useState } from 'react';
import './NavBar.css'; 
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  const categories = ['Frutas', 'Verduras', 'Ofertas', 'Recetas']; // Ejemplo de categorías
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // Aquí puedes agregar la lógica adicional para manejar la categoría seleccionada
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Feria Libre Digital</div>
      <ul className="navbar-menu">
        {categories.map((category) => (
          <li
            key={category}
            className={`navbar-item ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
        <CartWidget />
    </nav>
  );
};

export  {NavBar};
