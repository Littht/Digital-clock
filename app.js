const mostrarReloj=()=>{
    let fecha= new Date();
    let hr= formatoHora(fecha.getHours());
    let min= formatoHora(fecha.getMinutes());
    let seg= formatoHora(fecha.getSeconds());
    document.getElementById("hora").innerHTML=`${hr}:${min}:${seg}`

    
    

    const meses=["ene", "feb", "mar", "abr", "may" ,"jun", "jul", "ago", "sep", "oct", "nov", "dec"];
    const dias=["domingo","lunes", "martes","miercoles","jueves","viernes","sabado"];
    let diaSemana= dias[fecha.getDay()];
    let dia= fecha.getDate();
    let mes= meses[fecha.getMonth()];
    let año= fecha.getFullYear()
    document.getElementById("fecha").innerHTML=`${diaSemana}, ${dia} ${mes}, ${año}`

    setInterval(mostrarReloj,1000);

}

const formatoHora=(hora)=>{
     if (hora<10){
        hora = "0" + hora;
        }
    return hora;    
}

