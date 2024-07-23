document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { name: 'Project 1', description: 'Description of project 1' },
        { name: 'Project 2', description: 'Description of project 2' },
        { name: 'Project 3', description: 'Description of project 3' }
    ];

    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${project.name}</strong>: ${project.description}`;
        projectList.appendChild(li);
    });
});


// Function to update the counter display
function updateCounterDisplay(count) {
    document.getElementById('counter').textContent = count;
}

// Get the current count from localStorage, or start at 0 if not set
let count = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;
updateCounterDisplay(count);

// Add click event listener to the button
document.getElementById('incrementButton').addEventListener('click', () => {
    count++;
    localStorage.setItem('clickCount', count);
    updateCounterDisplay(count);
});