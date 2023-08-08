let userListElem = document.getElementById('usersList')
const noneElem = document.getElementsByClassName('none')[0]

// set client username
let myName = localStorage.getItem("name")
if (myName == null || myName == "null"){
    myName = prompt("USERNAME")
}
if(myName == ""){
    location.reload()
}
localStorage.setItem("name", myName)
//

// load saved chats
// localStorage.setItem("chats", JSON.stringify([
//     {
//         name: "Ayush",
//         time: "5:41 pm",
//         lastMsg: "Hii"
//     },
//     {
//         name: "Sipu",
//         time: "5:41 pm",
//         lastMsg: "hello"
//     },
//     {
//         name: "sus",
//         time: "5:41 pm",
//         lastMsg: "hello"
//     },
// ]))

JSON.parse(localStorage.getItem("chats")).forEach(chat => {
    userListElem.innerHTML += `<div class="chat">
    <span class="name">${chat.name}</span>
    <span class="time">${chat.time}</span>
    <br>
    <span class="lastMsg">${chat.lastMsg}</span>
</div>`
});

//