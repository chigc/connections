//assign event listeners to the radio buttons
document.querySelectorAll('input[type="checkbox"]').forEach(radio => {
    radio.addEventListener('change', event => {
        const myId = event.target.id;
        document.querySelectorAll(`line.${myId}`).forEach(element => element.style.display = event.target.checked ? 'block' : 'none');
    });
})

//init panZoom
document.addEventListener("DOMContentLoaded", () => {
    const svg = document.querySelector("#svg-wrapper svg");
    const pz = Panzoom(svg, {
        maxScale: 5,
        minScale: 0.5,
        zoomWithWheel: true
    });
    document.getElementById("svg-wrapper").addEventListener("wheel", pz.zoomWithWheel);
});