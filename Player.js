/*alert('hey Marius')
*/


//function setUnrealResolution(){
//    var width = window.innerWidth;
//    var height = window.innerHeight;
//    emitUIInteraction({Console: 'r.setres ${width}+ "x"+ ${height}'});
//    window.ue.setResolution(width, height);
//    console.log("ResolutionFunctionCalled");

//

//setUnrealResolution();
//window.addEventListener("resize", setUnrealResolution);


console.log("func_next");

let btn_prev = document.getElementById("btn_prev");
let btn_next = document.getElementById('btn_next');


function func_prev(){
    console.log("func_prev");
    emitUIInteraction("Prev");  
}

function func_next(){
    console.log("func_next");
    emitUIInteraction("Next");
}

btn_prev.addEventListener('click', func_prev)
btn_next.addEventListener('click', func_next)
