import React, { Component, useState, useEffect } from "react";

export default function Clock2() {
  const state = {
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  };

  const [estado, setEstado] = useState(state);

  useEffect(() => {
    let timerID = setInterval (
        () => {
            setEstado
                (
                    {
                        fecha: new Date(),
                        edad: estado.edad + 1,
                        nombre: estado.nombre,
                        apellidos: estado.apellidos
                    }
                )
            }, 1000
        );
    });

  return (
    <div>
      <h2>
        Hora Actual:
        {estado.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {estado.nombre} {estado.apellidos}
      </h3>
      <h1>Edad: {estado.edad}</h1>
    </div>
  );
}
