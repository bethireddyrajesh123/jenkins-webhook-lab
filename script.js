function changeContent(page) {
 const content = document.getElementById('content');
 if (page === 'home') {
   content.innerHTML = `
     <h2>Home</h2>
     <p>This is the home page content.</p>`;
 } else if (page === 'about') {
   content.innerHTML = `
     <h2>About</h2>
     <p>This is the about page content. Learn more about us here.</p>`;
 } else if (page === 'contact') {
   content.innerHTML = `
     <h2>Contact</h2>
     <p>Contact us at example@example.com.</p>`;
 }
}
