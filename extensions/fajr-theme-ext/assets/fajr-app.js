// Fajr App JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Create app container
  const appContainer = document.createElement('div');
  appContainer.className = 'fajr-app-container active';
  
  // Create app button
  const appButton = document.createElement('button');
  appButton.className = 'fajr-app-button';
  appButton.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="white"/></svg>';
  
  // Create app content
  const appContent = document.createElement('div');
  appContent.className = 'fajr-app-content';
  appContent.innerHTML = '<h3>Fajr App</h3><p>Your app content goes here.</p>';
  
  // Append elements
  appContainer.appendChild(appButton);
  appContainer.appendChild(appContent);
  document.body.appendChild(appContainer);
  
  // Toggle content visibility when button is clicked
  appButton.addEventListener('click', function() {
    appContent.classList.toggle('active');
  });
  
  // Log initialization if debug mode is enabled
  if (window.fajrAppDebug) {
    console.log('Fajr App: Initialized successfully');
  }
});

// Add a global function to check if the app is loaded
window.fajrAppLoaded = true;
