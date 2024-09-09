import React, { useEffect, useRef, useState } from 'react';
import '../styles/Header.css';
import logo from '../imagenes/logo.jpg';
import Icon from '../componentes/Icon';
import { faBell, faEnvelope, faGear, faRightFromBracket, faUserGear } from '@fortawesome/free-solid-svg-icons';
import TemplateCardNoti from './TemplateCardNoti';

function Header() {

  // temporal
  const notis = [
    {
        icono: "915695",
        nombre: "Juan",
        apellido: "Pérez",
        asunto: "Nueva actualización disponible",
        fecha: "2024-08-01 19:16:59"
    },{
        icono: "91298",
        nombre: "María",
        apellido: "García",
        asunto: "Recordatorio de reunión",
        fecha: "2024-08-02 15:36:54"
    },{
        icono: "516516",
        nombre: "Alberto",
        apellido: "Fernández",
        asunto: "Desmayo a su compañera",
        fecha: "2024-08-03 21:42:30"
    }
  ];

// function convertirFecha(fechaStr) {
//   const diasSemana = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

//   const fecha = new Date(fechaStr);

//   const diaSemana = diasSemana[fecha.getDay()];
//   const horas = fecha.getHours().toString().padStart(2, '0');
//   const minutos = fecha.getMinutes().toString().padStart(2, '0');

//   const horaFormateada = `${horas}:${minutos}hs`;

//   return `${diaSemana}, ${horaFormateada}`;
// }

// let estadoUser = false;
// botonUser.addEventListener('click',() => {
//   if (estadoUser) {
//       dropUser.classList.add('hidden')
//       dropUser.classList.remove('show')
//   }else{
//       dropUser.classList.remove('hidden')
//       dropUser.classList.add('show')
//   }
//   estadoUser = !estadoUser
// })

// if (notis.length > 0) {
//   globoNoti.style.display = "block";
//   globoNoti.children[0].innerText = (notis.length >= 100)?("+99"):(notis.length);
// }


  const [userBtn, setUserBtn] = useState(false);
  const [notiBtn, setNotiBtn] = useState(false);
  const primerRenderUserBtn = useRef(true);
  const primerRenderNotiBtn = useRef(true);

  const setStatusBoleano = (param) => {
  
    switch (param) {
      case "user":
        if (notiBtn) {
          setStatusBoleano("noti")
        }
        setUserBtn(x => !x);
        break;
      case "noti":
        if (userBtn) {
          setStatusBoleano("user")
        }
        setNotiBtn(x => !x)
        break;
      default:
        break;
    }
  };

  useEffect(() => {

    if (primerRenderUserBtn.current) {
      primerRenderUserBtn.current = false;
      return;
    }

    console.log("userBTN Render ");
    

    if (userBtn) {
      dropUser.classList.remove('hidden')
      dropUser.classList.add('show')
    }else{
      dropUser.classList.add('hidden')
      dropUser.classList.remove('show')
    }
  },[userBtn])

  useEffect(() => {

    if (primerRenderNotiBtn.current) {
      primerRenderNotiBtn.current = false;
      return;
    }
    
    if (notiBtn) {
      notificaciones.querySelector('.dropNotis').classList.remove('hidden')
      notificaciones.querySelector('.dropNotis').classList.add('show')
      notificaciones.querySelectorAll('.cardNoti').forEach(card => {
        card.classList.remove('hidden')
        card.classList.add('show')
      })
    }else{
      notificaciones.querySelector('.dropNotis').classList.add('hidden')
      notificaciones.querySelector('.dropNotis').classList.remove('show')
      notificaciones.querySelectorAll('.cardNoti').forEach(card => {
        card.classList.remove('show')
        card.classList.add('hidden')
      })
    }
  },[notiBtn])

  return (
    <header className="header">
      <img className="logo" src={logo} alt="Cargando logo..." />
      
      <div className="irLanding">
        <div className="content">
          <h4>Ver Landing page</h4>
        </div>
      </div>

      <h1>Dashboard 'Kasela3D'</h1>
      
      <div className="hiUser">
        <div className="content">
          <h4>Hola, KaselaDev</h4>
        </div>
      </div>

      <div className="notificaciones" id="notificaciones">
        <div className="iconContainer" onClick={() => setStatusBoleano('noti')}>
          <Icon css="fa-bell" icon={faBell} id="btnNoti" />
          <div id="globoNoti" className="cantNoti">
            <p>3</p>
          </div>
        </div>
        <div className="dropNotis" id="dropNotis">
          <div className="shadow"></div>
          <header>
            <h3 className="titulo">Notificaciones</h3>
            <div className="verTodas">
              <i className="fa-solid fa-envelope-open-text"></i>
              <h4>Ver todas</h4>
            </div>
          </header>
          <div className="notisResult" id="notisResult">
            {
              notis.map((noti, index) => {
                return(
                  <TemplateCardNoti
                  key={index}
                  name={noti.nombre}
                  lastName={noti.apellido}
                  fecha={noti.fecha}
                  asunto={noti.asunto}
                  avatar={`https://robohash.org/${noti.icono}?set=set4`}
                  />
                );
              })
            }
          </div>
        </div>
      </div>

      <div className="userDrop" id="userDrop">
        <div className="contentAvatar" onClick={() => setStatusBoleano("user")}>
          <img className="avatar" id="botonUser" src="https://robohash.org/kg?set=set4" alt="Cargando..." />
        </div>
        
        <div className="dropUser" id="dropUser">
          <div className="cardRolUser">
            <div className="rol"><p>Admin</p></div>
            <div className="avatarContent">
              <img className="avatar" src="https://robohash.org/kg?set=set4" alt="Cargando..." />
            </div>
            <span className="nombre"><p>Santiago Casellas</p></span>
            <span className="email">
              <Icon css="icon" icon={faEnvelope}/>
              <p>santiagocasellas2005@gmail.com</p>
            </span>
          </div>
          <hr />
          <div className="opciones">
            <span className="opcion">
              <Icon css="icon" icon={faUserGear}/>
              <p>Configurar usuario</p>
            </span>
            <span className="opcion">
              <Icon css="icon" icon={faGear}/>
              <p>Configurar Web</p>
            </span>
            <span className="opcion logout">
              <Icon css="icon" icon={faRightFromBracket}/>
              <p>Cerrar sesión</p>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
