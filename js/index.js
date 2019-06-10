const order = document.getElementById("adct");
const cnl = document.getElementById("clsr");
const ord = document.getElementById("ormd");

order.addEventListener("click", ()=>{
    ord.style.display = 'block';
});

cnl.addEventListener("click", ()=>{
    ord.style.display = 'none';
});