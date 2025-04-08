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
    // Esperamos a que el sistema i18n esté listo
    document.addEventListener('languageChanged', () => {
        initRepositories();
        initExperiences();
    }, { once: true });
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
            reposContainer.innerHTML = `<p class='text-gray-400'>${window.i18n.t('error_loading_repos')}</p>`;
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
                    <p class="text-gray-400 mt-2">${repo.description || window.i18n.t('no_description')}</p>
                    <div class="mt-4 flex items-center space-x-4">
                        <a href="${repo.html_url}" target="_blank" class="text-blue-400 hover:text-blue-300">
                            ${window.i18n.t('view_on_github')}
                        </a>
                        <span class="text-gray-400">${repo.language || window.i18n.t('no_language')}</span>
                    </div>
                `;

                reposContainer.appendChild(repoCard);
            });
        } else {
            reposContainer.innerHTML = `<p class='text-gray-400'>${window.i18n.t('no_repos_found')}</p>`;
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
            key: "brandlive"
        },
        {
            company: "Lean Tech",
            key: "lean_tech"
        },
        {
            company: "Freelance Software Engineer",
            key: "freelance"
        },
        {
            company: "Gobernación de Sucre",
            key: "gobernacion_sucre"
        },
        {
            company: "Smart Mobility & Security",
            key: "smart_mobility"
        },
        {
            company: "DANE",
            key: "dane"
        },
        {
            company: "Xiriux Ltda",
            key: "xiriux"
        }
    ];

    const periods = {
        brandlive: {
            es: "febrero de 2023 - Presente (2 años 1 mes)",
            en: "February 2023 - Present (2 years 1 month)"
        },
        lean_tech: {
            es: "abril de 2021 - diciembre de 2022 (1 año 9 meses)",
            en: "April 2021 - December 2022 (1 year 9 months)"
        },
        freelance: {
            es: "enero de 2007 - diciembre de 2020 (14 años)",
            en: "January 2007 - December 2020 (14 years)"
        },
        gobernacion_sucre: {
            es: "mayo de 2019 - diciembre de 2019 (8 meses)",
            en: "May 2019 - December 2019 (8 months)"
        },
        smart_mobility: {
            es: "julio de 2018 - abril de 2019 (10 meses)",
            en: "July 2018 - April 2019 (10 months)"
        },
        dane: {
            es: "septiembre de 2016 - febrero de 2017 (6 meses)",
            en: "September 2016 - February 2017 (6 months)"
        },
        xiriux: {
            es: "junio de 2009 - diciembre de 2011 (2 años 7 meses)",
            en: "June 2009 - December 2011 (2 years 7 months)"
        }
    };

    const locations = {
        brandlive: {
            es: "Bogotá, Capital District, Colombia",
            en: "Bogotá, Capital District, Colombia"
        },
        lean_tech: {
            es: "Medellín, Antioquia, Colombia",
            en: "Medellín, Antioquia, Colombia"
        },
        freelance: {
            es: "Colombia",
            en: "Colombia"
        },
        gobernacion_sucre: {
            es: "Colombia",
            en: "Colombia"
        },
        smart_mobility: {
            es: "Colombia",
            en: "Colombia"
        },
        dane: {
            es: "Colombia",
            en: "Colombia"
        },
        xiriux: {
            es: "Colombia",
            en: "Colombia"
        }
    };

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
        
        // Obtener idioma actual
        const currentLang = window.i18n.currentLanguage;

        currentExperiences.forEach(exp => {
            const clone = template.content.cloneNode(true);
            
            clone.querySelector('h3').textContent = exp.company;
            clone.querySelector('.role').textContent = window.i18n.t(`experiences.${exp.key}.role`);
            clone.querySelector('.period').textContent = periods[exp.key][currentLang];
            clone.querySelector('.location').textContent = locations[exp.key][currentLang];
            clone.querySelector('.description').textContent = window.i18n.t(`experiences.${exp.key}.description`);

            const detailsList = clone.querySelector('ul');
            // Usamos los detalles del JSON, si no están disponibles, dejamos una lista vacía
            const details = window.i18n.translations[currentLang]?.experiences?.[exp.key]?.details || [];
            
            details.forEach(detail => {
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
                    window.i18n.t('view_less') : 
                    window.i18n.t('view_more');
                
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

        pageInfo.textContent = `${window.i18n.t('page')} ${page} ${window.i18n.t('of')} ${totalPages}`;
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

// Escuchar cambios de idioma desde i18n.js
document.addEventListener('languageChanged', () => {
    // Volver a renderizar las experiencias con el nuevo idioma
    const experiencesContainer = document.getElementById('experiences');
    if (experiencesContainer) {
        initExperiences();
    }
    
    // Volver a renderizar los repositorios para actualizar textos
    initRepositories();
});