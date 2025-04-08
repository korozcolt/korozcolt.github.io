// main.js - Funcionalidad principal del portfolio

// Configuración inicial
document.addEventListener("DOMContentLoaded", () => {
    // Efectos de fade-in al hacer scroll
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

    // Inicializar repositorios y experiencias
    initRepositories();
    initExperiences();
});

// Función para inicializar la sección de repositorios
function initRepositories() {
    const reposContainer = document.getElementById("repos");
    const prevPageButton = document.getElementById("prevPage");
    const nextPageButton = document.getElementById("nextPage");

    let currentPage = 1;
    const reposPerPage = 6;
    let allRepos = [];

    // Función para obtener repositorios de GitHub
    const fetchRepos = async () => {
        try {
            const response = await fetch("https://api.github.com/users/korozcolt/repos?sort=updated&direction=desc");
            allRepos = await response.json();
            renderRepos(currentPage);
        } catch (error) {
            console.error("Error al obtener los repositorios:", error);
            reposContainer.innerHTML = `<p class='text-gray-400'>${translations[currentLanguage]['error_loading_repos'] || 'Error loading repositories'}</p>`;
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
                repoCard.className = "bg-gray-900 p-6 rounded-lg shadow-lg repo-card";

                repoCard.innerHTML = `
                    <h3 class="text-xl font-semibold">${repo.name}</h3>
                    <p class="text-gray-400 mt-2">${repo.description || translations[currentLanguage]['no_description'] || 'No description'}</p>
                    <div class="mt-4 flex items-center space-x-4">
                        <a href="${repo.html_url}" target="_blank" class="text-blue-400 hover:text-blue-300">
                            ${translations[currentLanguage]['view_on_github'] || 'View on GitHub'}
                        </a>
                        <span class="text-gray-400">${repo.language || translations[currentLanguage]['no_language'] || 'No language specified'}</span>
                    </div>
                `;

                reposContainer.appendChild(repoCard);
            });
        } else {
            reposContainer.innerHTML = `<p class='text-gray-400'>${translations[currentLanguage]['no_repos_found'] || 'No repositories found'}</p>`;
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
}

