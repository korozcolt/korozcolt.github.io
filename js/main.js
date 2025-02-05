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

    // Función para obtener y mostrar repositorios
    const fetchRepos = async () => {
        try {
            const response = await fetch("https://api.github.com/users/korozcolt/repos?sort=updated&direction=desc");
            const repos = await response.json();

            if (repos.length > 0) {
                repos.forEach(repo => {
                    const repoCard = document.createElement("div");
                    repoCard.className = "bg-gray-900 p-6 rounded-lg shadow-lg";

                    repoCard.innerHTML = `
                        <h3 class="text-xl font-semibold">${repo.name}</h3>
                        <p class="text-gray-400 mt-2">${repo.description || "Sin descripción"}</p>
                        <div class="mt-4 flex items-center space-x-4">
                            <a href="${repo.html_url}" target="_blank" class="text-blue-400 hover:text-blue-300">Ver en GitHub</a>
                            <span class="text-gray-400">${repo.language || "Sin lenguaje"}</span>
                        </div>
                    `;

                    reposContainer.appendChild(repoCard);
                });
            } else {
                reposContainer.innerHTML = "<p class='text-gray-400'>No se encontraron repositorios.</p>";
            }
        } catch (error) {
            console.error("Error al obtener los repositorios:", error);
            reposContainer.innerHTML = "<p class='text-gray-400'>Error al cargar los repositorios.</p>";
        }
    };

    fetchRepos();
});