console.log("Script de seguimiento cargado");
console.log('Página actual:', window.location.pathname);
//console.log('Título de la página:', document.title);

const startTime = new Date();
const clickedElements = {};
const sectionTimes = {};
let selectedGender = null; // Declara selectedGender al principio del script

// Fuente de la visita
const referrer = document.referrer;

document.body.addEventListener("click", function(e) {
    const tagName = e.target.tagName;
    const id = e.target.id;
    const className = e.target.className;
    const identifier = id ? `${tagName}#${id}` : className ? `${tagName}.${className}` : tagName;

    if (clickedElements[identifier]) {
        clickedElements[identifier]++;
    } else {
        clickedElements[identifier] = 1;
    }
});

// Monitorizar tiempo en secciones
document.body.addEventListener("mouseover", function(e) {
    const section = e.target.closest("[data-section]");
    if (section && !sectionTimes[section.getAttribute("data-section")]) {
        sectionTimes[section.getAttribute("data-section")] = {
            start: new Date().getTime(),
            end: null
        };
    }
});

document.body.addEventListener("mouseout", function(e) {
    const section = e.target.closest("[data-section]");
    if (section && sectionTimes[section.getAttribute("data-section")] && !sectionTimes[section.getAttribute("data-section")].end) {
        sectionTimes[section.getAttribute("data-section")].end = new Date().getTime();
    }
});

// Capturar la selección del género
if(document.getElementById("genderForm")) {
    document.getElementById("genderForm").addEventListener("submit", function(e) {
        e.preventDefault();
        selectedGender = document.querySelector('input[name="gender"]:checked').value;
        console.log('Sexo seleccionado:', selectedGender);
    });
}

// Geolocalización utilizando la API del navegador
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log('Ubicación exacta:', position.coords.latitude, position.coords.longitude);
    }, function(error) {
        console.log('Error obteniendo la geolocalización del navegador:', error);
    });
} else {
    console.log('La geolocalización no está disponible en este navegador.');
}

window.addEventListener("beforeunload", function() {
    const endTime = new Date();
    const duration = (endTime - startTime) / 1000;  // en segundos

    const currentSection = window.location.pathname;

    // Elemento más clickeado
    let mostClickedElement = Object.keys(clickedElements).reduce((a, b) => clickedElements[a] > clickedElements[b] ? a : b, '');

    // Calcular tiempo en cada sección
    const sectionDurations = {};
    for (const section in sectionTimes) {
        if (sectionTimes[section].end) {
            sectionDurations[section] = (sectionTimes[section].end - sectionTimes[section].start) / 1000;
        }
    }

    //console.log('Fecha de visita:', startTime);
    console.log('Duración:', duration, 'segundos');
    console.log('Fuente de la visita:', referrer);
    console.log('Sección actual:', currentSection);
    console.log('Elemento más clickeado:', mostClickedElement);
    console.log('Tiempo en secciones:', sectionDurations);
    console.log('Sexo obtenido del Usuario:', selectedGender);
    console.log('Fecha de visita:', startTime);
});
