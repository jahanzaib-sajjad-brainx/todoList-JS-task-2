
function Input(){
            let input=document.getElementById("input").value;
            document.getElementById("input").value='';
            let text=document.createTextNode(input);

            let listitems=document.createElement("div");
            //creating div for appendingchechbox and label
            let checkboxdiv=document.createElement("div");
            
            let checkbox=document.createElement('input');
            checkbox.type="checkbox";
            checkbox.name="listitem";
            checkbox.id="listitem";
            // checkbox.onclick=Checked(this);
            checkbox.addEventListener("click", Checked); // calling function 
            checkbox.classList.add('me-2');
            let label=document.createElement('label');
            label.htmlFor="id";
            label.id="chechbox-label";
            label.appendChild(text);

            let edittext=document.createElement('input');
            edittext.type="text";
            edittext.id="edit-text";
            edittext.style.visibility="hidden";
            edittext.classList.add('mb-2');

            edittext.addEventListener("onchange",() => {
                console.log(this.value);
                this.previousSibling.value=this.value;
            })

            edittext.addEventListener("keypress", (event) => {
                if(event.key === "Enter") {
                    console.log(typeof event.target)
                    console.log("entered");
                    event.target.style.visibility="hidden";
                    event.target.previousSibling.innerText=event.target.value;
                    event.target.previousSibling.style.visibility="initial";
                    event.target.previousSibling.previousSibling.style.visibility="initial";

                     event.target.previousSibling.style.position="relative";
                     event.target.previousSibling.previousSibling.style.position="relative"; 
                    
                    
                }
            })

            //appendung checkbox and label to div
            checkboxdiv.appendChild(checkbox);
            checkboxdiv.appendChild(label);
            checkboxdiv.appendChild(edittext);
            checkboxdiv.style.float="left";
            
            //creating div for appending icons
            let icondiv=document.createElement("div");
            
            let editicon=document.createElement('i');
            editicon.classList.add('fa-solid','fa-pen-to-square','me-3')
            editicon.addEventListener("click",edit); // calling function
            
            let delicon=document.createElement('i');
            delicon.classList.add('fa-solid','fa-trash','me-3')
            delicon.addEventListener("click",dlt);
            //appending icons to div
            icondiv.appendChild(editicon);
            icondiv.appendChild(delicon); 
            icondiv.style.float="right";
            // checkboxdiv.classList.add('flex-right');
            
            let hr=document.createElement('hr');
            hr.style.clear="both";
            // hr.classList.add('clearfix');
            
            
            // appending both divs to main div
            listitems.appendChild(checkboxdiv);
            listitems.appendChild(icondiv);
            listitems.appendChild(hr);

            //appeding main div to html
            document.getElementById("list-container").appendChild(listitems);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            /// applying changes on click of editicon
            //  delicon.onclick=dlt();
          
}

function dlt(){
                this.parentNode.parentNode.remove();
}


function Checked(){
    if(this.checked){
        this.nextSibling.style.textDecoration="line-through";
    }
    else{
        this.nextSibling.style.textDecoration="none";
    }
    
}
function edit(){
    
    this.parentNode.previousSibling.lastChild.previousSibling.style.visibility="hidden";
    this.parentNode.previousSibling.firstChild.style.visibility="hidden"; 
    this.parentNode.previousSibling.lastChild.previousSibling.style.position="absolute";
    this.parentNode.previousSibling.firstChild.style.position="absolute"; 
    this.parentNode.previousSibling.lastChild.value=this.parentNode.previousSibling.childNodes[1].innerHTML;
    this.parentNode.previousSibling.lastChild.style.visibility="initial";
    

    let text = this.parentNode.previousSibling.lastChild.value;
    //let text=document.getElementById("edit-text").value;
    

    // this.parentNode.previousSibling.lastChild.previousSibling.appendChild(document.createTextNode(text));
    // this.parentNode.previousSibling.lastChild.previousSibling.style.visibility="initial";
    // this.parentNode.previousSibling.lastChild.style.visibility="hidden";



    

}
