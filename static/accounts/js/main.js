document.addEventListener("DOMContentLoaded", function() {
    const addTaskBtn = document.querySelector(".add-task-btn");
    const modal = document.getElementById("taskModal");
    const closeModalBtn = document.getElementById("closeModal");

    // Function to open modal
    addTaskBtn.addEventListener("click", function() {
        modal.classList.add("show");
    });

    // Function to close modal
    closeModalBtn.addEventListener("click", function() {
        modal.classList.remove("show");
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });
});
