// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friends = [];


let resultado = document.getElementById("resultado");
const friend = document.getElementById("amigo");
console.log("valor del parametro: "+ friend);

function addFriend(){

    if(friend.value != ""){
        friends.push(friend);
        console.log("valor del parametro: "+ friend.value);
        console.log("cantidad del array: "+friends.length);
        console.log("amigos: "+ friends[0].value);
        clearTag(friend);
        console.log("amigos: "+ friends[0]);
        console.log("amigos: "+ friends[0]);
    }else{
        alert("Please enter a name!");
    }
    
}

function clearTag(friend){
    friend.value="";
}
/*
Crea una función que recorra el array amigos y agregue cada
 nombre como un elemento <li> dentro de una lista HTML.
  Usa innerHTML para limpiar la lista antes de agregar
   nuevos elementos.

Tareas específicas:

    Obtener el elemento de la lista:
     Utilizar document.getElementById() o
      document.querySelector() para seleccionar
       la lista donde se mostrarán los amigos.

    Limpiar la lista existente: 
    Establecer lista.innerHTML = "" para asegurarse
     de que no haya duplicados al actualizar.

    Iterar sobre el arreglo:
     Usa un bucle for para recorrer el 
     arreglo amigos y crear elementos de 
     lista (<li>) para cada título.

    Agregar elementos a la lista:
     Para cada amigo, crear un nuevo 
     elemento de lista.
*/

function 
