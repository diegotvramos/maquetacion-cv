


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