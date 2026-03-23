function toggleTwoGrid() {
    var gridContainer = document.querySelector('.grid-container');
    var twoGridIcon = document.getElementById("two-grid");
    var oneGridIcon = document.getElementById("one-grid");
    
    if (gridContainer) {
        gridContainer.classList.remove('grid-two-column');
        twoGridIcon.style.opacity = "1";
        oneGridIcon.style.opacity = "0.5";
        document.body.classList.remove('one-grid-active');
    }
}

function toggleOneGrid() {
    var gridContainer = document.querySelector('.grid-container');
    var twoGridIcon = document.getElementById("two-grid");
    var oneGridIcon = document.getElementById("one-grid");

    if (gridContainer) {
        gridContainer.classList.add('grid-two-column');
        twoGridIcon.style.opacity = "0.5";
        oneGridIcon.style.opacity = "1";
        document.body.classList.add('one-grid-active');
    }
}
