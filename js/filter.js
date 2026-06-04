let isOneGrid = false;

function filterProjects(button) {
    const filterButtons = document.querySelectorAll('.filter-button[data-filter]');
    const projects = document.querySelectorAll('.project');

    button.classList.toggle('active');

    const selectedCategories = Array.from(filterButtons)
        .filter(btn => btn.classList.contains('active'))
        .map(btn => btn.dataset.filter);

    if (selectedCategories.length === 0) {
        projects.forEach(project => {
            project.style.display = '';
        });
        return;
    }

    projects.forEach(project => {
        const visible = selectedCategories.some(category => project.classList.contains(category));
        project.style.display = visible ? '' : 'none';
    });
}

function toggleGrid() {
    const btn = document.getElementById('grid-toggle-btn');
    const container = document.querySelector('.grid-container');
    
    isOneGrid = !isOneGrid;
    
    if (isOneGrid) {
        btn.src = 'images/icons/one-grid.png';
        container.classList.add('grid-two-column');
        document.body.classList.add('one-grid-active');
    } else {
        btn.src = 'images/icons/two-grid.png';
        container.classList.remove('grid-two-column');
        document.body.classList.remove('one-grid-active');
    }
}