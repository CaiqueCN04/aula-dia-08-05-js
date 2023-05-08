//retorna a data

/*let data = new Date()
document.write(data);
document.write("<br><br>");

//retorna a data padrão americano



//retorna a data padrao do navegador 
let data2= new Date()
document.write(data2.toLocaleDateString());
document.write("<br><br>");

//retorna a data com array

let data3= new Date()
let diaSemana=['domingo','segunda', 'terça','quarta', 'quinta','sexta','sabado']
document.write(diaSemana[data3.getDay()]);
document.write("<br><br>");

//horas
let hora =new Date()
document.write(hora.getHours());
document.write("<br><br>");
hora.setHours(hora.getHours()+2)
document.write(hora.getHours());


//minutos 
let minutes=new Date()
document.write(':',minutes.getMinutes());

//segundos
let segundos= new Date()
document.write(':',segundos.getSeconds());
document.write("<br><br>");*/

msg= document.getElementById('msgData')
let data1= new Date()
//document.write(data1.toDateString());
//document.write("<br><br>");

msg.innerHTML+=`<p>${data1}</p>`