let container = document.querySelector(".container");

for (i=0;i<16;i++){
    let temp = document.createElement("div");
    temp.classList.add("grid");
    container.appendChild(temp);
}