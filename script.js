document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('task-form');

    form.addEventListener('submit', function(event) {
        // Prevent default submission to handle with JS
        event.preventDefault();

        // Get values from form inputs
        const date = document.getElementById('datetime').value;
        const desc = document.getElementById('desc').value;
        const priority = document.getElementById('priority').value;
        const category = document.getElementById('category').value;
        
        // Create a new task object
        const newTask = {
            date: date,
            desc: desc,
            priority: priority,
            category: category
        };

        // Get existing tasks from localStorage, or initialize an empty array
        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        
        // Add the new task to the array
        existingTasks.push(newTask);
        
        // Save the updated array back to localStorage
        localStorage.setItem('tasks', JSON.stringify(existingTasks));
        
        // Redirect to tasks.html
        window.location.href = 'tasks.html';
    });
});