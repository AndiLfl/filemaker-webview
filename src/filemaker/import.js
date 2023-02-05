import './example.js'
const navigateToPage = (page) => {
    window.location.href = `#/${page}`;
}

window.navigateToPage = navigateToPage;