// Función para inicializar la sección de experiencias
function initExperiences() {
    const experiences = [
        {
            company: "Brandlive",
            role: {
                es: "Ingeniero Full Stack",
                en: "Full Stack Engineer"
            },
            period: {
                es: "febrero de 2023 - Presente (2 años 1 mes)",
                en: "February 2023 - Present (2 years 1 month)"
            },
            location: {
                es: "Bogotá, Capital District, Colombia",
                en: "Bogotá, Capital District, Colombia"
            },
            description: {
                es: "Desarrollo de aplicaciones web con tecnologías modernas",
                en: "Web application development with modern technologies"
            },
            details: {
                es: [
                    "Desarrollo frontend con React y TailwindCSS",
                    "Backend con Node.js y bases de datos NoSQL",
                    "Integración con APIs y servicios externos"
                ],
                en: [
                    "Frontend development with React and TailwindCSS",
                    "Backend with Node.js and NoSQL databases",
                    "Integration with APIs and external services"
                ]
            }
        },
        {
            company: "Lean Tech",
            role: {
                es: "Desarrollador Backend",
                en: "Backend Developer"
            },
            period: {
                es: "abril de 2021 - diciembre de 2022 (1 año 9 meses)",
                en: "April 2021 - December 2022 (1 year 9 months)"
            },
            location: {
                es: "Medellín, Antioquia, Colombia",
                en: "Medellín, Antioquia, Colombia"
            },
            description: {
                es: "Desarrollo de soluciones backend escalables",
                en: "Development of scalable backend solutions"
            },
            details: {
                es: [
                    "Arquitectura de microservicios",
                    "Optimización de bases de datos",
                    "Implementación de APIs RESTful"
                ],
                en: [
                    "Microservices architecture",
                    "Database optimization",
                    "RESTful API implementation"
                ]
            }
        },
        {
            company: "Freelance Software Engineer",
            role: {
                es: "Desarrollador Independiente",
                en: "Independent Developer"
            },
            period: {
                es: "enero de 2007 - diciembre de 2020 (14 años)",
                en: "January 2007 - December 2020 (14 years)"
            },
            location: {
                es: "Colombia",
                en: "Colombia"
            },
            description: {
                es: "Desarrollo integral de soluciones web",
                en: "Comprehensive web solutions development"
            },
            details: {
                es: [
                    "Desarrollo de software web",
                    "Backend (Laravel, Nodejs, MongoDB, MySql)",
                    "FrontEnd (Angular, React, Flutter, Boostrap, Materialize, Ezqueleton, TailwindCSS, Vue)"
                ],
                en: [
                    "Web software development",
                    "Backend (Laravel, Nodejs, MongoDB, MySql)",
                    "FrontEnd (Angular, React, Flutter, Boostrap, Materialize, Ezqueleton, TailwindCSS, Vue)"
                ]
            }
        },
        {
            company: "Gobernación de Sucre",
            role: {
                es: "Ingeniero de sistemas",
                en: "Systems Engineer"
            },
            period: {
                es: "mayo de 2019 - diciembre de 2019 (8 meses)",
                en: "May 2019 - December 2019 (8 months)"
            },
            location: {
                es: "Colombia",
                en: "Colombia"
            },
            description: {
                es: "Gestión y control de sistemas informáticos",
                en: "Management and control of computer systems"
            },
            details: {
                es: [
                    "Digitación de información",
                    "Control y Supervisión de equipo de digitadores",
                    "Control y supervisión de inventario de vacunación",
                    "Auditoría a equipos de cómputo"
                ],
                en: [
                    "Data entry",
                    "Control and supervision of data entry team",
                    "Control and supervision of vaccination inventory",
                    "Computer equipment audit"
                ]
            }
        },
        {
            company: "Smart Mobility & Security",
            role: {
                es: "Ingeniero de proyecto",
                en: "Project Engineer"
            },
            period: {
                es: "julio de 2018 - abril de 2019 (10 meses)",
                en: "July 2018 - April 2019 (10 months)"
            },
            location: {
                es: "Colombia",
                en: "Colombia"
            },
            description: {
                es: "Gestión de proyectos de infraestructura tecnológica",
                en: "Technological infrastructure project management"
            },
            details: {
                es: [
                    "Instalación de servidores",
                    "Configuración de equipos de comunicación 3G y 4G",
                    "Configuración de equipos controladores semafóricos",
                    "Administración de sistema de control semafórico"
                ],
                en: [
                    "Server installation",
                    "3G and 4G communication equipment configuration",
                    "Traffic light controller equipment configuration",
                    "Traffic light control system administration"
                ]
            }
        },
        {
            company: "DANE",
            role: {
                es: "Ingeniero de sistemas",
                en: "Systems Engineer"
            },
            period: {
                es: "septiembre de 2016 - febrero de 2017 (6 meses)",
                en: "September 2016 - February 2017 (6 months)"
            },
            location: {
                es: "Colombia",
                en: "Colombia"
            },
            description: {
                es: "Gestión de datos estadísticos",
                en: "Statistical data management"
            },
            details: {
                es: [
                    "Manejo de Equipos especializados estadísticos",
                    "Backup de información confidencial",
                    "Manejo de Tabla y Base de datos de encuestas",
                    "Manejo de personal asociado a encuestas"
                ],
                en: [
                    "Management of specialized statistical equipment",
                    "Confidential information backup",
                    "Survey table and database management",
                    "Survey-associated personnel management"
                ]
            }
        },
        {
            company: "Xiriux Ltda",
            role: {
                es: "Ingeniero de Desarrollo",
                en: "Development Engineer"
            },
            period: {
                es: "junio de 2009 - diciembre de 2011 (2 años 7 meses)",
                en: "June 2009 - December 2011 (2 years 7 months)"
            },
            location: {
                es: "Colombia",
                en: "Colombia"
            },
            description: {
                es: "Desarrollo de soluciones de seguridad y networking",
                en: "Security and networking solutions development"
            },
            details: {
                es: [
                    "Desarrollo de Firewall (Network Security)",
                    "Desarrollo sobre plataforma .NET",
                    "Desarrollo DataBase (MySQL, SQL SERVER, Oracle)",
                    "Administración de Servidores",
                    "Diseño y configuración de MESH (Zonas WIFI)"
                ],
                en: [
                    "Firewall development (Network Security)",
                    "Development on .NET platform",
                    "Database development (MySQL, SQL SERVER, Oracle)",
                    "Server administration",
                    "MESH design and configuration (WIFI Zones)"
                ]
            }
        }
    ];

    const experiencesContainer = document.getElementById('experiences');
    const template = document.getElementById('experienceTemplate');
    const prevPageBtn = document.getElementById('prevPageExp');
    const nextPageBtn = document.getElementById('nextPageExp');
    const pageInfo = document.getElementById('pageInfo');

    let currentPage = 1;
    const itemsPerPage = 6;
    const totalPages = Math.ceil(experiences.length / itemsPerPage);

    // Función para renderizar experiencias
    async function renderExperiences(page) {
        const container = document.getElementById('experiences');
        container.classList.add('page-exit');
        
        await new Promise(resolve => setTimeout(resolve, 300));
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const currentExperiences = experiences.slice(start, end);

        experiencesContainer.innerHTML = '';

        currentExperiences.forEach(exp => {
            const clone = template.content.cloneNode(true);
            
            clone.querySelector('h3').textContent = exp.company;
            clone.querySelector('.role').textContent = exp.role[currentLanguage];
            clone.querySelector('.period').textContent = exp.period[currentLanguage];
            clone.querySelector('.location').textContent = exp.location[currentLanguage];
            clone.querySelector('.description').textContent = exp.description[currentLanguage];

            const detailsList = clone.querySelector('ul');
            exp.details[currentLanguage].forEach(detail => {
                const li = document.createElement('li');
                li.textContent = detail;
                li.className = 'text-sm';
                detailsList.appendChild(li);
            });

            const card = clone.querySelector('.bg-gray-900');
            const toggleBtn = clone.querySelector('.toggle-details');
            const detailsDiv = clone.querySelector('.details');

            toggleBtn.addEventListener('click', () => {
                const isHidden = !detailsDiv.classList.contains('visible');
                detailsDiv.classList.toggle('visible');
                toggleBtn.textContent = isHidden ? 
                    translations[currentLanguage]['view_less'] : 
                    translations[currentLanguage]['view_more'];
                
                if (isHidden) {
                    card.classList.add('ring-2', 'ring-blue-500');
                } else {
                    card.classList.remove('ring-2', 'ring-blue-500');
                }
            });

            experiencesContainer.appendChild(clone);
        
            setTimeout(() => {
                container.classList.remove('page-exit');
                container.classList.add('page-enter');
                requestAnimationFrame(() => {
                    container.classList.remove('page-enter');
                });
            }, 50);
        });

        pageInfo.textContent = `${translations[currentLanguage]['page'] || 'Page'} ${page} ${translations[currentLanguage]['of'] || 'of'} ${totalPages}`;
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

    // Event listeners para paginación
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
}

// Variable global para el idioma actual (se sincroniza con i18n.js)
let currentLanguage = 'es';

// Escuchar cambios de idioma desde i18n.js
document.addEventListener('languageChanged', (e) => {
    currentLanguage = e.detail.language;
    // Volver a renderizar las experiencias con el nuevo idioma
    const experiencesContainer = document.getElementById('experiences');
    if (experiencesContainer) {
        const currentPage = 1; // Puedes implementar lógica para mantener la página actual
        initExperiences();
    }
    
    // Volver a renderizar los repositorios para actualizar textos
    initRepositories();
});