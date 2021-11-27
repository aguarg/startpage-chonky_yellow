//Sección Reloj y Fecha: el reloj se pone dentro de una función que es llamada mas abajo con setInterval 
//para actualizar la hora.
//Si no, queda la hora fija que había cuando se cargó la página. 

//RELOJ:
function actualizar_reloj() {
var h = new Date(); //es un constructor de objetos. Se le asigna a h para las horas
var m = new Date(); //Ídem, para los minutos.

//Esto es para mostrar un 0 cuando hay dígitos simples:
m = m.getMinutes();  //se accede al método .getMinutes() del objeto m creado mas arriba. 
if (m.toString().length == 1) {
            m = "0" + m;
        }

document.getElementById("reloj").innerHTML = h.getHours() + ":" + m;

}

//Actualizar el reloj llamando a la función cada 1000 milisegundos:
setInterval(actualizar_reloj, 1000);



//FECHA:
//día de la semana: se ponen en un arreglo, porque el método .getDay de mas abajo devuelve un número
//correspondiente al día de la semana, pero se quiere mostrar el día con letras.
var d = new Date();
var dias = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];

//Fecha
var f = new Date(); //fecha del día del mes.

//Mes: lo mismo que con los días de la semana.
var m = new Date();
var meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

//Año
var a = new Date();


document.getElementById("fecha").innerHTML = dias[d.getDay()] + ", " + f.getDate() + " de " + meses[m.getMonth()] + " de " + a.getFullYear();



/*Lista-----------------------------------*/
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("La caja de texto está vacía");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}



