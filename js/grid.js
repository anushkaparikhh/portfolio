function toggleTwoGrid() {
    var twoGrid = document.getElementById("container-grid-two");
    /*
    var fourGrid = document.getElementById("container-grid");
    var fourGridIcon = document.getElementById("four-grid");
    */
    var twoGridIcon = document.getElementById("two-grid");
    var oneGridIcon = document.getElementById("one-grid");
    
    if (twoGrid.style.display === "none") {
        /*fourGrid.style.display = "none";
        fourGridIcon.style.opacity = "0.5";*/
        twoGrid.style.display = "grid";
        twoGrid.style.gridTemplateColumns = "1fr 1fr";
        twoGridIcon.style.opacity = "1";
        oneGridIcon.style.opacity = "0.5";
    } else {
        /*fourGrid.style.display = "none";
        fourGridIcon.style.opacity = "0.5";*/
        twoGrid.style.display = "grid";
        twoGrid.style.gridTemplateColumns = "1fr 1fr";
        twoGridIcon.style.opacity = "1";
        oneGridIcon.style.opacity = "0.5";
    }
}

function toggleOneGrid() {
    /*var fourGrid = document.getElementById("container-grid");
    var fourGridIcon = document.getElementById("four-grid");*/
    var twoGrid = document.getElementById("container-grid-two");
    var twoGridIcon = document.getElementById("two-grid");
    var oneGridIcon = document.getElementById("one-grid");
    
    if (twoGrid.style.display === "none") {
        /*fourGrid.style.display = "none";
        fourGridIcon.style.opacity = "0.5";*/
        twoGrid.style.display = "grid";
        twoGrid.style.gridTemplateColumns = "1fr";
        twoGridIcon.style.opacity = "0.5";
        oneGridIcon.style.opacity = "1";
    } else {
        /*fourGrid.style.display = "none";
        fourGridIcon.style.opacity = "0.5";*/

        twoGrid.style.display = "grid";
        twoGrid.style.gridTemplateColumns = "1fr";
        twoGridIcon.style.opacity = "0.5";
        oneGridIcon.style.opacity = "1";
    }
}
