// Fonction pour changer les couleurs aléatoirement
function changeColors() {
    const colorOptions = ["#ff6347", "#32cd32", "#1e90ff", "#ffa500", "#ee82ee", "#ff4500", "#00fa9a"];
    const elements = document.querySelectorAll('.color-changing');

    elements.forEach((element) => {
        const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
        element.style.color = randomColor;
    });
}

// Appeler la fonction toutes les secondes
setInterval(changeColors, 1000);
