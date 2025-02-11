  // JavaScript Code
  document.getElementById("connect-account").addEventListener("click", function () {
    alert("Connect Account functionality coming soon! Now is under Programming");
  });

   // Add the JavaScript code here
   document.querySelector('.fa-sync-alt').addEventListener('click', function() {
          location.reload();
      });

      function toggleDropdown() {
          var dropdown = document.getElementById('dropdown');
          // Toggle display of the dropdown menu
          if (dropdown.style.display === 'block') {
              dropdown.style.display = 'none';
          } else {
              dropdown.style.display = 'block';
          }
      }

      // Close the dropdown if the user clicks outside
      window.onclick = function(event) {
          var dropdown = document.getElementById('dropdown');
          if (!event.target.matches('.fas.fa-ellipsis-v')) {
              if (dropdown.style.display === 'block') {
                  dropdown.style.display = 'none';
              }
          }
      }