const item = document.querySelectorAll(".item");
const btn = document.querySelectorAll(".btn");

const btnArray = [...btn];
const elevatorArray = [...item];

elevatorArray[0].style.backgroundColor = "red";


btnArray.forEach((btn , index) => {

    btn.addEventListener('click', () =>{
        const btnIndex = index + 1;

        elevatorArray.forEach((elevator , index) => {
            const elevatorIndex = index + 1;

            if(elevatorIndex == btnIndex) {
                elevator.style.backgroundColor = "red";
            }else{
                elevator.style.backgroundColor = "white";
            }
        })
    })

})
