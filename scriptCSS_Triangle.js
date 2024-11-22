let listAllitem = document.getElementsByClassName("mainAll_Block_contenT");

document.getElementById("list-item-1").addEventListener("click", function () {
    for (let i = 0; i < listAllitem.length; i++) {
        if(i == 0){
            listAllitem[i].style.display = "flex";
        }else{
            listAllitem[i].style.display = "none";
        }
    }
});

document.getElementById("list-item-2").addEventListener("click", function () {
    for (let i = 0; i < listAllitem.length; i++) {
        if(i == 1){
            listAllitem[i].style.display = "block";
        }else{
            listAllitem[i].style.display = "none";
        }
    }
});

function navbutton(x){
    let buttonav1 = document.getElementById("navbutton_1")
    let buttonav2 = document.getElementById("navbutton_2")
    let buttonav3 = document.getElementById("navbutton_3")
    let displaybutton = document.querySelectorAll(".btn_Ad_Re")
    let input_T = document.querySelectorAll(".input_T")
    let result_T = document.querySelectorAll(".result_T")
    let block_conten = document.querySelectorAll(".block_conten_triangle")
    block_conten.forEach(block_conten => {
        switch(x){
            case 1:
                block_conten.style.width = "80%";
                buttonav1.style.background = "green";
                buttonav1.style.color = "white";
                buttonav2.style.background = "white";
                buttonav2.style.color = "green";
                buttonav3.style.background = "white";
                buttonav3.style.color = "green";
                displaybutton.forEach(displaybutton => {
                    displaybutton.style.width = "200px"
                })
                input_T.forEach(input_T => {
                    input_T.style.width = "300px"
                })
                result_T.forEach(result_T => {
                    result_T.style.width = "423px"
                    result_T.style.marginTop = "15px"
                })
                break;
            case 2:
                block_conten.style = "width: 45%";
                buttonav2.style.background = "green";
                buttonav2.style.color = "white";
                buttonav1.style.background = "white";
                buttonav1.style.color = "green";
                buttonav3.style.background = "white";
                buttonav3.style.color = "green";
                input_T.forEach(input_T => {
                    input_T.style.width = "200px"
                })
                result_T.forEach(result_T => {
                    result_T.style.width = "326px"
                    result_T.style.marginTop = "15px"
                })
                break;
            case 3:
                block_conten.style = "width: 30%";
                buttonav3.style.background = "green";
                buttonav3.style.color = "white";
                buttonav2.style.background = "white";
                buttonav2.style.color = "green";
                buttonav1.style.background = "white";
                buttonav1.style.color = "green";
                input_T.forEach(input_T => {
                    input_T.style.width = "100px"
                })
                result_T.forEach(result_T => {
                    result_T.style.width = "225px"
                    result_T.style.marginTop = "15 px"
                })
                break;
            default:
                block_conten.style = "width: 45%";
                buttonav2.style.background = "green";
                buttonav2.style.color = "white";
                buttonav1.style.background = "white";
                buttonav1.style.color = "green";
                buttonav3.style.background = "white";
                buttonav3.style.color = "green";
                input_T.forEach(input_T => {
                    input_T.style.width = "200px"
                })
                result_T.forEach(result_T => {
                    result_T.style.width = "326px"
                    result_T.style.marginTop = "15px"
                })
                break;
        }
     })
}
