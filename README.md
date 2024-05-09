# Eco Quiz APk
Este es un proyecto de **React Native** utilizando **Expo**, **TypeScript** y **Yarn**. 

---
## Comenzando
Estas instrucciones te proporcionarán una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

---
### Prerrequisitos
Para ejecutar este proyecto, necesitarás tener instalado lo siguiente:

- Node.js
- Yarn
- Expo CLI

---
### Instalación
Primero, clona el repositorio:

```bash
git clone https://github.com/whatarelive/apk-eco-quiz.git
```

Luego, instala las dependencias con Yarn:
```bash
cd nombre-del-proyecto
yarn install
```

---
### Ejecución
Para iniciar la aplicación, ejecuta el siguiente comando:

```bash
yarn start
```

Esto abrirá una nueva ventana en tu navegador con el cliente de Expo, donde podrás escanear el código QR con tu dispositivo móvil usando la aplicación Expo Go o ejecutarlo en un emulador.

----
### Estructura del Proyecto
`assets/:` Recursos globales de la aplicacion.  
`src/:` Código fuente de la aplicación.
 - `assets/:` Recursos de imagen locales de la aplicacion.
 - `auth/:` Modulo de autentificacion de la aplicacion.  
 |--> `components/:` Componentes de React pertenecientes al modulo.   
 |--> `screens/:` Pantallas del modulo.
 - `quiz/:` Modulo del Contenido del aplicacion orientado a la jugabilidad.   
 |--> `components/:` Componentes de React pertenecientes al modulo.      
 |--> `screens/:` Pantallas de la aplicación del modulo.  
 |--> `data/:` Data de la aplicacion.    
 |--> `helpers:/` Funciones de busquedad de datos.  
 |--> `hooks:/` Custom Hook creados para el modulo.  
 |--> `styles:/` Estilos globales del modulo.  
 |--> `types:/` Tipos de datos usados en el modulo.
- `router:/` Navegación y rutas de la aplicacion.
- `util:/` Modulo para elementos globales de la aplicacion.   
 |--> `components:/` Componentes de React globales.  
 |--> `hooks:/` Custom Hook globales.  
 |--> `styles:/` Estilos globales de la aplicacion.  
 |--> `themes:/` Configuracion de temas de la aplicacion.

`App.tsx:` Punto de entrada principal de la aplicación.  
`app.json:` Configuración de Expo.  
`tsconfig.json:` Configuración de TypeScript.  
`babel.config.js:` Configuración de Babel.  
`package.json:` Dependencias y scripts del proyecto.

----
### Construido Con
`React Native :`- El framework utilizado.  
`Expo :`- Plataforma de desarrollo universal.  
`TypeScript :` - Lenguaje de programación tipado.