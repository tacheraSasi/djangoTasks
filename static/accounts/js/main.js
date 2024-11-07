document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const addTaskBtn = document.querySelector('.add-task-btn');
    const closeModalBtn = document.querySelector('.modal-close');

    // Show modal when Add Task button is clicked
    addTaskBtn.addEventListener('click', () => {
        modal.classList.add('show');
    });

    // Hide modal when close button is clicked
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // Optional: Close modal when clicking outside of modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
});
