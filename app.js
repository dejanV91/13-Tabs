const buttons=document.querySelectorAll(".btn");
const contents=document.querySelectorAll(".cnx");
const about=document.querySelector(".tabsSection");

about.addEventListener("click", function(item){
    const elem=item.target.dataset.id;

    if (elem) {
        buttons.forEach(function(a){
            a.classList.remove("active");
        });
    item.target.classList.add("active");
    }

    contents.forEach(function(a){
        a.classList.remove("active")
        if (elem == a.id) {
            a.classList.add("active");
        }
    });
});