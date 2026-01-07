# 🌤️ Clima App - Real-Time Weather Tracker

![Screenshot de la Aplicación](ruta-a-tu-imagen-principal.png)
*(Reemplaza esto con una captura de pantalla atractiva de tu interfaz principal)*

## 📖 Introducción / Overview

**[ES]**
Esta aplicación es una solución **Full-Stack** moderna diseñada para ofrecer datos meteorológicos en tiempo real con una experiencia de usuario fluida y robusta.

El objetivo del proyecto es demostrar cómo construir una **Single Page Application (SPA)** escalable, combinando la seguridad y estructura de un backend en **Laravel** con la interactividad y dinamismo de un frontend en **React**, todo ello orquestado sin fisuras mediante **Inertia.js**.

No es solo un buscador de clima; es una implementación de arquitectura de software moderna, gestión de estado y diseño UI avanzado.

**[EN]**
*A modern Full-Stack application designed to deliver real-time meteorological data with a seamless and robust user experience. This project demonstrates building a scalable SPA, combining Laravel's backend security with React's frontend interactivity, orchestrated via Inertia.js.*

---

## ✨ Características Clave / Key Features

Este proyecto va más allá de lo básico, implementando funcionalidades clave para un entorno de producción:

* 🌍 **Datos en Tiempo Real:** Integración precisa con la **XWeather API** para obtener condiciones actuales y pronósticos globales.
* 🔐 **Gestión de Usuarios Segura:** Sistema completo de autenticación (Registro/Login) con encriptación y protección de rutas mediante Middleware de Laravel.
* 💾 **Persistencia y Personalización:** Base de datos **MySQL** integrada para almacenar el historial de búsqueda de cada usuario, ofreciendo una experiencia personalizada.
* 🎨 **UI/UX Moderno (Glassmorphism):** Interfaz diseñada con **Tailwind CSS**, aplicando tendencias de diseño actuales para una navegación limpia y atractiva.
* 🚀 **Arquitectura SPA Monolítica:** Uso de **Inertia.js** para eliminar la necesidad de una API REST compleja, permitiendo que Laravel sirva componentes React directamente.

---

## 🛠️ Stack Tecnológico / Tech Stack

El proyecto está construido sobre un stack robusto y demandado en la industria actual:

| Área | Tecnología | Uso Principal |
| :--- | :--- | :--- |
| **Backend** | ![Laravel](https://img.shields.io/badge/-Laravel-FF2D20?style=flat&logo=laravel&logoColor=white) | Lógica de negocio, enrutamiento, seguridad y ORM (Eloquent). |
| **Frontend** | ![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black) | Construcción de interfaces interactivas y gestión del estado del cliente. |
| **El Puente** | ![Inertia.js](https://img.shields.io/badge/-Inertia.js-9553E9?style=flat&logo=inertia&logoColor=white) | Conexión fluida entre Backend y Frontend (SPA sin API separada). |
| **Estilos** | ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | Diseño rápido, responsivo y altamente personalizable. |
| **Base de Datos**| ![MySQL](https://img.shields.io/badge/-MySQL-4479A1?style=flat&logo=mysql&logoColor=white) | Persistencia de datos de usuarios e historiales. |
| **API Externa**| XWeather API | Fuente de datos meteorológicos. |

---

## 💡 Retos y Aprendizaje / Highlights

El desarrollo de esta aplicación implicó superar retos técnicos significativos:

1.  **Gestión de Estado Compleja en React:** Manejar la información del clima y el historial del usuario de forma eficiente entre componentes.
2.  **Seguridad en Arquitectura Inertia:** Asegurar que las rutas protegidas en Laravel (backend) impidieran efectivamente el renderizado de componentes React (frontend) para usuarios no autenticados.
3.  **Optimización de Consultas:** Diseñar el controlador de Laravel para consumir la API externa de forma eficiente y gestionar los errores de conexión.

---

## 🚀 Instalación y Despliegue / Setup (Para Desarrolladores)

Si deseas ejecutar este proyecto en local, sigue estos pasos:

### Requisitos previos
* PHP >= 8.1
* Composer
* Node.js & NPM

### Pasos

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/AQuinteroDev/Clima.git](https://github.com/AQuinteroDev/Clima.git)
    cd clima
    ```

2.  **Instalar dependencias de Backend (PHP):**
    ```bash
    composer install
    ```

3.  **Instalar dependencias de Frontend (JS):**
    ```bash
    npm install
    ```

4.  **Configurar entorno:**
    ```bash
    cp .env.example .env
    php artisan key:generate
    ```
    *Configura tus credenciales de base de datos y tu API Key de XWeather en el archivo `.env`.*

5.  **Migrar la base de datos:**
    ```bash
    php artisan migrate
    ```

6.  **Compilar assets y ejecutar servidor:**
    ```bash
    npm run dev
    # En otra terminal:
    php artisan serve
    ```
Visita `http://localhost:8000` para ver la aplicación.

---

Desarrollado con 💻 por **[Tu Nombre/AQuinteroDev]**.