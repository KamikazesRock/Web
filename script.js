// Cargar el archivo JSON solo para Victoria!
fetch('bbdd/canciones.json')
    .then(response => response.json())
    .then(canciones => {
        const container = document.getElementById('cancion-container');
        if (!container) return;

        // Buscar Victoria en la BBDD
        const nombreBuscado = 'Victoria';
        const cancion = canciones.find(c => c.titulo.toLowerCase() === nombreBuscado.toLowerCase());

        // Vaciar el contenedor por si acaso
        container.innerHTML = '';

        if (!cancion) {
            container.innerHTML = `<p style="color:white;">La canción "${nombreBuscado}" no está disponible.</p>`;
            return;
        }
        const card = document.createElement('div');
        card.className = 'cancion-card';
        // Título y disco
        const titulo = document.createElement('h3');
        if (cancion.disco == ''){
            titulo.textContent = `${cancion.titulo}`;
        }
        else{
            titulo.textContent = `${cancion.titulo} ${cancion.disco})`;
        }


        // Enlace (si existe)
        let enlaceHtml = '';
        if (cancion.enlace) {
            enlaceHtml = `<a href="${cancion.enlace}" target="_blank" class="cancion-enlace">🎵 Escuchar</a>`;
        }


        // Letra (con saltos de línea)
        const letra = document.createElement('div');
        letra.className = 'cancion-letra';
        letra.innerHTML = `<strong>Letra:</strong><pre>${cancion.letra}</pre>`;


        // Explicación
        const explicacion = document.createElement('div');
        explicacion.className = 'cancion-explicacion';
        explicacion.innerHTML = `<strong>Explicación:</strong><p>${cancion.explicacion}</p>`;

        // Montar la tarjeta
        if (cancion.explicacion == ""){
            card.innerHTML = `
            <h3>${titulo.textContent}</h3>
            <div class="cancion-letra"><strong>Letra:</strong><pre>${cancion.letra}</pre></div>
            `
        }
        else{card.innerHTML = `
            <h3>${titulo.textContent}</h3>
            <div class="cancion-letra"><strong>Letra:</strong><pre>${cancion.letra}</pre></div>
            <div class="cancion-explicacion"><strong>Explicación:</strong><p>${cancion.explicacion}</p></div>
            `;
        }
        
        


        container.appendChild(card);
    })
    .catch(error => {
        console.error('Error al cargar las canciones:', error);
        const container = document.getElementById('cancion-container');
        if (container) {
            container.innerHTML = '<p style="color:red;">Error al cargar los datos.</p>';
        }
    });


// // Cargar el archivo JSON de todas las canciones
// fetch('bbdd/canciones.json')
//     .then(response => response.json())
//     .then(canciones => {
//         const container = document.getElementById('cancion-container');
//         if (!container) return;

//         canciones.forEach(cancion => {
//             // Crear un elemento para cada canción
//             const card = document.createElement('div');
//             card.className = 'cancion-card';

//             // Título y disco
//             const titulo = document.createElement('h3');
//             titulo.textContent = `${cancion.titulo} (${cancion.disco})`;

//             // Enlace (si existe)
//             let enlaceHtml = '';
//             if (cancion.enlace) {
//                 enlaceHtml = `<a href="${cancion.enlace}" target="_blank" class="cancion-enlace">🎵 Escuchar</a>`;
//             }

//             // Letra (con saltos de línea)
//             const letra = document.createElement('div');
//             letra.className = 'cancion-letra';
//             letra.innerHTML = `<strong>Letra:</strong><pre>${cancion.letra}</pre>`;

//             // Explicación
//             const explicacion = document.createElement('div');
//             explicacion.className = 'cancion-explicacion';
//             explicacion.innerHTML = `<strong>Explicación:</strong><p>${cancion.explicacion}</p>`;

//             // Montar la tarjeta
//             card.innerHTML = `
//                 <h3>${cancion.titulo} (${cancion.disco})</h3>
//                 ${enlaceHtml}
//                 <div class="cancion-letra"><strong>Letra:</strong><pre>${cancion.letra}</pre></div>
//                 <div class="cancion-explicacion"><strong>Explicación:</strong><p>${cancion.explicacion}</p></div>
//             `;

//             container.appendChild(card);
//         });
//     })
//     .catch(error => console.error('Error al cargar las canciones:', error));