// Función mejorada para generar un CV en PDF personalizado
function generatePDF() {
    // Crear estructura personalizada para el PDF (diferente al HTML de la página)
    const pdfContent = document.createElement('div');
    pdfContent.className = 'pdf-container';
    pdfContent.style.fontFamily = 'Arial, sans-serif';
    pdfContent.style.color = '#333';
    pdfContent.style.padding = '20px';
    pdfContent.style.maxWidth = '800px';
    pdfContent.style.margin = '0 auto';
    
    // Encabezado con nombre y título
    const header = document.createElement('div');
    header.innerHTML = `
        <h1 style="font-size: 28px; margin-bottom: 5px;">Kristian José Orozco Arroyo</h1>
        <h2 style="font-size: 18px; margin-top: 0; color: #555; font-weight: normal;">
            ${window.i18n.currentLanguage === 'es' ? 
            'Desarrollador Full Stack Senior | Especialista en Backend' : 
            'Senior Full Stack Developer | Backend Specialist'}
        </h2>
    `;
    pdfContent.appendChild(header);
    
    // Información de contacto
    const contactInfo = document.createElement('div');
    contactInfo.style.marginTop = '20px';
    contactInfo.innerHTML = `
        <h3 style="font-size: 16px; margin-bottom: 10px;">${window.i18n.t('contact_info')}</h3>
        <ul style="list-style-type: none; padding-left: 10px; margin-top: 0;">
            <li>● ${window.i18n.currentLanguage === 'es' ? 'Ubicación' : 'Location'}: Sincelejo, Sucre, Colombia</li>
            <li>● ${window.i18n.currentLanguage === 'es' ? 'Teléfono' : 'Phone'}: +57 301 685 9339</li>
            <li>● Email: ing.korozco@gmail.com</li>
            <li>● LinkedIn: <a href="https://linkedin.com/in/kristianorozco">linkedin.com/in/kristianorozco</a></li>
            <li>● ${window.i18n.currentLanguage === 'es' ? 'Portafolio' : 'Portfolio'}: <a href="https://kronnos.co">kronnos.co</a></li>
        </ul>
    `;
    pdfContent.appendChild(contactInfo);
    
    // Perfil profesional
    const profileSection = document.createElement('div');
    profileSection.style.marginTop = '20px';
    profileSection.innerHTML = `
        <h3 style="font-size: 16px; margin-bottom: 10px;">${window.i18n.currentLanguage === 'es' ? 'Perfil Profesional' : 'Professional Profile'}</h3>
        <p style="margin-top: 0; text-align: justify;">
            ${window.i18n.currentLanguage === 'es' ? 
            'Ingeniero de sistemas con 15+ años de experiencia en desarrollo de software web, especializado en backend y arquitecturas escalables. Líder técnico con experiencia en diseño e implementación de soluciones de alto rendimiento. Apasionado por tecnologías emergentes, metodologías ágiles y buenas prácticas de programación.' : 
            'Systems engineer with 15+ years of experience in web software development, specialized in backend and scalable architectures. Technical leader with experience in designing and implementing high-performance solutions. Passionate about emerging technologies, agile methodologies, and programming best practices.'}
        </p>
    `;
    pdfContent.appendChild(profileSection);
    
    // Habilidades técnicas
    const skillsSection = document.createElement('div');
    skillsSection.style.marginTop = '20px';
    skillsSection.innerHTML = `
        <h3 style="font-size: 16px; margin-bottom: 10px;">${window.i18n.currentLanguage === 'es' ? 'Habilidades Técnicas' : 'Technical Skills'}</h3>
        
        <h4 style="font-size: 14px; margin-bottom: 5px; margin-top: 10px;">Backend</h4>
        <ol style="margin-top: 0; padding-left: 25px;">
            <li>${window.i18n.currentLanguage === 'es' ? 'Lenguajes' : 'Languages'}: PHP (Laravel), JavaScript/TypeScript (Node.js), .NET</li>
            <li>${window.i18n.currentLanguage === 'es' ? 'Bases de datos' : 'Databases'}: MongoDB, MySQL, SQL Server, Oracle</li>
            <li>APIs: RESTful, GraphQL</li>
            <li>${window.i18n.currentLanguage === 'es' ? 'Herramientas' : 'Tools'}: Git, Docker, CI/CD, AWS, Jenkins</li>
        </ol>
        
        <h4 style="font-size: 14px; margin-bottom: 5px; margin-top: 10px;">Frontend</h4>
        <ol style="margin-top: 0; padding-left: 25px;">
            <li>Frameworks/${window.i18n.currentLanguage === 'es' ? 'Librerías' : 'Libraries'}: Angular, React, Vue, Flutter</li>
            <li>UI/UX: Bootstrap, Materialize, TailwindCSS, SASS</li>
        </ol>
        
        <h4 style="font-size: 14px; margin-bottom: 5px; margin-top: 10px;">DevOps & ${window.i18n.currentLanguage === 'es' ? 'Sistemas' : 'Systems'}</h4>
        <ol style="margin-top: 0; padding-left: 25px;">
            <li>${window.i18n.currentLanguage === 'es' ? 'Configuración de servidores' : 'Server configuration'}, Kubernetes, Docker</li>
            <li>${window.i18n.currentLanguage === 'es' ? 'Seguridad de redes' : 'Network security'} (Firewall, Network Security)</li>
            <li>${window.i18n.currentLanguage === 'es' ? 'Protocolos de comunicación y cableado estructurado' : 'Communication protocols and structured cabling'}</li>
        </ol>
        
        <h4 style="font-size: 14px; margin-bottom: 5px; margin-top: 10px;">${window.i18n.currentLanguage === 'es' ? 'Metodologías' : 'Methodologies'}</h4>
        <ol style="margin-top: 0; padding-left: 25px;">
            <li>Scrum (${window.i18n.currentLanguage === 'es' ? 'Certificado' : 'Certified'}), ${window.i18n.currentLanguage === 'es' ? 'Desarrollo ágil' : 'Agile development'}, TDD</li>
        </ol>
    `;
    pdfContent.appendChild(skillsSection);
    
    // Experiencia profesional
    const experienceSection = document.createElement('div');
    experienceSection.style.marginTop = '20px';
    experienceSection.style.pageBreakBefore = 'always';
    experienceSection.innerHTML = `
        <h3 style="font-size: 16px; margin-bottom: 10px;">${window.i18n.currentLanguage === 'es' ? 'Experiencia Profesional' : 'Professional Experience'}</h3>
        
        <div style="margin-bottom: 15px;">
            <h4 style="font-size: 14px; margin-bottom: 0; margin-top: 10px;">Brandlive | Full Stack Engineer</h4>
            <p style="font-style: italic; margin-top: 0; margin-bottom: 5px;">${window.i18n.currentLanguage === 'es' ? 'Febrero 2023 - Presente | Bogotá, Colombia' : 'February 2023 - Present | Bogotá, Colombia'}</p>
            <ol style="margin-top: 0; padding-left: 25px;">
                <li>${window.i18n.currentLanguage === 'es' ? 'Optimicé aplicaciones web, mejorando la velocidad de carga en un 30% y reduciendo el uso de recursos en un 25%.' : 'Optimized web applications, improving loading speed by 30% and reducing resource usage by 25%.'}</li>
                <li>${window.i18n.currentLanguage === 'es' ? 'Migré monolitos a microservicios, mejorando escalabilidad y mantenibilidad.' : 'Migrated monoliths to microservices, improving scalability and maintainability.'}</li>
                <li>${window.i18n.currentLanguage === 'es' ? 'Integré APIs de terceros, aumentando la funcionalidad en un 40%.' : 'Integrated third-party APIs, increasing functionality by 40%.'}</li>
            </ol>
        </div>
        
        <div style="margin-bottom: 15px;">
            <h4 style="font-size: 14px; margin-bottom: 0; margin-top: 10px;">Lean Tech | Backend Developer</h4>
            <p style="font-style: italic; margin-top: 0; margin-bottom: 5px;">${window.i18n.currentLanguage === 'es' ? 'Abril 2021 - Diciembre 2022 | Medellín, Colombia' : 'April 2021 - December 2022 | Medellín, Colombia'}</p>
            <ol style="margin-top: 0; padding-left: 25px;">
                <li>${window.i18n.currentLanguage === 'es' ? 'Diseñé APIs RESTful, mejorando la eficiencia de comunicaciones en un 35%.' : 'Designed RESTful APIs, improving communication efficiency by 35%.'}</li>
                <li>${window.i18n.currentLanguage === 'es' ? 'Optimicé consultas a bases de datos, reduciendo tiempos de respuesta en un 50%.' : 'Optimized database queries, reducing response times by 50%.'}</li>
                <li>${window.i18n.currentLanguage === 'es' ? 'Colaboré en equipos ágiles, entregando proyectos un 20% más rápido.' : 'Collaborated in agile teams, delivering projects 20% faster.'}</li>
            </ol>
        </div>
        
        <div style="margin-bottom: 15px;">
            <h4 style="font-size: 14px; margin-bottom: 0; margin-top: 10px;">${window.i18n.currentLanguage === 'es' ? 'Autónomo | Freelance Software Engineer' : 'Freelance Software Engineer'}</h4>
            <p style="font-style: italic; margin-top: 0; margin-bottom: 5px;">${window.i18n.currentLanguage === 'es' ? 'Enero 2007 - Diciembre 2020 | Colombia' : 'January 2007 - December 2020 | Colombia'}</p>
            <ol style="margin-top: 0; padding-left: 25px;">
                <li>${window.i18n.currentLanguage === 'es' ? 'Desarrollé software web para diversos clientes, aumentando la satisfacción en un 90%.' : 'Developed web software for various clients, increasing satisfaction by 90%.'}</li>
                <li>${window.i18n.currentLanguage === 'es' ? 'Implementé soluciones backend con Laravel, Node.js, MongoDB y MySQL.' : 'Implemented backend solutions with Laravel, Node.js, MongoDB, and MySQL.'}</li>
                <li>${window.i18n.currentLanguage === 'es' ? 'Creé interfaces de usuario responsivas con Angular, React, Flutter y Vue.' : 'Created responsive user interfaces with Angular, React, Flutter, and Vue.'}</li>
            </ol>
        </div>
        
        <div style="margin-bottom: 15px;">
            <h4 style="font-size: 14px; margin-bottom: 0; margin-top: 10px;">${window.i18n.currentLanguage === 'es' ? 'Gobernación de Sucre | Ingeniero de Sistemas' : 'Gobernación de Sucre | Systems Engineer'}</h4>
            <p style="font-style: italic; margin-top: 0; margin-bottom: 5px;">${window.i18n.currentLanguage === 'es' ? 'Mayo 2019 - Diciembre 2019 | Colombia' : 'May 2019 - December 2019 | Colombia'}</p>
            <ol style="margin-top: 0; padding-left: 25px;">
                <li>${window.i18n.currentLanguage === 'es' ? 'Audité equipos de cómputo y supervisé digitación, mejorando eficiencia en un 15%.' : 'Audited computer equipment and supervised data entry, improving efficiency by 15%.'}</li>
                <li>${window.i18n.currentLanguage === 'es' ? 'Administré inventario de vacunación con 100% de precisión.' : 'Managed vaccination inventory with 100% accuracy.'}</li>
            </ol>
        </div>
        
        <div style="margin-bottom: 15px;">
            <h4 style="font-size: 14px; margin-bottom: 0; margin-top: 10px;">Smart Mobility & Security | ${window.i18n.currentLanguage === 'es' ? 'Ingeniero de Proyecto' : 'Project Engineer'}</h4>
            <p style="font-style: italic; margin-top: 0; margin-bottom: 5px;">${window.i18n.currentLanguage === 'es' ? 'Julio 2018 - Abril 2019 | Colombia' : 'July 2018 - April 2019 | Colombia'}</p>
            <ol style="margin-top: 0; padding-left: 25px;">
                <li>${window.i18n.currentLanguage === 'es' ? 'Configuré servidores e infraestructura de red, reduciendo tiempos de configuración en un 25%.' : 'Configured servers and network infrastructure, reducing configuration times by 25%.'}</li>
                <li>${window.i18n.currentLanguage === 'es' ? 'Implementé protocolos de comunicación, mejorando eficiencia del sistema en un 30%.' : 'Implemented communication protocols, improving system efficiency by 30%.'}</li>
            </ol>
        </div>
    `;
    pdfContent.appendChild(experienceSection);
    
    // Educación y certificaciones
    const eduCertSection = document.createElement('div');
    eduCertSection.style.marginTop = '20px';
    eduCertSection.style.pageBreakBefore = 'always';
    eduCertSection.innerHTML = `
        <h3 style="font-size: 16px; margin-bottom: 10px;">${window.i18n.currentLanguage === 'es' ? 'Educación' : 'Education'}</h3>
        <div style="margin-bottom: 15px;">
            <h4 style="font-size: 14px; margin-bottom: 0; margin-top: 5px;">${window.i18n.currentLanguage === 'es' ? 'Fundación Universitaria San Martín' : 'San Martín University Foundation'}</h4>
            <p style="font-style: italic; margin-top: 0; margin-bottom: 5px;">${window.i18n.currentLanguage === 'es' ? 'Ingeniero de Sistemas | 2005 - 2011' : 'Systems Engineer | 2005 - 2011'}</p>
        </div>
        
        <h3 style="font-size: 16px; margin-bottom: 10px; margin-top: 20px;">${window.i18n.currentLanguage === 'es' ? 'Certificaciones' : 'Certifications'}</h3>
        <ol style="margin-top: 0; padding-left: 25px;">
            <li>Scrum Fundamentals Certified</li>
            <li>${window.i18n.currentLanguage === 'es' ? 'Desarrollo Seguro de Aplicaciones Web (en progreso)' : 'Secure Web Application Development (in progress)'}</li>
        </ol>
        
        <h3 style="font-size: 16px; margin-bottom: 10px; margin-top: 20px;">Soft Skills</h3>
        <ol style="margin-top: 0; padding-left: 25px;">
            <li>${window.i18n.currentLanguage === 'es' ? 'Liderazgo técnico' : 'Technical leadership'}</li>
            <li>${window.i18n.currentLanguage === 'es' ? 'Comunicación efectiva' : 'Effective communication'}</li>
            <li>${window.i18n.currentLanguage === 'es' ? 'Resolución de problemas' : 'Problem solving'}</li>
            <li>${window.i18n.currentLanguage === 'es' ? 'Trabajo en equipo' : 'Teamwork'}</li>
            <li>${window.i18n.currentLanguage === 'es' ? 'Adaptabilidad' : 'Adaptability'}</li>
        </ol>
        
        <h3 style="font-size: 16px; margin-bottom: 10px; margin-top: 20px;">${window.i18n.currentLanguage === 'es' ? 'Idiomas' : 'Languages'}</h3>
        <ol style="margin-top: 0; padding-left: 25px;">
            <li>${window.i18n.currentLanguage === 'es' ? 'Español (Nativo)' : 'Spanish (Native)'}</li>
            <li>${window.i18n.currentLanguage === 'es' ? 'Inglés (Nivel técnico - B2)' : 'English (Technical level - B2)'}</li>
        </ol>
        
        <h3 style="font-size: 16px; margin-bottom: 10px; margin-top: 20px;">${window.i18n.currentLanguage === 'es' ? 'Intereses Profesionales' : 'Professional Interests'}</h3>
        <ol style="margin-top: 0; padding-left: 25px;">
            <li>${window.i18n.currentLanguage === 'es' ? 'Arquitecturas escalables y microservicios' : 'Scalable architectures and microservices'}</li>
            <li>${window.i18n.currentLanguage === 'es' ? 'Seguridad informática' : 'Information security'}</li>
            <li>${window.i18n.currentLanguage === 'es' ? 'Inteligencia artificial y aprendizaje automático' : 'Artificial intelligence and machine learning'}</li>
            <li>DevOps ${window.i18n.currentLanguage === 'es' ? 'y automatización' : 'and automation'}</li>
        </ol>
    `;
    pdfContent.appendChild(eduCertSection);
    
    // Configuración para generar el PDF
    const element = pdfContent;
    const opt = {
        margin: [15, 15, 15, 15], // top, left, bottom, right
        filename: `Kristian_Orozco_CV_${window.i18n.currentLanguage}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            allowTaint: true,
            letterRendering: true
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait' 
        }
    };
    
    // Generar PDF
    html2pdf().set(opt).from(element).save();
}

// Reemplazar la función existente en i18n.js con esta nueva función
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('downloadPdf')?.addEventListener('click', generatePDF);
});