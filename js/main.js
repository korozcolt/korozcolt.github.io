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