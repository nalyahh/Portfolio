document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    // Add click event listener to each button
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the parent tab-buttons container
            const tabsContainer = this.closest('.skills-column, .experience-column');
            
            // Remove active class from all buttons in this container
            tabsContainer.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the tab content id from the data-tab attribute
            const tabId = this.getAttribute('data-tab');
            
            // Hide all tab contents in this container
            tabsContainer.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Show the selected tab content
            tabsContainer.querySelector(`#${tabId}`).classList.add('active');
        });
    });
});