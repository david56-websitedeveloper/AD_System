function goBack() {
  window.history.back();
}

function toggleMenu() {
  const menu = document.getElementById('menuDropdown');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

const toggles = document.querySelectorAll('.toggle');
toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
  });
});

window.addEventListener('click', (e) => {
  const menu = document.getElementById('menuDropdown');
  if (!e.target.matches('.menu-icon')) {
    menu.style.display = 'none';
  }
});

  

  // --- SHARE CONTENT FUNCTION ---
  function shareContent() {
      if (navigator.share) {
          navigator.share({
              title: 'Example Title',
              text: 'Check out this awesome content!',
              url: 'https://www.example.com',
          })
          .then(() => console.log('Content shared successfully'))
          .catch((error) => console.error('Error sharing:', error));
      } else {
          alert('Your browser does not support the Web Share API');
      }
  }

  // --- NOTIFICATION TOGGLE ---
  const toggle = document.getElementById('notification-toggle');
  let notificationsEnabled = false;

  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  const closePopupButton = document.getElementById('close-popup');

  if (toggle) {
      toggle.addEventListener('change', function () {
          notificationsEnabled = this.checked;
          console.log(`Notifications ${notificationsEnabled ? 'ON' : 'OFF'}`);

          if (notificationsEnabled) {
              enableNotifications();
              showPopup('Notifications have been enabled!');
          } else {
              disableNotifications();
              showPopup('Notifications have been disabled!');
          }
      });
  }

  function enableNotifications() {
      fetch('/api/enable-notifications', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ enabled: true }),
      }).then(response => response.json())
      .then(() => console.log('Notifications enabled on backend'))
      .catch(error => console.error('Error enabling notifications:', error));
  }

  function disableNotifications() {
      fetch('/api/disable-notifications', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ enabled: false }),
      }).then(response => response.json())
      .then(() => console.log('Notifications disabled on backend'))
      .catch(error => console.error('Error disabling notifications:', error));
  }

  if (closePopupButton && popup) {
      closePopupButton.addEventListener('click', function () {
          popup.style.display = 'none';
      });
  }

  function showPopup(message) {
      if (popupMessage && popup) {
          popupMessage.textContent = message;
          popup.style.display = 'flex';
      }
  }

  // --- SCREENSHOT TOGGLE ---
  const screenshotsToggle = document.getElementById('screenshots-toggle');
  let screenshotsEnabled = false;

  if (screenshotsToggle) {
      screenshotsToggle.addEventListener('change', function () {
          screenshotsEnabled = this.checked;
          console.log(`Screenshots ${screenshotsEnabled ? 'ON' : 'OFF'}`);

          if (screenshotsEnabled) {
              enableScreenshots();
              showPopup('Screenshots enabled for 15 minutes!');

              setTimeout(() => {
                  screenshotsToggle.checked = false;
                  screenshotsEnabled = false;
                  disableScreenshots();
                  showPopup('Screenshots have been disabled after 15 minutes.');
              }, 15 * 60 * 1000);
          } else {
              disableScreenshots();
              showPopup('Screenshots have been disabled!');
          }
      });
  }

  function enableScreenshots() {
      fetch('/api/enable-screenshots', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ enabled: true }),
      }).then(response => response.json())
      .then(() => console.log('Screenshots enabled on backend'))
      .catch(error => console.error('Error enabling screenshots:', error));
  }

  function disableScreenshots() {
      fetch('/api/disable-screenshots', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ enabled: false }),
      }).then(response => response.json())
      .then(() => console.log('Screenshots disabled on backend'))
      .catch(error => console.error('Error disabling screenshots:', error));
  }

  // --- CLEAR DATA ---
  function clearData() {
      console.log("Data cleared!");
      const item = document.querySelector('.item');
      if (item) {
          item.innerHTML = '';
      }
  }

  // --- SIGN-OUT FUNCTION ---
  const signOutButtons = document.querySelectorAll(".sign-out");

  if (signOutButtons.length === 0) {
      console.error("Sign-out button not found!");
  } else {
      signOutButtons.forEach(button => {
          button.addEventListener("click", function (event) {
              event.preventDefault();
              console.log("Sign-out clicked!");

              localStorage.clear();
              sessionStorage.clear();
              window.location.href = "Login.html";
          });
      });
  }



