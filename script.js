document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('portfolioForm');
    const generateBtn = document.getElementById('generateBtn');
    const portfolioPreview = document.getElementById('portfolioPreview');

    generateBtn.addEventListener('click', () => {
        const name = document.getElementById('name').value.trim();
        const about = document.getElementById('about').value.trim();
        const contact = document.getElementById('contact').value.trim();
        const projects = document.getElementById('projects').value.trim();
        const skills = document.getElementById('skills').value.trim();

        if (!name || !about || !contact) {
            alert('Por favor completa todos los campos requeridos.');
            return;
        }

        // Aquí generas el contenido del portafolio
        const previewHTML = `
            <h2>${name}</h2>
            <p><strong>Acerca de mí:</strong> ${about}</p>
            <p><strong>Contacto:</strong> ${contact}</p>
            ${projects ? `<h3>Proyectos</h3><ul>${projects.split(',').map(p => `<li>${p.trim()}</li>`).join('')}</ul>` : ''}
            ${skills ? `<h3>Habilidades</h3><ul>${skills.split(',').map(s => `<li>${s.trim()}</li>`).join('')}</ul>` : ''}
        `;

        portfolioPreview.innerHTML = previewHTML;
        portfolioPreview.classList.remove('hidden');
    });
});
