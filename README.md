![photo_2024-03-04_11-52-30](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/be61ef7c-6bee-424b-b5f4-44ddf8459d29)

## Reglas de Inicio
Aquí puedes descargarte las reglas de inicio de El Rey del Invierno

[![photo_2024-03-04_11-52-43](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/bafcf743-31bb-4c05-a972-036155787798)](https://shadowlandsgames.com/wp-content/uploads/2024/03/El-Rey-del-Invierno-Guia-de-Inicio.pdf)

## Instalación
Para instalar este módulo en Foundry tienes que usar el siguiente Manifest en el menú de módulos como se muestra en la imagen: https://github.com/pedrobaringo/el-rey-del-invierno-csb/releases/latest/download/module.json

![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/d8bdab45-b691-41d0-8b27-4dd8800e642e)

Cuando hayas creado un mundo con el sistema Custom System Builder debes activar este módulo. Al recargar la página aparecerá un mensaje de bienvenida en el chat con un botón que al pulsarlo importará todos los compendios para que tengas las Templates disponibles para empezar a crear tus personajes.

![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/76e4d708-efc9-4a68-b52f-3ecbf84dc7ae)

## Configurar Mensaje de Bienvenida
Al entrar por primera vez con el módulo activo os aparecerá un mensaje de Bienvenida con un link al tutorial. Si quereis que os vuelva a salir el mensaje cuando volvais a entrar podeis ir a Configuración -> El Rey del Invierno (CSB) y marcar la casilla de Mensaje de Bienvenida.

![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/d55a1a2b-4b31-4243-b677-c4f3c718eb39)

## Crear un PJ
Crea un nuevo actor, selecciona la template "PJ_RI_Template" y pulsa el botón de refrescar al lado de la selección de Template.

![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/4e866474-8800-430f-b3f6-d8bd5ec60471)

Ahora podemos empezar a rellenar los datos de la ficha.

### Parte superior
![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/fb817e73-e776-4f57-a8d0-7598aa5c8aa4)

Arriba del todo a la derecha tenemos donde ir apuntando los puntos de evolución. Después tenemos donde apuntar el Concepto del personaje y su Linaje.

Justo debajo tenemos el marcador de Hito, donde podemos ir marcando las casillas a medida que vayamos consiguiendo hitos. Ademas podemos hacer una tirada para ver si podemos activar nuestro Poder de Linaje pulsando en el campo Hito. Se tirarán tantos dados como estén marcadas las casillas 1d, 2d, 3d, 4d, 5d.

Finalmente tenemos el campo donde describir el Poder del Linaje al que pertenezca el PJ.

### Pestaña de Capacidades
![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/a576dcb2-f2ca-44a5-a1af-50cbbdff68e8)

En esta pestaña tenemos las capacidades generales y de combate, el listado de idiomas y equipo, las Maestrías de combate que tengamos, los marcadores de Vitalidad e Incapacitación, las armas y protección, un campo donde poner el escudo nobiliario del PJ y el selector para la Iniciativa.

#### Capacidades
Las cinco capacidades generales están marcadas en Gris. Se puede modificar el valor de cada una en el circulo blanco y se pueden hacer las tiradas pulsando en el nombre de la capacidad (con bonificador o penalizador pulsando la tecla Mayus). Tambien tenemos los espacios para añadir las Especialidades debajo de cada una.

Las dos Capacidades de Combate funcionan igual, pero no tienen especialidades, en su lugar se les pueden añadir Maestrías. Para ello solo es necesario haber creado un objeto con la template de Maestrías y arrastrarlo a la ficha del Personaje (se explica más adelante como crear maestrías).

#### Idiomas
Pulsando en el icono + se añade un campo donde podemos escribir uno de los idiomas que habla el PJ, podemos añadir tantos como queramos pulsando el icono +.

#### Equipo
Pulsando en el icono + se añade un campo donde podemos escribir el elemento de equipo que lleva el PJ, podemos añadir tantos como queramos pulsando el icono +.

#### Escudo nobiliario
Si pasamos el ratón por encima del escudo nobiliario veremos como aparece el icono de editar, para cambiarlo solo tenemos que hacer click en la imagen en el diálogo que nos aparecerá, hacer click en la barra de arriba de imagen y cambiar la ruta por la ruta donde tengamos la imagen del escudo que queremos poner.

![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/45aacd65-a5ff-4b68-99af-dd343c3f26bb) ![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/ec1f843e-ae86-4015-aa89-cdf12c261147)

#### Marcadores de Vitalidad e Incapacitación
En estos marcadores podemos ir marcando el daño que vamos recibiendo.

En el caso de la Vitalidad, marcar casillas nos limitará el numero de dados que podemos tirar para las capacidades y magia (esta ya implementado). El máximo de dados que podremos tirar será el valor de la casilla mas alta sin marcar.

En el caso de la Incapacitación hay dos casillas en gris porque con algunas mejoras (que apareceran en el libro básico) se puede aumentar la incapacitación que es capaz de aguantar un PJ.

#### Armas
![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/2921dc95-4ff7-4bbe-85c0-b9ddaecac510)

Para añadir armas a nuestro PJ solo tenemos que arrastrar las armas que hayamos creado como objetos con la Template de Armas a la ficha de PJ (se explica más adelante como crearlas).

Si clickamos en el nombre podremos editar sus campos y si clickamos en el Daño base se producirá la tirada de daño del arma.

#### Protección
![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/1dab4990-e990-4849-8645-78663541a5da)

En la fila superior podemos añadir la armadura que llevemos, seleccionar de que tipo es, si es necesario cierto nivel de Vigor para llevarla, cuantos dados de daño reduce y si tiene algun valor de resistencia. En caso que tenga resistencia, al lado apareceran las casillas para marcar la incapacitación que puede soportar.

En la fila inferior podemos añadir el escudo si tuviese. En el tipo de armadura solo se puede seleccionar Escudo y no tiene el campo de Resistencia.

#### Selector de Iniciativa
![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/48bebb7c-d9a0-4d2b-92bd-804045e1c1ad)

Justo debajo de la protección tenemos un selector que determinará el valor de Iniciativa que vamos a tener. Depende principalmente del tipo de arma que vayamos a usar o la acción que vayamos a hacer y se calcula automaticamente.

### Pestaña de Magia
![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/b2d840fd-d10e-440e-bcbe-1935a2354c05)

En esta pestaña se encuentra todo lo referente a la magia.

#### Magia y Dominio de la Magia
En estos dos apartados puedes seleccionar que tipo de Magia usas y que dominio tienes. En caso que el Dominio sea Practicante, a las tiradas de magia se aplicará la limitación de Magnitud máxima 3 automaticamente.

#### Acciones mágicas y Objetivos
En el apartado de Acciones mágicas puedes asignar un valor a cada acción escribiendo el numero en el circulo blanco.

En el apartado de Objetivos puedes añadir pulsando el icono + tantos objetivos como necesites, escribir el nombre del objetivo y el valor y hacer las tiradas pulsando en el icono de los dados.

Cuando hagas una tirada pulsando en los dados del Objetivo elegido te parecerá un diálogo donde seleccionar que Acción mágica usar. Se tirarán tantos dados como la suma de Acción mágica y Objetivo.

![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/ca54543d-f236-4c75-bf21-024cb92763f6)

#### Cansancio
En este marcador podras ir tachando las casillas a medida que vayas recibiendo cansancio mágico (uno por cada 5 o 6 que saques en las tiradas de magia si eres Practicante, uno por cada 6 si eres Erudito o por otras acciones que tomes como se describe en la Guia de Inicio)

#### Magnitudes de la Magia
Esta tabla es solo informativa de las Magnitudes necesarias según las circunstancias.

#### Grimorio Personal
En este apartado puedes añadir Conjuros personalizados pulsando el icono +.

Puedes darle un nombre al conjuro y tendrás que seleccionar una Acción y un Objetivo en los desplegables, lo cual determinará el valor de la tirada. En la descripción puedes describir el efecto que tiene ese conjuro. Pulsando en Tirada se tiran los dados del Conjuro.

### Pestaña de Trasfondo y Notas
![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/1c4241ad-98b8-47ba-8290-1238b3e9604b)

En esta pestaña puedes añadir la descripción del personaje, su trasfondo y las notas que quieras.

## Crear un PNJ
Crea un nuevo actor, selecciona la template "PNJ_RI_Template" y pulsa el botón de refrescar al lado de la selección de Template.

![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/32485fa3-af90-494d-a2a3-09741bee45e9)

Ahora podemos empezar a rellenar los datos de la ficha.

### Parte superior
![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/4e8644f3-4bf3-4422-91a2-a9ce0247cade)

Arriba tenemos donde apuntar el Concepto del personaje.

Justo debajo tenemos el Multiplicador de Vitalidad. Si seleccionamos un valor se mostrarán en Vitalidad las casillas correspondientes.

Debajo de esto tenemos el valor de Masivo y el de Incapacitación. El numero que pongamos en incapacitación será el numero de casillas que tendrá. En general deberia ser uno concreto según la vitalidad (si tienes un multiplicador de vitalidad x1,5 la incapacitación deberian ser 6 casillas (4 es lo normal)), pero los he puesto independientes para dar mayor flexibilidad.

#### Capacidades
![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/6873cf30-c3ec-4344-860b-ff02fedcfbec)

Las dos capacidades generales están marcadas en Gris. Se puede modificar el valor de cada una en el circulo blanco y se pueden hacer las tiradas pulsando en el nombre de la capacidad (con bonificador o penalizador pulsando la tecla Mayus). Tambien tenemos los espacios para añadir las Especialidades debajo de cada una.

Las dos Capacidades de Combate funcionan igual, pero no tienen especialidades, en su lugar se les pueden añadir Maestrías. Para ello solo es necesario haber creado un objeto con la template de Maestrías y arrastrarlo a la ficha del Personaje (se explica más adelante como crear maestrías).

#### Armas
![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/f5030f3a-91b1-4099-a6c6-23276067e392)

Para añadir armas a nuestro PNJ solo tenemos que arrastrar las armas que hayamos creado como objetos con la Template de Armas a la ficha de PNJ (se explica más adelante como crearlas).

Si clickamos en el nombre podremos editar sus campos y si clickamos en el Daño base se producirá la tirada de daño del arma.

#### Protección
![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/9c7df932-7a34-47c1-aecd-e0a7ed978dd6)

En la fila superior podemos añadir la armadura que llevemos, seleccionar de que tipo es, si es necesario cierto nivel de Vigor para llevarla, cuantos dados de daño reduce y si tiene algun valor de resistencia. En caso que tenga resistencia, al lado apareceran las casillas para marcar la incapacitación que puede soportar.

En la fila inferior podemos añadir el escudo si tuviese. En el tipo de armadura solo se puede seleccionar Escudo y no tiene el campo de Resistencia.

#### Selector de Iniciativa
![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/542fd2c5-fa41-4aad-b494-07bdc720ca0e)

Justo debajo de la protección tenemos un selector que determinará el valor de Iniciativa que vamos a tener. Depende principalmente del tipo de arma que vayamos a usar o la acción que vayamos a hacer y se calcula automaticamente.

#### Marcadores de Vitalidad e Incapacitación
![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/ac5f98e0-0abe-4e7a-a2c1-4b2cbabdff4e)

En estos marcadores podemos ir marcando el daño que va recibiendo el PNJ. Según el Multiplicador de Vitalidad y el valor de Incapacitación el numero de casillas será distinto.

En el caso de la Vitalidad, marcar casillas nos limitará el numero de dados que podemos tirar para las capacidades y magia (esta ya implementado). El máximo de dados que podremos tirar será el valor de la casilla mas alta sin marcar.

En el caso de la Incapacitación hay dos casillas en gris porque con algunas mejoras (que apareceran en el libro básico) se puede aumentar la incapacitación que es capaz de aguantar un PJ.

#### Descripción
En este apartado podemos describir el PNJ o anotar reglas especiales que pueda tener.

## Tiradas
Para hacer una tirada solo tienes que pulsar en el icono de los dados de la capacidad correspondiente o su nombre (en el caso de objetivos en Magia solo en el Icono).

![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/af125b94-16d0-406d-b3bf-8525020d9836)

Si con la tirada hay dados que no hayan tenido éxito, te aparecerá un botón en el mensaje del Chat preguntando si tienes una Especialidad. Si lo pulsas se tirarán los dados que no hayan tenido éxito y se sumaran los éxitos que se obtengan.

![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/684a3a27-0ea3-478c-9085-51b8d221217d) ![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/b6daca70-1257-4678-8a2f-f1dad36db43e)


Si quereis hacer tiradas con bonificadores o penalizadores debeis pulsar la tecla Mayus de vuestro teclado mientras haceis click en la capacidad. Entonces se os abrirá un diálogo en el que podeis añadir o sustraer los dados de bonificación o penalización.

![image](https://github.com/pedrobaringo/el-rey-del-invierno-csb/assets/148097688/bfdc6dfc-a29c-45d3-8035-23046b87ef81)
