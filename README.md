# 🚀 Portafolio de Alejandro León

![Portada del Portafolio](https://rizdlhdrzrznnewxcdxr.supabase.co/storage/v1/object/public/imagenes//image.png) 

*Portafolio profesional desarrollado con tecnologías modernas*

## ✨ Características principales
- **Diseño moderno**
- **Visualización interactiva** 
- **Diseño responsivo**
- **Animaciones fluidas** 

## 🛠️ Tecnologías utilizadas

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)

## 📁 Estructura del proyecto
```plaintext
📁 PORTAFOLIO WEB
│  
├── 📂 .vscode  
├── 📂 backend  
├── 📂 database
│   ├── 📄 estudios.js
├── 📂 frontend
├── 📄 .gitignore  
├── 📄 README.md
```


### 📂 Estructura del frontend

```plaintext
📁 FRONTEND
│  
├── 📂 .astro  
├── 📂 .vscode  
├── 📂 node_modules  
├── 📂 public  
├── 📂 src  
│   ├── 📂 assets  
│   ├── 📂 components  
│   ├── 📂 layouts  
│   ├── 📂 pages  
│   ├── 📂 styles  
│   ├── 📂 utils  
│   │   ├── 📄 estudios.js  
│   │   ├── particulares.js  
│   │   ├── perfil.js  
│   │   ├── proyectos.js  
│   │   ├── tecnologias.js  
│  
├── 📄 .gitignore  
├── 📄 astro.config.mjs  
├── 📄 package.json  
├── 📄 pnpm-lock.yaml  
├── 📄 README.md
```




### 📂 Estructura del backend

```plaintext
# Estructura de Carpetas

📂 backend/
│
├── 📂 .vscode/
├── 📂 node_modules/
├── 📂 src/
│   ├── 📂 config/
│   ├── 📂 controllers/
│   ├── 📂 models/
│   ├── 📂 routes/
│   ├── 📂 services/
│   ├── 📂 utils/
├── 📜 app.js
├── 📜 .env
├── 📜 .gitignore
├── 📜 package.json
├── 📜 package-lock.json
├── 📜 server.js
```

## 📌 Documentación de la API

### 📝 Descripción
Esta API permite enviar y recibir mensajes a través del endpoint `/api/mensaje`. Se utiliza para gestionar la comunicación entre usuarios y almacenar los mensajes en la base de datos.

### 🌍 Endpoint
#### `POST /api/mensaje`
**Descripción:** Permite enviar un mensaje y almacenarlo en la base de datos.  
**Parámetros:**  
- `name` (string, requerido) → Nombre del remitente  
- `email` (string, requerido) → Correo electrónico del remitente  
- `message` (string, requerido) → Contenido del mensaje  

**Ejemplo de solicitud:**
```json
{
  "name": "Pedro Alejandro",
  "email": "pedro@example.com",
  "message": "Me gustaría saber más sobre tus servicios."
}
```


## 🌍 Variables de Entorno

```env
# Puerto en el que se ejecutará el servidor
PORT=3000

# 🔗 Configuración de la base de datos PostgreSQL
DB_USER=postgres       # Usuario de la base de datos
DB_HOST=localhost      # Host donde se encuentra la base de datos
DB_NAME=portafolio     # Nombre de la base de datos
DB_PASSWORD=           # Contraseña de acceso a la base de datos
DB_PORT=5432          # Puerto de conexión con PostgreSQL

# ✉️ Credenciales de NodeMailer para envío de correos
EMAIL_USER= alejandroleonpedro7@gmail.com  # Usuario de correo electrónico
EMAIL_PASS=    # Contraseña del correo electrónico (encriptada o de aplicación)
```

## 🚀 Instalación y Configuración

### 🏗️ Requisitos Previos
Antes de comenzar, asegúrate de tener instalados:
- [Node.js](https://nodejs.org/) (con npm)
- [Astro](https://astro.build/) si deseas configurarlo globalmente

## ⚙️ Instalación del Proyecto

1. Clona el repositorio:
   ```bash
   git clone (https://github.com/AlejandroLeon2/Portafolio-Alejandro82.git)
   ```
2. Clona el repositorio:
### Ve al directorio del frontend
```bash
 cd backend/
# Instala las dependencias
npm install

# Configura las variables de entorno en el archivo .env

# Inicia el servidor en modo desarrollo
npm run dev
```
3. Clona el repositorio:
### Ve al directorio del frontend
 ```bash
cd frontend/
# Instala las dependencias de Astro
pnpm install
# Inicia el servidor de desarrollo
pnpm dev
```




