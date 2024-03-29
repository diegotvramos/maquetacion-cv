


# Taller de Maquetación: Landing Page tipo Portafolio-CV de Figma a Código HTML y CSS

Es una Landing Page tipo con la temática de curriculum o portafolio,  asi evitas un documento de Word, Ilustrator la ventaja es que con un enlace cualquier persona podra verlo.

Tenemos 3 versiones: para version mobil, tableta y la version descktop,

No vamos a usar ningun framework frontend bootstrap ni tailwind ni ningun otro.

Lo vamos hacer con puro css y html, ojo ya tienes que saber los fundamentos de: flexbox, gridcss, css, html, y algo de js

### Organizando el proyecto y los assets

descarga los assets en esta se encuentra toda la parte de la multimedia

### ¿Como esportar assets desde un documento de Figma?

Cuando ya tienes una referencia visual tu ya puedes extraer los recursos.

Imagin que tu eres el diseñador y el programador ala vez pues figma te ayuda a hacer la parte de diseño (propuesta visual)

si ya tienes una propuesta visual en Figma, puedes hacer click en los iconos y exportarlo en varios formatos

hay otras herramientas para hacer propuestas visuales: adobe xd,  Photoshop, sketech, si te comparten el archivo editable,  tu puedes ir exportando cada uno de estos elementos

### Arquitectura  CSS Minimalista(StyleGuides)

Ahi está toda las guias de estilo que vamos ausar, es decir: los codigigos de colores los tamaños de los textos, antes de pasar esto a css, vamonos a nuestra hoja de estilos Stile.css, (como va ser un proyecto muy sencillo no voy a usar ninguna arquitectura como: Smax) tampocomo voy a usar hipsters como : Sass Less, stylus. Lo voy a maquetar con puro código CSS, me gusta llevar mi minimalismo a la parte profecional (cuando desarrollo proyectos o aplicaciones web), eres libre de utilizar la escritura de selectores que desees.

Cuando estoy haciendo pequeños proyectos que no van a escalar como es que yo llevo acabo la arquitectura CSS , lo primero a hacer:

> mediante comentarios de CSS te voy a ir dividiendo las secciones en las que yo trabajo 

* defino las Custom propertis(variables) 

* ``Reseteo`` 

* `Componente` cada ves que yo vaya a diseñar un componente a nivel de UI voy poniendo los estilos de ese componente, de tal manera que si en ambos proyectos utilizo  un mismo componente, nada más copio y pego de un proyecto a otro el codigo CSS, html y yá. vamos a tener odenado el código por cada uno de los componentes que vayamos desarrollando

* `Utilities` si trabajaste con algunos frameworks como bootstrap,  ves que tienen algunas clases auxiliares que nos permiten "aplicar bordes(cuadrados, redondeados...)" color de letra, fondo, alinear texto,  para mí todas esas son clases de css utilitarias

* `Site Styles` son los codigos de estilos css muy particulares y que dificilmente podria reutilizar en otro, de tal manera que cuando voy pasando de un proyecto a otro todo lo que haya hecho en un primer proyecto de  _Utilities, Components, Reset, Custom-Properties_ los puedo reutilizar

