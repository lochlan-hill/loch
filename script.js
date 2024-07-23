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