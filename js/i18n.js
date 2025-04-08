// i18n.js - Sistema de internacionalización para el portfolio basado en JSON

// Inicializar objeto en el ámbito global para acceso desde main.js
window.i18n = {
    translations: {},
    currentLanguage: 'es',
    supportedLanguages: ['es', 'en'],
    defaultLanguage: 'es',
    
    // Cargar un archivo de traducción
    async loadTranslation(lang) {
        try {
            const response = await fetch(`locales/${lang}.json`);
            if (!response.ok) {
                throw new Error(`Error al cargar el idioma ${lang}: ${response.status}`);
            }
            const data = await response.json();
            this.translations[lang] = data;
            return data;
        } catch (error) {
            console.error(`Error cargando el idioma ${lang}:`, error);
            // Si falla, intentamos cargar desde el objeto predefinido de fallback
            return this.getFallbackTranslation(lang);
        }
    },
    
    // Traducciones de fallback para cuando no se puede cargar el archivo JSON
    getFallbackTranslation(lang) {
        const fallbacks = {
            'es': {
                "job_title": "Desarrollador Backend",
                "summary_title": "Extracto",
                "error_loading_repos": "Error al cargar los repositorios",
                "no_description": "Sin descripción",
                "no_language": "Sin lenguaje especificado",
                "no_repos_found": "No se encontraron repositorios",
                "view_on_github": "Ver en GitHub",
                "page": "Página",
                "of": "de",
                "view_more": "Ver más",
                "view_less": "Ver menos"
            },
            'en': {
                "job_title": "Backend Developer",
                "summary_title": "Summary",
                "error_loading_repos": "Error loading repositories",
                "no_description": "No description",
                "no_language": "No language specified",
                "no_repos_found": "No repositories found",
                "view_on_github": "View on GitHub", 
                "page": "Page",
                "of": "of",
                "view_more": "View more",
                "view_less": "View less"
            }
        };
        
        return fallbacks[lang] || fallbacks[this.defaultLanguage];
    },
    
    // Obtener una traducción
    t(key, lang = this.currentLanguage) {
        // Si no tenemos el idioma cargado, usamos el fallback
        if (!this.translations[lang]) {
            return this.getFallbackTranslation(lang)[key] || key;
        }
        
        // Soporta claves con notación de puntos, ej: "experiences.brandlive.role"
        if (key.includes('.')) {
            let value = this.translations[lang];
            const parts = key.split('.');
            
            for (const part of parts) {
                if (value && typeof value === 'object' && part in value) {
                    value = value[part];
                } else {
                    return key; // Regresa la clave si no existe en las traducciones
                }
            }
            
            return value;
        }
        
        return this.translations[lang][key] || key;
    },
    
    // Cambiar de idioma
    async changeLanguage(lang) {
        if (!this.supportedLanguages.includes(lang)) {
            console.warn(`El idioma ${lang} no está soportado. Usando ${this.defaultLanguage}.`);
            lang = this.defaultLanguage;
        }
        
        // Si aún no hemos cargado este idioma, lo cargamos
        if (!this.translations[lang]) {
            await this.loadTranslation(lang);
        }
        
        // Actualizar idioma actual
        this.currentLanguage = lang;
        localStorage.setItem('portfolioLanguage', lang);
        
        // Actualizar la interfaz
        this.updateContent();
        
        // Actualizar botones de idioma activo
        document.getElementById('langEs')?.classList.toggle('bg-blue-900', lang === 'es');
        document.getElementById('langEs')?.classList.toggle('bg-gray-800', lang !== 'es');
        document.getElementById('langEn')?.classList.toggle('bg-blue-900', lang === 'en');
        document.getElementById('langEn')?.classList.toggle('bg-gray-800', lang !== 'en');
        
        // Notificar a otros componentes del cambio
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: lang }
        }));
    },
    
    // Actualizar todos los elementos con atributo data-i18n
    updateContent() {
        // Actualizar textos generales
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.t(key);
        });
        
        // Actualizar botones de ver más/menos
        document.querySelectorAll('.toggle-details').forEach(button => {
            const detailsDiv = button.nextElementSibling;
            if (detailsDiv.classList.contains('visible')) {
                button.textContent = this.t('view_less');
            } else {
                button.textContent = this.t('view_more');
            }
        });
    }
};

// Función para generar PDF
function generatePDF() {
    const element = document.body;
    const opt = {
        margin: 10,
        filename: `Kristian_Orozco_CV_${window.i18n.currentLanguage}.pdf`,
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
document.addEventListener('DOMContentLoaded', async () => {
    // Cargar idioma guardado o usar español por defecto
    const savedLanguage = localStorage.getItem('portfolioLanguage') || window.i18n.defaultLanguage;
    
    // Precargar ambos idiomas para evitar problemas de "translations undefined"
    for (const lang of window.i18n.supportedLanguages) {
        await window.i18n.loadTranslation(lang);
    }
    
    // Cambiar al idioma guardado o predeterminado
    await window.i18n.changeLanguage(savedLanguage);
    
    // Configurar botones de idioma
    document.getElementById('langEs')?.addEventListener('click', () => window.i18n.changeLanguage('es'));
    document.getElementById('langEn')?.addEventListener('click', () => window.i18n.changeLanguage('en'));
    
    // Configurar botón de PDF
    document.getElementById('downloadPdf')?.addEventListener('click', generatePDF);
});