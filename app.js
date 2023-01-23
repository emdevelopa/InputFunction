const inputE1 = document.querySelector(".team1Input")
const rootDiv = document.querySelector(".cont-team")
const sy = rootDiv.querySelectorAll(".indTeam")
const addBtn = document.querySelector(".addscore")
const resetBtn = document.querySelector(".reset")
const addTeamBtn = document.querySelector(".addTeamBtn")




// const inputEl= parseInt(teamnuber)

console.log(sy)
function inputFunctio() {
    console.log("hello");
    function foo() {
        let todo = sy.value;
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
}

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

function add() {
    x = document.getElementById('input')
    if(x.value === ""){
        x.value = 100;
    } else {
        let currentValue = parseInt(x.value);
        x.value = currentValue + 100;
    }
    inputFunctio()
}




// Input Evenetlistener
// sy.addEventListener("input",foo)

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
// addBtn.addEventListener("click",()=>{
//     inputEl.value+=100
//     b = foo();
//     b?.savetolocal(t);
// })


// function add(){
//     addBtn.addEventListener("click",()=>{
//             inputEl.value+=100
//             b = foo();
//             b?.savetolocal(t)    
// })
// }




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
        let newEl = document.createElement("div");
newEl.innerHTML = `<div class="indTeam"><p>Team `+count+`</p><input class="team1Input" oninput="`+inputFunctio()+`" type="number"><br><button class="addscore">+</button><button class="addscore">-</button></div>`;
rootDiv.appendChild(newEl);
let addButtons = newEl.querySelectorAll('.addscore');
addButtons.forEach(button => button.addEventListener("click", add));


        return (JSON.parse(localStorage.getItem(localStorageKey)))
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