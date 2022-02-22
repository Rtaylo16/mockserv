import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from "react";
function App() {
  const [cars, setCars] = useState([]);
useEffect(() => {
    (async () => {
      const response = await fetch("/api/get-some-cars");
      const json = await response.json();
      setCars(json);
    })();
  }, []);
if (cars) {
    return cars.map(car => {
      return (
        <p key={car.regPlate}>
          Reg Plate: {car.regPlate} - Make: {car.make} - Model: {car.model}
        </p>
      );
    });
  }
return <div className="App"></div>;
}
export default App;
