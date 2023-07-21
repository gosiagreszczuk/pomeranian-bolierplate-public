import React from 'react';
import './styles.css';

export const MGhomework = () => {
  // Definiujemy stan tła i funkcję do jego aktualizacji
  const [backgroundColor, setBackgroundColor] = React.useState('white');

  // Funkcja do obsługi kliknięcia w przycisk
  const handleClick = () => {
    // Tutaj określamy warunek, który będzie zmieniał kolor w zależności od aktualnego tła
    if (backgroundColor === 'white') {
      setBackgroundColor('lightblue');
    } else {
      setBackgroundColor('white');
    }
  };

  return (
    <div style={{ backgroundColor }}>
      <button onClick={handleClick}>Zmień kolor</button>
    </div>
  );
};
