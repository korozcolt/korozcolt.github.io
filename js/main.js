document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, {
            threshold: 0.1
        }
    );

    fadeElements.forEach((element) => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const reposContainer = document.getElementById("repos");
    const prevPageButton = document.getElementById("prevPage");
    const nextPageButton = document.getElementById("nextPage");

    let currentPage = 1;
    const reposPerPage = 6;
    let allRepos = [];

    // Función para obtener repositorios
    const fetchRepos = async () => {
        try {
            const response = await fetch("https://api.github.com/users/korozcolt/repos?sort=updated&direction=desc");
            allRepos = await response.json();
            renderRepos(currentPage);
        } catch (error) {
            console.error("Error al obtener los repositorios:", error);
            reposContainer.innerHTML = "<p class='text-gray-400'>Error al cargar los repositorios.</p>";
        }
    };

    // Función para renderizar repositorios según la página
    const renderRepos = (page) => {
        const startIndex = (page - 1) * reposPerPage;
        const endIndex = startIndex + reposPerPage;
        const reposToShow = allRepos.slice(startIndex, endIndex);

        reposContainer.innerHTML = "";

        if (reposToShow.length > 0) {
            reposToShow.forEach(repo => {
                const repoCard = document.createElement("div");
                repoCard.className = "bg-gray-900 p-6 rounded-lg shadow-lg";

                repoCard.innerHTML = `
                    <h3 class="text-xl font-semibold">${repo.name}</h3>
                    <p class="text-gray-400 mt-2">${repo.description || "Sin descripción"}</p>
                    <div class="mt-4 flex items-center space-x-4">
                        <a href="${repo.html_url}" target="_blank" class="text-blue-400 hover:text-blue-300">Ver en GitHub</a>
                        <span class="text-gray-400">${repo.language || "Sin lenguaje"}</span>
                        <span class=>
                    </div>
                `;

                reposContainer.appendChild(repoCard);
            });
        } else {
            reposContainer.innerHTML = "<p class='text-gray-400'>No se encontraron repositorios.</p>";
        }

        // Habilitar o deshabilitar botones de paginación
        prevPageButton.disabled = currentPage === 1;
        nextPageButton.disabled = endIndex >= allRepos.length;
    };

    // Eventos para los botones de paginación
    prevPageButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderRepos(currentPage);
        }
    });

    nextPageButton.addEventListener("click", () => {
        const totalPages = Math.ceil(allRepos.length / reposPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderRepos(currentPage);
        }
    });

    // Iniciar la carga de repositorios
    fetchRepos();
});

