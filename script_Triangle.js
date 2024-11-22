let result ;
let count = 0;
let radian;

function degreeToRadian(block) {
    let angle = document.getElementById(`id_select_angle${block}`).value
    let number = document.getElementById(`id_input${block}`).value
    if (angle) { //input from HTML true คือ องศา
        return radian = number * (Math.PI / 180);
    }else{
        number = radian
    }
    return radian
}
function tan_Not_90(radian, Type){
    if ((radian == Math.PI / 2 || radian == -Math.PI / 2 || radian == 3 * Math.PI / 2) && (Type == "arctan" || Type == "tan")){
        return true
    }
}
function Sin_Cos_Tan(radian, block) {
    Type = document.getElementById(`id_select_type${block}`).value
    if (tan_Not_90(radian, Type)) {
        return document.getElementById(`id_output${block}`).innerHTML = result = "+-Infinity"
    }else{
         switch (Type) {//input from html
            case "sin":
                result = Math.sin(radian).toFixed(3)
                break;
            case "cos":
                result = Math.cos(radian).toFixed(3)
                break;
            case "tan":
                result = Math.tan(radian).toFixed(3)
                break;
            default:
                result = "Error"
                break;
            }
        document.getElementById(`id_output${block}`).innerHTML = result
    }
   
}
function InverseTrig(block){
    Type = document.getElementById(`id_select_type_IT${block}`).value
    value = parseFloat(document.getElementById(`id_input_IT${block}`).value)
    switch(Type){
        case "arcsin":  
            result = (Math.asin(value) * (180 / Math.PI)).toFixed(3)
            break;
        case "arccos":
            result = (Math.acos(value) * (180 / Math.PI)).toFixed(3)
            break;
        case "arctan":
            result =( Math.atan(value) * (180 / Math.PI)).toFixed(3)
            break;
        default:
            result = "Error"
            break;
    }
    if(result == "NaN"){
        document.getElementById(`id_output_IT${block}`).innerHTML = "Invalid input"
    }else{
        document.getElementById(`id_output_IT${block}`).innerHTML = result
    }
    
}

function add_main_triangle(){
    count++
    let newNode = document.querySelector(".block_conten_triangle").cloneNode(true);
    newNode.querySelectorAll("[id]").forEach(element => {
        element.id = element.id.substr(0, element.id.length - 1) + count 
    });
    
    newNode.querySelector("[id^=id_input]").value = "0";
    newNode.querySelector("[id^=id_input_IT]").value = "0";
    newNode.querySelector("[id^=id_output]").innerHTML = "---";
    newNode.querySelector("[id^=id_output_IT]").innerHTML = "---";

    newNode.querySelector("[id^=select_functionT]").setAttribute("onchange", `Show_conten_triangle(${count})`);
    newNode.querySelector("[id^=_button]").setAttribute("onclick", `Sin_Cos_Tan(degreeToRadian(${count}),${count})`);
    //----------------IT-------------------
    newNode.querySelector("[id^=button_IT]").setAttribute("onclick", `InverseTrig(${count})`);
    //----------------Delete-------------------
    newNode.querySelector("[id^=S_remove_node]").setAttribute("onclick", `remove_main_triangle(${count})`);
    newNode.querySelector("[id^=I_remove_node]").setAttribute("onclick", `remove_main_triangle(${count})`);
    document.querySelector(".mainAll_Block_contenT").appendChild(newNode)

    let lastNode = document.querySelectorAll("[id^=block]")
    lastNode = lastNode[lastNode.length - 1]
    lastNode.id = lastNode.id.substr(0, lastNode.id.length - 1) + count
    console.log(lastNode)
}
function remove_main_triangle(block) {
    if(document.querySelectorAll(`[id^=block]`).length <= 1){
        alert("ไม่สามารถลบได้")
    }else{
        document.querySelector(`#block${block}`).remove()
    }
    
}

function Show_conten_triangle(block) {
    let select_functionT = document.getElementById(`select_functionT${block}`).value
    if (select_functionT == "InverseTrig") {
        document.getElementById(`sin_cos_tan${block}`).style.display = "none";
        document.getElementById(`InverseTrig${block}`).style.display = "block";
    }else if (select_functionT == "SinCosTan") {
    document.getElementById(`InverseTrig${block}`).style.display = "none";
        document.getElementById(`sin_cos_tan${block}`).style.display = "block";
    }else{}
}