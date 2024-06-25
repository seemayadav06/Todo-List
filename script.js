const inputbox=document.getElementById("input-box");
const list=document.getElementById("list-container");

function addtask(){
    if(inputbox.value===''){
        alert("you must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        list.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value==='';
    savedata();
}

list.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.class.toggle("checked");
        savedata();
    }
    else if(e.target.tagname==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",list.innerHTML);
}
function showtask(){
    list.innerHTML=localStorage.getItem("data");
}
showtask();