document.addEventListener('DOMContentLoaded', () => {
    const experiences = [
        {
            company: "Brandlive",
            role: "Full Stack Engineer",
            period: "febrero de 2023 - Presente (2 años 1 mes)",
            location: "Bogotá, Capital District, Colombia",
            description: "Desarrollo de aplicaciones web con tecnologías modernas",
            details: [
                "Desarrollo frontend con React y TailwindCSS",
                "Backend con Node.js y bases de datos NoSQL",
                "Integración con APIs y servicios externos"
            ]
        },
        {
            company: "Lean Tech",
            role: "Backend Dev",
            period: "abril de 2021 - diciembre de 2022 (1 año 9 meses)",
            location: "Medellín, Antioquia, Colombia",
            description: "Desarrollo de soluciones backend escalables",
            details: [
                "Arquitectura de microservicios",
                "Optimización de bases de datos",
                "Implementación de APIs RESTful"
            ]
        },
        {
            company: "Freelance Software Engineer",
            role: "Desarrollador Independiente",
            period: "enero de 2007 - diciembre de 2020 (14 años)",
            location: "Colombia",
            description: "Desarrollo integral de soluciones web",
            details: [
                "Desarrollo de software web",
                "Backend (Laravel, Nodejs, MongoDB, MySql)",
                "FrontEnd (Angular, React, Flutter, Boostrap, Materialize, Ezqueleton, TailwindCSS, Vue)"
            ]
        },
        {
            company: "Gobernación de Sucre",
            role: "Ingeniero de sistemas",
            period: "mayo de 2019 - diciembre de 2019 (8 meses)",
            location: "Colombia",
            description: "Gestión y control de sistemas informáticos",
            details: [
                "Digitación de información",
                "Control y Supervisión de equipo de digitadores",
                "Control y supervisión de inventario de vacunación",
                "Auditoría a equipos de cómputo"
            ]
        },
        {
            company: "Smart Mobility & Security",
            role: "Ingeniero de proyecto",
            period: "julio de 2018 - abril de 2019 (10 meses)",
            location: "Colombia",
            description: "Gestión de proyectos de infraestructura tecnológica",
            details: [
                "Instalación de servidores",
                "Configuración de equipos de comunicación 3G y 4G",
                "Configuración de equipos controladores semafóricos",
                "Administración de sistema de control semafórico"
            ]
        },
        {
            company: "DANE",
            role: "Ingeniero de sistemas",
            period: "septiembre de 2016 - febrero de 2017 (6 meses)",
            location: "Colombia",
            description: "Gestión de datos estadísticos",
            details: [
                "Manejo de Equipos especializados estadísticos",
                "Backup de información confidencial",
                "Manejo de Tabla y Base de datos de encuestas",
                "Manejo de personal asociado a encuestas"
            ]
        },
        {
            company: "Xiriux Ltda",
            role: "Ingeniero de Desarrollo",
            period: "junio de 2009 - diciembre de 2011 (2 años 7 meses)",
            location: "Colombia",
            description: "Desarrollo de soluciones de seguridad y networking",
            details: [
                "Desarrollo de Firewall (Network Security)",
                "Desarrollo sobre plataforma .NET",
                "Desarrollo DataBase (MySQL, SQL SERVER, Oracle)",
                "Administración de Servidores",
                "Diseño y configuración de MESH (Zonas WIFI)"
            ]
        }
    ];

    const experiencesContainer = document.getElementById('experiences');
    const template = document.getElementById('experienceTemplate');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');
    const pageInfo = document.getElementById('pageInfo');

    let currentPage = 1;
    const itemsPerPage = 6;
    const totalPages = Math.ceil(experiences.length / itemsPerPage);

    function renderExperiences(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const currentExperiences = experiences.slice(start, end);

        experiencesContainer.innerHTML = '';

        currentExperiences.forEach(exp => {
            const clone = template.content.cloneNode(true);
            
            clone.querySelector('h3').textContent = exp.company;
            clone.querySelector('.role').textContent = exp.role;
            clone.querySelector('.period').textContent = exp.period;
            clone.querySelector('.location').textContent = exp.location;
            clone.querySelector('.description').textContent = exp.description;

            const detailsList = clone.querySelector('ul');
            exp.details.forEach(detail => {
                const li = document.createElement('li');
                li.textContent = detail;
                li.className = 'text-sm';
                detailsList.appendChild(li);
            });

            const card = clone.querySelector('.bg-gray-900');
            const toggleBtn = clone.querySelector('.toggle-details');
            const detailsDiv = clone.querySelector('.details');

            toggleBtn.addEventListener('click', () => {
                const isHidden = detailsDiv.classList.contains('hidden');
                detailsDiv.classList.toggle('hidden');
                toggleBtn.textContent = isHidden ? 'Ver menos' : 'Ver más';
                
                if (isHidden) {
                    card.classList.add('ring-2', 'ring-blue-500');
                } else {
                    card.classList.remove('ring-2', 'ring-blue-500');
                }
            });

            experiencesContainer.appendChild(clone);
        });

        pageInfo.textContent = `Página ${page} de ${totalPages}`;
        prevPageBtn.disabled = page === 1;
        nextPageBtn.disabled = page === totalPages;

        if (page === 1) {
            prevPageBtn.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            prevPageBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }

        if (page === totalPages) {
            nextPageBtn.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            nextPageBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    }

    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderExperiences(currentPage);
        }
    });

    nextPageBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderExperiences(currentPage);
        }
    });

    // Renderizar la primera página
    renderExperiences(1);
});