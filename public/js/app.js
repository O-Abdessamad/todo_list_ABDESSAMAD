// les variable
let input_text = document.querySelector(".input_text");
let btn_add = document.querySelector(".btn_add");
let emplacement = document.querySelector(".emplacement ");

// les tableaux
let boit_element=[];
let boit_elementV=[];
let boit_elementS=[];
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
        boit_element.push(p.textContent);
        console.log(p.textContent);
        h3.appendChild(p);
        //creation de icon
        let icon = document.createElement("i");
        icon.innerHTML = '<i class="fa-solid verif fa-check" value="done" style="color: #42f312;"></i> <i class="fa-solid update fa-pen-to-square" ></i> <i class="fa-regular sup fa-circle-xmark"></i>';
        
        h3.appendChild(icon);       
    }
    
    input_text.value = "";
})

//Suprition des elements
document.addEventListener("click", element =>{
    if (element.target.className.includes("sup")) {
        let contenuS=element.target.parentElement.parentElement.textContent;
        contenuS=contenuS.slice(0, contenuS.length-1);
        boit_elementS.push(contenuS);
        console.log(boit_elementS);
        element.target.parentElement.parentElement.remove();
    }

//Valider
document.addEventListener("click", element =>{
    if (element.target.className.includes("verif")) {
        let contenuV=element.target.parentElement.parentElement.textContent;
        contenuV=contenuV.slice(0, contenuV.length-1);
        element.target.parentElement.parentElement.classList.toggle("green");
        

    }
})

//Modifier Element
document.addEventListener("click", element =>{
    if (element.target.className.includes("update")) {
        element.target.parentElement.parentElement.classList.toggle("edit");
        let pro = prompt(`Modifier la valeur de : ${element.target.parentElement.previousElementSibling.textContent}`);

        if (pro.length==0) {
            element.target.parentElement.previousElementSibling.textContent = element.target.parentElement.previousElementSibling.textContent;

            
        }else{
            console.log(pro.length);
            element.target.parentElement.previousElementSibling.textContent = pro;
        }

        
    }
})


})


