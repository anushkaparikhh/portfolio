/* Filter Projects */
document.querySelectorAll('.filter-container input').forEach((checkbox) => {

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            this.parentNode.style.color = '#000000';
        } else {
            this.parentNode.style.color = '#D9D9D9';
        }
    });

    document.querySelectorAll('.filter-select-brand input').forEach((checkbox) => {
        const filteredBrand = document.querySelectorAll('.filter-brand');

        checkbox.addEventListener('change', function () {
            if (filteredBrand.checked) {
                this.parentNode.style.color = '#000000';

                filteredBrand.forEach(filteredBrand => {
                    filteredBrand.style.display = 'flex';
                });
            } else {
                this.parentNode.style.color = '#D9D9D9';

                filteredBrand.forEach(filteredBrand => {
                    filteredBrand.style.display = 'none'; // Show projects
                });
            }
        });
    });

document.querySelectorAll('.filter-select-uiux input').forEach((checkbox) => {
    const filtereduiux = document.querySelectorAll('.filter-uiux');

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            this.parentNode.style.color = '#000000';

            filtereduiux.forEach(filtereduiux => {
                filtereduiux.style.display = 'flex';
            });
        } else {
            this.parentNode.style.color = '#D9D9D9';

            filtereduiux.forEach(filtereduiux => {
                filtereduiux.style.display = 'none';
            });
        }
    });
});

document.querySelectorAll('.filter-select-graphic input').forEach((checkbox) => {
    const filteredGraphic = document.querySelectorAll('.filter-graphic');

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            this.parentNode.style.color = '#000000';

            filteredGraphic.forEach(filteredGraphic => {
                filteredGraphic.style.display = 'flex';
            });
        } else {
            this.parentNode.style.color = '#D9D9D9';

            filteredGraphic.forEach(filteredGraphic => {
                filteredGraphic.style.display = 'none';
            });
        }
    });
});

document.querySelectorAll('.filter-select-type input').forEach((checkbox) => {
    const filteredType = document.querySelectorAll('.filter-type');

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            this.parentNode.style.color = '#000000';

            filteredType.forEach(filteredType => {
                filteredType.style.display = 'flex';
            });
        } else {
            this.parentNode.style.color = '#D9D9D9';

            filteredType.forEach(filteredType => {
                filteredType.style.display = 'none';
            });
        }
    });
});


function filterProjects(filter, button) {
    var projects = document.querySelectorAll(".project");
    var isActive = button.classList.contains("active");

    var allButtons = document.querySelectorAll(".filter-button");
    allButtons.forEach(btn => btn.classList.remove("active"));

    for(var i = 0; i < projects.length; i++) {
        if (projects[i].classList.contains(filter)) {
            projects[i].style.display = "flex";
        } else {
            projects[i].style.display = "none";
        }
    }

    /* Chat GPT used to help me with this toggle/active situation! */
    if (!isActive) {
        button.classList.add("active");
    } else {
        button.classList.remove("active");
        projects.forEach(project => project.style.display = "flex");
    }
}
    })