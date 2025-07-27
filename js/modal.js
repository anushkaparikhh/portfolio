/* Modal */
function openModal(img) {
    var modal = document.getElementById("modal");
    var expandedImg = document.getElementById("expandedImg");
    expandedImg.src = img.src;
  
    modal.style.display = "flex";
  }
  
  function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }