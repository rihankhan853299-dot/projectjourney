const todoinput=document.getElementById("todoinput")
const addbtn=document.getElementById("addbtn");
const todolist=document.getElementById("todolist");

// Add fuction 
addbtn.addEventListener("click",()=>{
const task=todoinput.value.trim();// input value ko task variable mein store kar do
if(task==""){
return; // agar input bo khali h to funcgtion ko vahi rok dega.
}
const li=document.createElement("li"); // ek lis item(li) create karo aur usse li naam ke variable mein store karo
li.classList.add("todos-item"); // li ko dynamiclly class dene ka tareeka.
li.id="task-list"; // li ko dynamiclly id dene ka tareeka.
li.textContent=task; // li naam ke variable mein task ki value ko assign kar do(as a tet value).
todolist.appendChild(li); // li ko todos list ke anadar daal do(add kar do) or todos list k neeche add karo.
todoinput.value="" // ye input ko khali kar dega.

// check function
const check=document.createElement("button");
check.classList.add("check");
check.textContent="complete?" // element k andar tet dalne ka tareeka.
todolist.appendChild(check);
check.addEventListener("click",()=>{
li.style.color="green";
li.style.textDecoration="line-through";
li.style.backgroundColor="black";
li.style.border="3px solid lightgreen"
check.textContent="completed"

})
// delete button for remove todos rihan
const deletebtn=document.createElement("button");
deletebtn.classList.add("btn");
deletebtn.textContent="Delete";
todolist.appendChild(deletebtn)
deletebtn.addEventListener("click",()=>{
li.remove(); // li ke andar jo bhi likha ho usse remove kar dena.
deletebtn.remove(); // delete button ko bhi remove(delete) kar dena.
check.remove();
})
});
