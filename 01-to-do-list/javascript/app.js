const app = document.getElementById('app');

// Components
import { Nav } from './components/nav.mjs';

function appContainer() {
    return (
        `
        ${Nav().template}
        `
    )
}

const appRender = () => app.innerHTML = appContainer();
appRender();

(function main() {
    Nav().dateInputFunc();
    Nav().searchInputFunc();
})();