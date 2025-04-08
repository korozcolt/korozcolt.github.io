// i18n.js - Sistema de internacionalización para el portfolio

const translations = {
    es: {
        // Textos generales
        job_title: "Desarrollador Backend",
        summary_title: "Extracto",
        summary_text: "Desde mucho antes del momento de mi graduación, la experiencia que tenía me permitió iniciar labores de desarrollo de software y mejorar aspectos que me mantuvieran al corriente con nuevas tecnologías.",
        experience_title: "Experiencia Laboral",
        education_title: "Educación",
        education_degree: "Ingeniero de Sistemas",
        skills_title: "Habilidades",
        projects_title: "Proyectos",
        certifications_title: "Certificaciones",
        contact_title: "Contacto",
        contact_info: "Información de Contacto",
        professional_links: "Enlaces Profesionales",
        rights_reserved: "Todos los derechos reservados.",
        previous: "Anterior",
        next: "Siguiente",
        view_more: "Ver más",
        view_less: "Ver menos",
        page: "Página",
        of: "de",
        error_loading_repos: "Error al cargar los repositorios",
        no_description: "Sin descripción",
        no_language: "Sin lenguaje especificado",
        no_repos_found: "No se encontraron repositorios",
        view_on_github: "Ver en GitHub",
        download_cv: "Descargar CV",

        // Textos específicos de experiencias
        brandlive: {
            role: "Ingeniero Full Stack",
            description: "Desarrollo de aplicaciones web con tecnologías modernas",
            details: [
                "Desarrollo frontend con React y TailwindCSS",
                "Backend con Node.js y bases de datos NoSQL",
                "Integración con APIs y servicios externos"
            ]
        },
        lean_tech: {
            role: "Desarrollador Backend",
            description: "Desarrollo de soluciones backend escalables",
            details: [
                "Arquitectura de microservicios",
                "Optimización de bases de datos",
                "Implementación de APIs RESTful"
            ]
        },
        freelance: {
            role: "Desarrollador Independiente",
            description: "Desarrollo integral de soluciones web",
            details: [
                "Desarrollo de software web",
                "Backend (Laravel, Nodejs, MongoDB, MySql)",
                "FrontEnd (Angular, React, Flutter, Boostrap, Materialize, Ezqueleton, TailwindCSS, Vue)"
            ]
        },
        gobernacion_sucre: {
            role: "Ingeniero de sistemas",
            description: "Gestión y control de sistemas informáticos",
            details: [
                "Digitación de información",
                "Control y Supervisión de equipo de digitadores",
                "Control y supervisión de inventario de vacunación",
                "Auditoría a equipos de cómputo"
            ]
        },
        smart_mobility: {
            role: "Ingeniero de proyecto",
            description: "Gestión de proyectos de infraestructura tecnológica",
            details: [
                "Instalación de servidores",
                "Configuración de equipos de comunicación 3G y 4G",
                "Configuración de equipos controladores semafóricos",
                "Administración de sistema de control semafórico"
            ]
        },
        dane: {
            role: "Ingeniero de sistemas",
            description: "Gestión de datos estadísticos",
            details: [
                "Manejo de Equipos especializados estadísticos",
                "Backup de información confidencial",
                "Manejo de Tabla y Base de datos de encuestas",
                "Manejo de personal asociado a encuestas"
            ]
        },
        xiriux: {
            role: "Ingeniero de Desarrollo",
            description: "Desarrollo de soluciones de seguridad y networking",
            details: [
                "Desarrollo de Firewall (Network Security)",
                "Desarrollo sobre plataforma .NET",
                "Desarrollo DataBase (MySQL, SQL SERVER, Oracle)",
                "Administración de Servidores",
                "Diseño y configuración de MESH (Zonas WIFI)"
            ]
        }
    },
    en: {
        // General texts
        job_title: "Backend Developer",
        summary_title: "Summary",
        summary_text: "Long before my graduation, my experience allowed me to start working in software development and improve aspects that kept me up to date with new technologies.",
        experience_title: "Work Experience",
        education_title: "Education",
        education_degree: "Systems Engineer",
        skills_title: "Skills",
        projects_title: "Projects",
        certifications_title: "Certifications",
        contact_title: "Contact",
        contact_info: "Contact Information",
        professional_links: "Professional Links",
        rights_reserved: "All rights reserved.",
        previous: "Previous",
        next: "Next",
        view_more: "View more",
        view_less: "View less",
        page: "Page",
        of: "of",
        error_loading_repos: "Error loading repositories",
        no_description: "No description",
        no_language: "No language specified",
        no_repos_found: "No repositories found",
        view_on_github: "View on GitHub",
        download_cv: "Download CV",

        // Experience specific texts
        brandlive: {
            role: "Full Stack Engineer",
            description: "Web application development with modern technologies",
            details: [
                "Frontend development with React and TailwindCSS",
                "Backend with Node.js and NoSQL databases",
                "Integration with APIs and external services"
            ]
        },
        lean_tech: {
            role: "Backend Developer",
            description: "Development of scalable backend solutions",
            details: [
                "Microservices architecture",
                "Database optimization",
                "RESTful API implementation"
            ]
        },
        freelance: {
            role: "Independent Developer",
            description: "Comprehensive web solutions development",
            details: [
                "Web software development",
                "Backend (Laravel, Nodejs, MongoDB, MySql)",
                "FrontEnd (Angular, React, Flutter, Boostrap, Materialize, Ezqueleton, TailwindCSS, Vue)"
            ]
        },
        gobernacion_sucre: {
            role: "Systems Engineer",
            description: "Management and control of computer systems",
            details: [
                "Data entry",
                "Control and supervision of data entry team",
                "Control and supervision of vaccination inventory",
                "Computer equipment audit"
            ]
        },
        smart_mobility: {
            role: "Project Engineer",
            description: "Technological infrastructure project management",
            details: [
                "Server installation",
                "3G and 4G communication equipment configuration",
                "Traffic light controller equipment configuration",
                "Traffic light control system administration"
            ]
        },
        dane: {
            role: "Systems Engineer",
            description: "Statistical data management",
            details: [
                "Management of specialized statistical equipment",
                "Confidential information backup",
                "Survey table and database management",
                "Survey-associated personnel management"
            ]
        },
        xiriux: {
            role: "Development Engineer",
            description: "Security and networking solutions development",
            details: [
                "Firewall development (Network Security)",
                "Development on .NET platform",
                "Database development (MySQL, SQL SERVER, Oracle)",
                "Server administration",
                "MESH design and configuration (WIFI Zones)"
            ]
        }
    }
};

