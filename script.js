


/* ***** Menú ***** */

((d)=>{
    const $btnMenu = d.querySelector(".menu-btn"),
        $menu = d.querySelector(".menu");

    $btnMenu.addEventListener("click", (e)=>{
        //quiero que al primer elemento hijo en su lista de clases
        //le intercambie la clase "None"
        $btnMenu.firstElementChild.classList.toggle("none"); // primer click
        $btnMenu.lastElementChild.classList.toggle("none"); // segundo click
        $menu.classList.toggle("is-active");

    });

    d.addEventListener("click", (e)=>{
        //objeto= e.target
        //método = matches 
        if (!e.target.matches(".menu a")) return false
        // si el evento que origino el click es un enlace que está dentro del menú
        $btnMenu.firstElementChild.classList.remove("none"); 
        $btnMenu.lastElementChild.classList.add("none"); 
        $menu.classList.remove("is-active");

    })
})(document);