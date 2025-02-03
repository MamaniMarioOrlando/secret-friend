// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friends = [];


let result = document.getElementById("resultado");
let friend = document.getElementById("amigo");
let namefriend = document.getElementById("namefriend");
let listFriends = document.getElementById("listaAmigos")

clearTag(friend)
function addFriend(){
    if(isEqualName(friends,friend)){
        alert("the entered name already exists");
        clearTag(friend)
        return;
    }
    if(friend.value == ""){
        alert("Please enter a name!");
        return;
    }
    friends.push(friend.value);

    showName();
    clearTag(friend);
    
}

function clearTag(friend){
    friend.value = "";
}


function showName(){
    
    listFriends.innerHTML = "";
    for (let i = 0; i < friends.length; i++) {
        let taskLi = document.createElement("li");
        taskLi.textContent= friends[i];
        listFriends.appendChild(taskLi);
    }
}

function isEqualName(friends,friend){
    for (let index = 0; index < friends.length; index++) {
        if(friends[index] == friend.value){
            return true;
        }
    }
    return false;
}

function isEmptyFriendList(friends){
    return friends.length === 0;
}

function sortearAmigo(){
    
    let randomIndex = Math.floor(Math.random() * friends.length);
    let liShowFriend = document.createElement("li");
    if(isEmptyFriendList(friends)){
        alert("no names on the list");
        return
    }   
        liShowFriend.textContent = friends[randomIndex];
        result.appendChild(liShowFriend);
}
