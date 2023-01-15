const searchButton = document.getElementById("search-button");
const text = document.getElementById("search-input");

text.focus();

searchButton.addEventListener("click", () => {
    const searchTerm = text.value;
    chrome.windows.create({
        url: "https://www.google.com/search?q=" + searchTerm,
        incognito: true,
    });
    window.close();
});

text.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        searchButton.click();
    }
});

document.body.addEventListener("keydown", () => {
    text.focus();
});
