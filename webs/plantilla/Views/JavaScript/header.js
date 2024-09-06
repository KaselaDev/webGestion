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

function convertirFecha(fechaStr) {
    const diasSemana = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

    const fecha = new Date(fechaStr);

    const diaSemana = diasSemana[fecha.getDay()];
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');

    const horaFormateada = `${horas}:${minutos}hs`;

    return `${diaSemana}, ${horaFormateada}`;
}

let estadoUser = false;
botonUser.addEventListener('click',() => {
    if (estadoUser) {
        dropUser.classList.add('hidden')
        dropUser.classList.remove('show')
    }else{
        dropUser.classList.remove('hidden')
        dropUser.classList.add('show')
    }
    estadoUser = !estadoUser
})

if (notis.length > 0) {
    globoNoti.style.display = "block";
    globoNoti.children[0].innerText = (notis.length >= 100)?("+99"):(notis.length);
}

let estadoNoti = false
btnNoti.addEventListener('click',() => {
    if (estadoNoti) {
        notificaciones.querySelector('.dropNotis').classList.add('hidden')
        notificaciones.querySelector('.dropNotis').classList.remove('show')
        notificaciones.querySelectorAll('.cardNoti').forEach(card => {
            card.classList.remove('show')
            card.classList.add('hidden')
        })
    }else{
        notificaciones.querySelector('.dropNotis').classList.remove('hidden')
        notificaciones.querySelector('.dropNotis').classList.add('show')
        notificaciones.querySelectorAll('.cardNoti').forEach(card => {
            card.classList.remove('hidden')
            card.classList.add('show')
        })
    }
    estadoNoti = !estadoNoti
})

notis.forEach(e => {
    const template = templateCardNoti.content.children[0];
    template.querySelector('.avatar').src = `https://robohash.org/${e.icono}?set=set4`;
    template.querySelector('.userName').innerText = e.nombre+" "+e.apellido;
    template.querySelector('.fecha').innerText = convertirFecha(e.fecha+"")
    template.querySelector('.asunto').innerText = e.asunto
    
    const card = document.importNode(template, true);
    notisResult.appendChild(card)
})