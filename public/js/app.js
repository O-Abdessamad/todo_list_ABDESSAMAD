// les variable
let input_text = document.querySelector(".input_text");
let btn_add = document.querySelector(".btn_add");
let emplacement = document.querySelector(".emplacement ");
console.log(emplacement);

btn_add.addEventListener("click",(element)=>{

    // cration des element
    if (input_text.value != "") {
        element.preventDefault();
        //creation de h3
        let h3 = document.createElement("h3");
        emplacement.appendChild(h3);
        h3.setAttribute("class", "h3_dsplay")
        //creation de p
        let p = document.createElement("p");
        p.textContent = input_text.value;
        h3.appendChild(p);
        //creation de icon
        let icon = document.createElement("i");
        icon.innerHTML = '<i class="fa-solid verif fa-check" value="done" style="color: #42f312;"></i> <i class="fa-solid update fa-pen-to-square" ></i>';
        
        h3.appendChild(icon);
        //creation de X
        let spane = document.createElement("span");
        spane.innerHTML = "x";
        h3.appendChild(spane);
    }
    // suprition des elements
    let X = document.querySelectorAll("span");
    
    for (let i = 0; i < X.length; i++) {
        X[i].addEventListener("click", ()=>{
            X[i].parentNode.remove();
            
        })
    }
    //
    input_text.value = "";
})

//Valider
document.addEventListener("click", element =>{
    if (element.target.className.includes("verif")) {
        element.target.parentElement.parentElement.classList.toggle("green");
        console.log(element.target.parentElement.parentElement);
    }
})

//Modifier Element
document.addEventListener("click", element =>{
    if (element.target.className.includes("update")) {
        element.target.parentElement.parentElement.classList.toggle("edit");
        let pro = prompt(`Modifier la valeur de : ${element.target.parentElement.previousElementSibling.textContent}`);
        element.target.parentElement.previousElementSibling.textContent = pro;
    }
})
