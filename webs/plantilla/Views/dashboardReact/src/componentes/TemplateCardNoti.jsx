import React from 'react'

export default function TemplateCardNoti({avatar,name,lastName,fecha,asunto}) {
  
  function convertirFecha(fechaStr) {
      const diasSemana = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    
      const fecha = new Date(fechaStr);
    
      const diaSemana = diasSemana[fecha.getDay()];
      const horas = fecha.getHours().toString().padStart(2, '0');
      const minutos = fecha.getMinutes().toString().padStart(2, '0');
    
      const horaFormateada = `${horas}:${minutos}hs`;
    
      return `${diaSemana}, ${horaFormateada}`;
    }
  
  return (
    <>
      <div className="cardNoti">
        <img src={avatar} className="avatar" alt="Cargando..." />
        <div className="info">
          <div className="datos">
            <h4 className="userName">{`${name} ${lastName}`}</h4>
            <h4 className="fecha">{convertirFecha(fecha)}</h4>
          </div>
          <p className="asunto" id="asunto">{asunto}</p>
        </div>
      </div>
    </>
  )
}
