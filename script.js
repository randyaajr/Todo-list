var comment = true;
function AddList(){
    var x = document.getElementById('input-todo').value;
    if(x.length < 3){
        document.getElementById('input-todo').value = 'Too low !';
    }else if(x.length > 20){
        document.getElementById('input-todo').value = 'Too big !';
    }else{
        let d = new Date();
        comment = !comment;
        document.getElementById('list').innerHTML += (
            `<div class='${comment ? 'list' : 'list-2'}' onclick='this.style.textDecoration = "line-through"'>
                <button class='cancel' onclick='this.parentElement.style.display = "none";'>×</button>
                <span class='text'>${x} at : ${d.getHours()}:${d.getMinutes()}</span>
            </div>`
        );
        document.getElementById('input-todo').value = '';
    }
}
/*Onclick add btn*/
document.getElementById('btn-send-todo').onclick = AddList;


