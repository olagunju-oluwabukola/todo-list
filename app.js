document.querySelector("#add").onclick = function(){
 if (document.querySelector("#todoValue input").value.length==0){
  alert('Please Enter a Todo')
 }
 else{
  document.querySelector('#tasks').innerHTML +=  `
  <div id="task">
<span id="taskName">
 ${
document.querySelector('#todoValue input').value
 }
</span>
<button class="done">Done</button>
</div>
   `;

let current_todo = document.querySelectorAll(".done");
for (let i=0; i<current_todo.length;i++){
  current_todo[i].onclick=function(){
    this.parentNode.remove();
  }
}

  let task = document.querySelectorAll('.task');
  for(let i = 0; i<task.length; i++ ){
    task[i].onclick=function(){
      this.classlist.toggle('completed')
    }
  }

document.querySelector('#todoValue input').value = ""


 }
}



