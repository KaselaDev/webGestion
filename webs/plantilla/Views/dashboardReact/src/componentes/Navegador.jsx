import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import { faCalendarDays, faFileInvoiceDollar, faBellConcierge, faChild, faUsersGear, faChartLine, faBoxesStacked } from '@fortawesome/free-solid-svg-icons';
import '../styles/navegador.css';

function Navegador() {
  const [widthBar, setWitdthBar] = useState(300);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setWitdthBar(e.clientX); // Ajusta según la lógica que necesites
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mouseup', handleMouseUp);

    // Cleanup del evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  return (
    <section className='navContent'>
      <nav className="navegador" style={{ width: `${widthBar}px` }}>
        <h2 className="titulo">Navegador</h2>
        <div className="middle">
          <div className="opciones">
            <div className="opcion">
              <Icon css="icon" icon={faCalendarDays} />
              <span><p>Turnos</p></span>
            </div>
            <div className="opcion">
              <Icon css="icon" icon={faFileInvoiceDollar} />
              <p>Pedidos</p>
            </div>
            <div className="opcion">
              <Icon css="icon" icon={faBellConcierge} />
              <p>Servicios</p>
            </div>
            <div className="opcion">
              <Icon css="icon" icon={faChild} />
              <p>Clientes</p>
            </div>
            <div className="opcion">
              <Icon css="icon" icon={faUsersGear} />
              <p>Empleados</p>
            </div>
            <div className="opcion">
              <Icon css="icon" icon={faChartLine} />
              <p>Estadísticas</p>
            </div>
          </div>
        </div>
        <div className="stockContent">
          <div className="stock">
          <header>
            <h3 className='titulo'>Stock</h3>
            <span className="verStock">
              <Icon css="fa-solid fa-boxes-stacked" icon={faBoxesStacked} />
              <h4>Ver stock</h4>
            </span>
          </header>
          <div className="resultStock">
            {[1, 2, 3, 4].map((_, index) => (
              <div className="cardStock" key={index}>
                <div className="productoInfo">
                  <h3 className="nombre">Carne</h3>
                  <div className="barra">
                    <div className="barraCant" style={{ width: '90.87%' }}></div>
                  </div>
                  <h3 className="porcentaje">90.87%</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </nav>
      <div className="resizer" onMouseDown={handleMouseDown}/>
    </section>
  );
}

export default Navegador;
