


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

/* ***** ContactForm ***** */

((d) => {
    /*declaramos las variables */
    const   $form = d.querySelector(".contact-form"),
            $loader = d.querySelector(".contact-form-loader"),
            $response = d.querySelector(".contact-form-response"); /*es la respuesta del formulario*/

    /*¿Por qué empiezan con $? 
        por que es una buena práctica que toda las variables que hagan referencias a elementos del DOM
        se les anteponga la palabra variable para que tu como programador sepas cuando una variable es
        dentro de la lógica de programacion y cuando es un elemento del DOM
    */

    //asignamos el evento submit al formulario

    $form.addEventListener("submit", (e) =>{
        e.preventDefault();
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/diegovillacortaramos@gmail.com", {
            method: "POST",
            //especificamos la información que se vá a a enviar, el formulario
            // declaro una variable tipo FormData
            body: new FormData(e.target)
        })//Fetch trabaja con promesas entonces aca vamos a ejecutar los metodos 'then()'
        .then((res) => (res.ok ? res.json():Promise.reject(res))) //operador ternario
        .then(json =>{
            console.log(json);
            
            /*vamos a activar la ventana modal de agradecimiento, ¿Como hago que el target esté en la ventana modal?
            ¿Como hago que el target esté en la ventana modal?
            Pues si yo a la Url le agrego en la parte del hash '#' el id gracias, entonces:
            vamos a usar el objeto `LOCATION`(controla toda las partes de la url que se escribe en la barra de direcciones
            de nuestro navegador) 
            */
            location.hash = "#gracias";
            $form.reset(); //resetea el formulario
        })
        .catch(err => {
            console.log(err);
            let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
            $response.querySelector("h3").innerHTML = 
            `Error ${err.status}: ${message}`;
        })//Se ejecuta independientemente de que se cumpla o se rechaze la promesa.
        .finally(() => {
            $loader.classList.add("none");
            setTimeout(() => {
                location.hash ="#close";
            }, 3000);
        })
    })
})(document);