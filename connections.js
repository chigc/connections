 //create radio buttons for each manuscript/group of lines in the SVG
const radios = document.getElementById("radios");
const manuscriptGroups = document.querySelectorAll("g.connections");
manuscriptGroups.forEach(function (manuscript) {
    const id = manuscript.id;
    const div = document.createElement("div");
    const radio = `
    <div class="form-check">
        <input class="form-check-input" type="radio" name="manuscripts" id="radio_${id}" data-manuscript="${id}">
        <label class="form-check-label" for="radio_${id}">${id}</label>
    </div>
    `;
    div.innerHTML = radio;
    radios.appendChild(div);
});

//assign event listeners to the radio buttons
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', event => {
        const manuscript = event.target.dataset.manuscript;
        manuscriptGroups.forEach(group => group.style.display = group.id === manuscript ? "block": "none");
    })
});

document.addEventListener("DOMContentLoaded", () => {
    //init panZoom
    const svg = document.querySelector("#svg-wrapper svg");
    const pz = Panzoom(svg, {
        maxScale: 5,
        minScale: 0.25,
        zoomWithWheel: true
    });
    document.getElementById("svg-wrapper").addEventListener("wheel", pz.zoomWithWheel);
    //click the radio button to show the manuscript overview by default
    document.getElementById("radio_overview").click();
});