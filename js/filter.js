function filterProjects(filter, button) {
    const projects = document.querySelectorAll(".project");
    const isActive = button.classList.contains("active");
  
    // reset all buttons
    document.querySelectorAll(".filter-button").forEach(b => b.classList.remove("active"));
  
    if (!isActive) {
      button.classList.add("active");
      projects.forEach(p => {
        p.style.display = p.classList.contains(filter) ? "flex" : "none";
      });
    } else {
      // toggle off: show all
      projects.forEach(p => p.style.display = "flex");
    }
  }
  