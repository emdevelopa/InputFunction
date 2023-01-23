const inputE1 = document.querySelector(".team1Input")
const rootDiv = document.querySelector(".cont-team")
const sy = rootDiv.querySelectorAll(".indTeam")
const addBtn = document.querySelector(".addscore")
const removeBtn = document.querySelector(".removescore")
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

function add(inputId) {
    let x = document.getElementById(inputId)
    if(x.value === ""){
        x.value = 100;
    } else {
        let currentValue = parseInt(x.value);
        x.value = currentValue + 100;
    }
}

function remove(inputId) {
    let x = document.getElementById(inputId)
    if(x.value !=0){
        let currentValue = parseInt(x.value);
        x.value = currentValue - 100;
    }
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



// newAddButton.addEventListener("click", () => add(newAddButton.previousElementSibling.id));


// Add Team button function
let count = 1;
let countt = 0;
addTeamBtn.addEventListener("click",function (e) {
    count++;
    if(count <7){
        let newEl = document.createElement("div");
        newEl.innerHTML = `<div class="indTeam"><p>Team ${count}</p><input class="team1Input" oninput="${inputFunctio()}" id="input${count}" type="number"><br>
<button class="addscore" onclick="add('input${count}')">+</button>
<button class="addscore" onclick="remove('input${count}')">-</button></div>`;
        rootDiv.appendChild(newEl);
        let newAddButton = newEl.querySelectorAll('.addscore');
        let newRemoveButton = newEl.querySelectorAll('.removescore');
        newAddButton.forEach(button => button.addEventListener("click", add));
        newRemoveButton.forEach(button => button.addEventListener("click", remove));
    }
});

        return (JSON.parse(localStorage.getItem(localStorageKey)))
    // }
    // 
// });
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