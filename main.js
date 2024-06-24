const menuBtn = document.querySelector("#menuButton")
const list = document.querySelector("#list")
const colseBtn = document.querySelector("#closeButton")

menuBtn.addEventListener("click", function(){
    list.style.display="flex"
    menuBtn.style.display="none"
    colseBtn.style.display="block"
})

colseBtn.addEventListener("click", function(){
    list.style.display="none"
    menuBtn.style.display="block"
    colseBtn.style.display="none"
})


