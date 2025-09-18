document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const popupMenu = document.getElementById('popupMenu');
    const closeButton = document.getElementById('closeButton');

    // Toggle popup menu visibility
    toggleButton.addEventListener('click', function() {
        if (popupMenu.style.display === 'none' || popupMenu.style.display === '') {
            popupMenu.style.display = 'block';
         //   toggleButton.textContent = 'Close'; // Optional: Change button text
        }// else {
         //   popupMenu.style.display = 'none';
        //    toggleButton.textContent = 'Open'; // Optional: Change button text
       // }
    });

    // Close popup menu
    closeButton.addEventListener('click', function() {
          popupMenu.style.display = 'none';
   //     toggleButton.textContent = 'Open Menu'; // Optional: Change button text
      });

    // Close popup menu if clicked outside
    document.addEventListener('click', function(event) {
        if (!popupMenu.contains(event.target) && !toggleButton.contains(event.target)) {
            popupMenu.style.display = 'none';
         //   toggleButton.textContent = 'Open Menu'; // Optional: Change button text
        }
    });
});
