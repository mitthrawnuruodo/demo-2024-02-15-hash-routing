const content = document.getElementById('content');
const navLinks = document.querySelectorAll('nav a');

// Define routes and their corresponding content
const routes = {
    '/': renderHome,
    '/products': renderProducts,
    '/contact': renderContact,
    '/about': renderAbout
};

// Remove hash from hash string (e.g., "#/home" becomes "/home")
function extractPath(hash) {
    return hash.slice(1) || '/';
}

// Add event listener for hash changes
window.addEventListener('hashchange', handleHashChange);

// Initial render based on current hash
handleHashChange();

function handleHashChange() {
    const path = extractPath(window.location.hash);
    console.log(path);
    const route = routes[path] || renderNotFound;
    console.log(route);
    route();
    updateActiveLink();
}

function renderHome() {
    document.title = `Home page`;
    content.innerHTML = `<h1>Welcome to the Home Page!</h1>`;
}

function renderProducts() {
    document.title = `Products`;
    content.innerHTML = `<h1>Explore our Products!</h1>`;
}

function renderContact() {
    document.title = `Contact Us`;
    content.innerHTML = `<h1>Get in Touch</h1>`;
}

function renderAbout() {
    document.title = `About Us`;
    content.innerHTML = `<h1>Learn more About Us</h1>`;
}

function renderNotFound() {
    document.title = `404`;
    content.innerHTML = `<h1>Page not found!</h1>`;
}

function updateActiveLink() {
    const currentPath = extractPath(window.location.hash);
    console.log(currentPath, window.location.href); 
    navLinks.forEach(link => {
        const regex = new RegExp(`${currentPath}$`, 'i');
        console.log(regex, link.href);
        if (link.href.search(regex) !== -1) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}