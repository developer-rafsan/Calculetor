const allButton = document.querySelectorAll("button");
const dataEntry = document.getElementById("dataEntry");
const total = document.getElementById ("total");
const result = document.getElementById ("result");
const clearData = document.getElementById ("clearData");
const togol = document.getElementById("togol")
const light = document.getElementById("light")


for(let i = 0; i < allButton.length; i++){
    allButton[i].disabled=true;
}


allButton.forEach(e => {
    e.addEventListener("click", ()=> {
        dataEntry.value += e.value;
    })
})


total.addEventListener('click', ()=> {
    let totalResult = eval(dataEntry.value);
    result.value = totalResult;
})


clearData.addEventListener('click',()=>{
    result.value = "";
    dataEntry.value = "";
})


let isOn_off ;
isOn_off = false;
togol.addEventListener('click',()=>{
    if(isOn_off === false ){
        light.classList.add("light");
        togol.classList.remove("fa-toggle-off")
        togol.classList.add("fa-toggle-on")
        isOn_off = true;

        for(let i = 0; i < allButton.length; i++){
            allButton[i].disabled=false;
        }

    }else{
        light.classList.remove("light")
        togol.classList.remove("fa-toggle-on")
        togol.classList.add("fa-toggle-off")
        isOn_off = false;
        for(let i = 0; i < allButton.length; i++){
            allButton[i].disabled=true;
        }
    }
})




