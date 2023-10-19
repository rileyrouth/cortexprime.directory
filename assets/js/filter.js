const filter = document.querySelector("#filter");
const filterOptions = filter.querySelectorAll("div");
const items = document.querySelector(".home");

for (const child of filterOptions) {
    child.setAttribute("aria-selected", false);
    child.addEventListener("click", function(event) {
        for (option of filterOptions) {
            if (option.className === child.className && child.getAttribute("aria-selected") == "false") {
                option.setAttribute("aria-selected", true);
            }
            else {
                option.setAttribute("aria-selected", false);
            }
            if (child.getAttribute("aria-selected") == "true") {
                for (const card of items.children) {
                    if (card.classList.contains(child.className)) {
                        card.toggleAttribute("hidden", false);
                    }
                    else {
                        card.toggleAttribute("hidden", true);
                    }
                }
            }
            else {
                for (const card of items.children) {
                    card.toggleAttribute("hidden", false);
                }
            }
        }        
    })
}