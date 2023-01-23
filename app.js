const inputEl = document.querySelector(".team1Input")
const rootDiv = document.querySelector(".cont-team")
const sy = rootDiv.querySelectorAll(".indTeam")
const addBtn = document.querySelector(".addscore")
const resetBtn = document.querySelector(".reset")
const addTeamBtn = document.querySelector(".addTeamBtn")
console.log(sy);
function foo() {
    let todo = inputEl.value;
    savetolocal(todo)
    function savetolocal(todo){
        let todos;
        todos = {
            "TeamOne": todo,
        }
       
        todos.TeamOne = todo;
        localStorage.setItem("todo",JSON.stringify(todos)); 
        
    }
}

// Input Evenetlistener
inputEl.addEventListener("input",foo)

// Window get value funtiion from local storage
window.abc = function (localStorageKey = "todo") {
    return (JSON.parse(localStorage.getItem(localStorageKey)));
}

// Window loads, gets and sets value on the input 
window.onload = function r(){
    let r = window.parent.abc()
    inputEl.value = r?.TeamOne;
    
}

// Add button eventlistener function
addBtn.addEventListener("click",()=>{
    inputEl.value++
    b = foo();
    b?.savetolocal(t);
})

// Reset Button Function
resetBtn.addEventListener("click",()=>{
    localStorage.clear()
    setInterval(location.reload(),1000)   
})

// Add Team button function
let count = 1;
let countt = 0;
addTeamBtn.addEventListener("click",function (e) {
    
    
    count++;
    if(count <7){
        let newelm = `<div class="indTeam"><p>Team `+count+` </p><input class="team1Input" type="number"><br><button class="addscore">+</button><button class="addscore">-</button></div>`;
        rootDiv.innerHTML += newelm;
    }

});
// function storeElementCount(res){
//     if(res <7){
//         localStorage.setItem('storedCount',res);
//     }
// };

// !function(){
//     let storedcount = localStorage.getItem('storedCount');
//     if (storedcount !== null){
//         if(storedcount <7){
//             rootDiv.innerHTML = "";
//             for(var k = 0; k<storedcount; k++){
//                 console.log(k);
//                 rootDiv.innerHTML += `<div class="indTeam"><p>Team `+(k+1)+` </p><input class="team1Input" type="number"><br><button class="addscore">+</button><button class="addscore">-</button></div>`;
//             }
//         }
//     }
// }();