Con esta tecnica conforme vayas haciedo maquetaciones de proyectos te vas a ir creando como un pequeño miniFramework, esta es la forma en la que yo trabajo pequeños proyectos, trato de irme a lo mas minimalista posible, aparte de minimalista que sea DRY( Don't repeat yourself)-> todo lo que ya hiciste una vez, trata de reutilizarlo tantas veces y no te repitas si ya lo tienes simplemente reutiliza.

### Pasando una guia de estilos de Figma a Css

en figma ya tenemos las guias de estilos donde está (la definicion de colores, y tamaños de letra)

![guias](/assets/guia_de_estilos.JPG)

- Empiezo a definir mis ``Custom Properties`` y voy a empesar a respetar el nombre de color que me dieron y estas van a ser vaviables globales y por eso las vamos a definir en el selector **root** (el selector Root es la etiqueta html con mayor jerarquia)

> Es muy importante si trabajas con un diseñador dile que le ponga nombres alucivos a lo que va hacer ese estilo que está diseñando

![tamaño_encabezados](/assets/tamaño_encabezados.JPG)

> El tamaño de los encabezados los voy a convertir a rems(es una unidad relativa) a diferencia del px(que es una unidad absoluta) 

```css
    


/* ***********************Custom Properties************************** */

:root{
    --first-color: #d90062;
    --first-alpha-color: rgba(217, 0, 98, 0.75);
    --second-color: #14192d;
    --second-alpha-color: rgba(20, 25, 45, 0.75);
    --third-color: #501462;
    --third-alpha-color: rgba(80, 20, 100, 0.75);
    --white-color: #fff;
    --gray-light-color: #f3f3f3;
    --gray-color:#ccc;
    --gray-dark-color: #666;
    --black-color: #000;
    --link-color: #509ee3;
    --title-color: #333;
    --text-color: #222;
    --white-alpha-color: rgba(255, 255, 255, 0.5);
    --black-alpha-color: rgba(0, 0, 0, 0.5);
    /*tipografia*/
    --font: "Raleway", sans-serif;
}
/* ***********************Reset************************** */
html{
    /*modelo de caja: vamos hacer que el tamaño de la caja empieze desde el borde
     y no desde el contenido como es por default por que si lo dejamos desde
     el contenido corremos el riesgo de que cuando asignamos paddings o borders
     pues los tamaños no correspondan*/
    box-sizing: border-box;
    font-family: var(--font); /*definimos la familia de fuente*/
    font-size: 16px; /*tamaño de letra del html explicitamente, ¿Por que?  
    por que como voy a estar utilizando la unidad de medida REM (rem es basado
    en el tamaño de la tipografia de la etiqueta html*/

    /*para la transicion*/
    scroll-behavior: smooth;
}




/*con el selector universal todo los elementos su contenido generado dinamicamente
    con after y before que hereden el tamaño de caja y ¿de quien van a heredar
    el tamaño de caja? del nodo principal que es la etiqueta html
*/
*,
*::after,
*::before{
    box-sizing: inherit; /*hereda*/
}
/*por defecto trae 8 pixeles de margin*/
body{
    margin: 0;
    overflow-x: hidden; /*oculta todo lo que desborda en el eje x (horizontal) oculta la barra de desplazamiento*/
    color: var(--text-color);
}

/*Estilo a los links*/
a{
    color: var(--link-color);
    transition: all 0.5s ease-out;
}

a:hover{
    opacity: 0.75;
}

/*todo los encabezados tienen un poco de margen ariba y abajo dependiendo
    del nivel de encabezado van variando los márgenes, lo que me gusta es
    resetar el margen de los encabezados a 0 y ya yo darle la distancia
    adecuada
*/
h1{
    margin: 0;
    font-size: 2rem;
}

h2 {
    margin: 0;
    font-size: 1.5rem;
}
  
h3 {
    margin: 0;
    font-size: 1.25rem;
}
  
h4 {
    margin: 0;
    font-size: 1rem;
}
  
h5 {
    margin: 0;
    font-size: 0.85rem;
}
  
h6 {
    margin: 0;
    font-size: 0.7rem;
}
/*Imagenes Responsivas HACK*/
img{
    max-width: 100%;
    height: auto;
}
/*Estilo a los párrafos*/
p{
    line-height: 1.6rem;
}

/* ***********************Componentes************************** */
/* ***********************Utilities************************** */

.box-shadow-1{
    /* box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25); */
    box-shadow: .25rem .25rem 1rem rgba(0, 0, 0, 0.25);
}

/* ***********************Site Styles************************** */
```

### Reseteo CSS básico

tu me vas a ver escribir un selector dependiendo si es: componenete, reseteo, utilidad , o si ya son estilos particulares, en cada una de estas secciones lo que yo suelo hacer es ordenar de forma alfabetica los elementos salvo el html y el body. A partir del html y el body toda las etiquetas y selectores los voy ordenando de manera alfabética, ¿por que de manera alfabetica? por que imagina que estas en una biblioteca, se hace mas facil encontrar un libro si está ordenado alfabeticamente, es la misma analogia

> buscamos en google fonts la fuente,  no es una buena opcion estar saturando de tantos estilos un archivo tipográfico, es mejor traerse todo los tamaños `FULL AXIS`

> Respetando el orden alfabético exceputuando html y body que son  como las etiquetas padres  de todo el DOM de html entonces apartir de ahi voy de manera alfabética

### Secciones semánticas HTML del proyecto

> Recuerda que al ser una landin page en un solo documento html la parte de la url que va despues del hash va cambiar por el nombre de los ``Id(enlaces)`` como el contenido de la landin page va estar en español pues aunque sean enlaces internos en la url se vaya cambiando en español el nombre de la seccion en la que nos encontramos

### Maquetando mobil Header

Siento que la cabecera de un sitio a otro si podria variar entonces el maquetado como tal del contenedor cabecera lo voy a poner en mi seccion de `/* ***********************Site Styles************************** */` en cambio el menú de amburguesa ese si lo voy a considerar como un componente y lo voy a poner en la seccion de `/* ***********************Componentes************************** */`  


```css
    .header{
    position: fixed; 
    left: 0;
    bottom: 0;

    z-index: 999;
    padding: 1rem; /*1rem + 1rem + 2 rem contenido = 4 rems se hace un centrado perfecto ♥😀*/
    width: 100%;/*ya que perdio sus propiedades de ancho y alto*/
    height: var(--header-height);
    background-color: var(--second-color);
}

.header > .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo a{
    color: var(--first-color);
    font-weight: bold;
    font-size: 2rem;
    text-decoration: none;
}

```

### Maquetando Movil Menú.


El Boton tien un Outline un borde blanquecino. lo cambiamos de color

> La propiedad bottom de CSS establece la posición vertical de un ``elemento posicionado``

el menú de navegacon por default va empesar con una opacidad en 0 y voy hacer uso de una clase auxiliar que con JS se la agregue y active el comportamiento del menú para que pueda mostrarse u ocultarse

La propiedad `pointer-events` es una propiedad en css  que le dice  si activamos o no la reaccion a interactividad del elemento html en cuestion

```css
    .menu-btn{
    outline: thin solid var(--first-color);
    border: 0;
    cursor: pointer;
    background-color: var(--second-color);
}

.menu-btn svg{
    fill: var(--first-color); /*aplicamos relleno a los svg's*/
}


.menu{
    /* display: none; */
    position: fixed;
    left: 0;
    bottom: var(--header-height); /*distancia*/
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--second-color);

    opacity: 0; /*lo volvemos invicible*/
    pointer-events: none;
    transition: opacity 0.5 ease;
}

/*¿Cuando se va activar el menú, esta clase lo vamos a activar con JS?*/
.menu.is-active{
    opacity: 1;
    pointer-events: auto;
}

.menu a{
    padding: 1rem; /*pading de 1 rem a los 4 lados*/
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: var(--first-color);
}

/*en el estado hover invertimos los colores*/
.menu a:hover{
    color: var(--white-color);
    background-color: var(--first-color);
}
```

### Programación Menú movil

voy a utilizar la tecnica de _Funcion anónima autoejecutable_

cada funcionalidad de los componentes que vayamos a programar para este portafolio

Si este sitio fuera un sitio **Multi-page** es decir en lugar de decir vete al _Id Servicios_ se fuera a un archivo externo Servicios.html, pues en el monento que le demos click se va cerrar el documento.

pero como aca tenemos una **Landing-page**(un sitio que está en un solo documento html), pues me navega por las seciones. y no cierra el menú

Entonces yo debo programar una rutina que cuando detecte el click de algun enlace de los que están dentro del elemento menú pues le quite la clase `is-active` para cerar el menú y adicionalmente le regrese la clase none al icono. y le quite  la clase none al elemento de las barras para que el boton del menú regrese.

Como aqui yo puedo tener tantos enlaces como secciones tenga mi Landing page pues yo no voy a estar programando el evento de cada uno de esos menús. Entonces lo que vamosa utilizar aca es la tecnica de delegacion de eventos

```javaScript
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
```
### Maquetando escritorio Header y Menú

El posicionamiento es una mescla entre el posicionamiento `relativo` y el `fijo(fixed)` la diferencia es que se va comportar como elemento fijo a la altura que tu le definas

¿Cual es la ventaja? a diferencia del `position fixed` no tapa el contenido que está definido en el html.

No encuentro el tamaño de contenido, las letras del logo ocupan mas, pense que era por el espaciado que habia entre letras de ariba y abajo pero es algo más.

![contenido](/assets/centrado-header.JPG)

Observa que ahi dice `2rem = 32px` pero el contenido me dice que ocupa 37.6px, claro el tamaño del texto si se respeta, pero el espacio que ocupa no. entonces para obener la altura del __Header__:

>  `37.6 / 16 = 2.35rem` y a esto lo sumamos (0.5rem + 0.5rem = ``1rem``)  ya lo vi en laptop y los valores no cambiaron

> `height: calc(2.35rem + 1rem);`

> **_la clave seria buscar el elemento con mayor tamaño de altura en el contenido del header y hacer calculos_**


 >   ``padding: calc((var(--header-height) - 2.35rem) * 0.5);``


lo multiplique por 0.5 por que dividirlo a 2 no me dio resultados.

> lomejor seria no tener altura difinida en el header sino que se calcule en base al contenido y padding

```css
    .header{
    position: fixed; 
    left: 0;
    bottom: 0;

    z-index: 999;
    /*padding: 1rem; /*1rem + 1rem + 2 rem contenido = 4 rems se hace un centrado perfecto ♥😀*/
    padding: calc((var(--header-height) - 2.35rem) * 0.5); /*2.35rem = 37.6px es el espacio que ocupa la letra del logo*/
    width: 100%;/*ya que perdio sus propiedades de ancho y alto*/
    height: var(--header-height);
    background-color: var(--second-color);
}

.header > .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo a{
    color: var(--first-color);
    font-weight: bold;
    font-size: 2rem;
    line-height: normal;
    text-decoration: none;
}

/* @media screen and (min-width:768px){ */
@media screen and (min-width:48em){
    
}
/* @media screen and (min-width:1024px){ */
@media screen and (min-width:64em){
    .header{
        position: sticky;
        top: 0;
        padding: 0.5rem;
        /*voy a modificar dinamicamente la altura de la cabezera*/
        /* height: calc(var(--header-height) - 0.5rem); */ /*JONMIRCHA*/
        /* height: var(--header-height); */
        /**/
        height: calc(2.35rem + 1rem);
    }
}
```

### Maquetando sección Home y componenetes Hero Image

de la arquitectura CSS: que los nombres de los selectores tengan sentido  y sean semanticos al contenido que estás trabajando cada quien es libre de aplicar la nomenclatura para escribir su codigo CSS 

> no vamos a usar un boton, vamos a usar un enlace.