// Idioma por defecto
let currentLanguage = 'es';

// Función para actualizar el contenido según el idioma
function updateContent() {
    // Actualizar textos generales
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Actualizar botones de ver más/menos
    document.querySelectorAll('.toggle-details').forEach(button => {
        const detailsDiv = button.nextElementSibling;
        if (detailsDiv.classList.contains('visible')) {
            button.textContent = translations[currentLanguage]['view_less'];
        } else {
            button.textContent = translations[currentLanguage]['view_more'];
        }
    });

    // Disparar evento para que main.js sepa que el idioma cambió
    const languageChangedEvent = new CustomEvent('languageChanged', {
        detail: { language: currentLanguage }
    });
    document.dispatchEvent(languageChangedEvent);
}

// Función para cambiar el idioma
function changeLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        updateContent();
        localStorage.setItem('portfolioLanguage', lang);
        
        // Actualizar botones de idioma activo
        document.getElementById('langEs').classList.toggle('bg-blue-900', lang === 'es');
        document.getElementById('langEs').classList.toggle('bg-gray-800', lang !== 'es');
        document.getElementById('langEn').classList.toggle('bg-blue-900', lang === 'en');
        document.getElementById('langEn').classList.toggle('bg-gray-800', lang !== 'en');
    }
}

// Función para generar PDF
function generatePDF() {
    const element = document.body;
    const opt = {
        margin: 10,
        filename: `Kristian_Orozco_CV_${currentLanguage}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2,
            logging: true,
            useCORS: true,
            allowTaint: true
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait' 
        }
    };

    // Ocultar botones de idioma y PDF antes de generar
    const languageButtons = document.querySelector('.fixed');
    if (languageButtons) {
        languageButtons.style.display = 'none';
    }
    
    // Generar PDF
    html2pdf().set(opt).from(element).save().then(() => {
        // Mostrar botones nuevamente después de generar
        if (languageButtons) {
            languageButtons.style.display = 'flex';
        }
    });
}

// Inicialización al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    // Cargar idioma guardado o usar español por defecto
    const savedLanguage = localStorage.getItem('portfolioLanguage') || 'es';
    changeLanguage(savedLanguage);
    
    // Configurar botones de idioma
    document.getElementById('langEs')?.addEventListener('click', () => changeLanguage('es'));
    document.getElementById('langEn')?.addEventListener('click', () => changeLanguage('en'));
    
    // Configurar botón de PDF
    document.getElementById('downloadPdf')?.addEventListener('click', generatePDF);
});

// Exportar para uso en otros archivos si es necesario
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        translations,
        currentLanguage,
        changeLanguage
    };
}