// temporal
const notis = [
    {
        icono: "fa-solid fa-envelope",
        nombre: "Juan",
        apellido: "Pérez",
        asunto: "Nueva actualización disponible",
        fecha: "2024-08-01"
    },{
        icono: "fa-solid fa-bell",
        nombre: "María",
        apellido: "García",
        asunto: "Recordatorio de reunión",
        fecha: "2024-08-02"
    },{
        icono: "fa-solid fa-exclamation-circle",
        nombre: "Carlos",
        apellido: "Fernández",
        asunto: "Error en el sistema",
        fecha: "2024-08-03"
    },{
        icono: "fa-solid fa-info-circle",
        nombre: "Ana",
        apellido: "Martínez",
        asunto: "Información importante",
        fecha: "2024-08-04"
    },{
        icono: "fa-solid fa-comment",
        nombre: "Luis",
        apellido: "Rodríguez",
        asunto: "Nuevo comentario en tu publicación",
        fecha: "2024-08-05"
    },{
        icono: "fa-solid fa-heart",
        nombre: "Sofía",
        apellido: "López",
        asunto: "Alguien ha dado like a tu foto",
        fecha: "2024-08-06"
    },{
        icono: "fa-solid fa-calendar-check",
        nombre: "Pedro",
        apellido: "Gómez",
        asunto: "Evento programado para mañana",
        fecha: "2024-08-07"
    },{
        icono: "fa-solid fa-share",
        nombre: "Lucía",
        apellido: "Hernández",
        asunto: "Tu publicación ha sido compartida",
        fecha: "2024-08-08"
    },{
        icono: "fa-solid fa-thumbs-up",
        nombre: "Javier",
        apellido: "Díaz",
        asunto: "Alguien ha reaccionado a tu comentario",
        fecha: "2024-08-09"
    },{
        icono: "fa-solid fa-file-alt",
        nombre: "Marta",
        apellido: "Ruiz",
        asunto: "Nuevo documento compartido contigo",
        fecha: "2024-08-10"
    }
];

let estado = false;
botonUser.addEventListener('click',() => {
    estado = (estado) ? false : true;
    (estado)
    ?(dropUser.style.display = 'block')
    :(dropUser.style.display = 'none')
})

if (notis.length > 0) {
    globoNoti.style.display = "block";
    globoNoti.children[0].innerText = (notis.length+99 >= 100)?("+99"):(notis.length);
}

notificaciones.addEventListener('click',() => {
    console.log("ah despasito");
})