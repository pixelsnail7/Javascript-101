export function Nav() {
    return {
        template:
        `
        <nav>
            <menu>
                <div id="searchBox">
                    <input type="text" placeholder="Search for a task..." id="searchInput">
                    <input type="date" id="dateInput">
                    <button id="dateSearch"><i class="fa-solid fa-calendar"></i></button>
                </div>
            </menu>
        </nav>
        `,

        dateSearch: document.getElementById('dateSearch'),
        dateInput: document.getElementById('dateInput'),
        searchInput: document.getElementById('searchInput'),

        dateInputFunc() {
            this.dateSearch.addEventListener('click', () => {
                this.dateInput.focus();
                this.dateInput.showPicker?.();
            });

            this.dateInput.addEventListener('change', () => {
                let date = dateInput.value;
                alert(`Date: ${date}`);
                return date;
            });
        },

        searchInputFunc() {
            this.searchInput.addEventListener('input', () => {
                let search = searchInput.value;
                console.log(search);
                return search;
            });
        }
    }
}