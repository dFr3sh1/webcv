let counter = document.querySelector("#Counter"); //Sélectionne le button avec l'id counter
counter.addEventListener("click", contactIncrease); //met en place un gestionnaire d'évènements

function contactIncrease () {    
    let getCounter = localStorage.getItem("Counter"); //Recupère la valeur de prénom dans la machine en local
    let spanCounter = document.querySelector("#Display") //Sélectionne le span avec l'id name
    //spanCounter.textContent = getName; //Remplace le contenu text de ce span par la valeur
    if(getCounter != null) {
        //getName = getName + 1; Pour compter un nouveau valeur dans la variable getname
        getCounter++;//une autre façon de compter une nouvelle valeur dans la varibale getName
        localStorage.setItem("Counter", getCounter)
        spanCounter.textContent = getCounter
    }else{
        localStorage.setItem("Counter", 1)
        spanCounter.textContent= 1; 
    }
}

function displayName (){
    alert("Clicked")  
 
}



let buttonDisplayName = document.querySelector("#Display") //Sélecionne le button avec l'id Display
buttonDisplayName.addEventListener ("click", displayName ) //met en place un gestionnaire d'évènements
z