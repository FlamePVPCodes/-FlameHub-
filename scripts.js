// Define an array to store bookmarklet data
const bookmarkletsData = [
    {
        name: "Bookmarklet 1",
        description: "Description of Bookmarklet 1",
        code: () => {
            // Bookmarklet 1 code here
            alert("Bookmarklet 1 executed!");
        },
    },
    {
        name: "Bookmarklet 2",
        description: "Description of Bookmarklet 2",
        code: () => {
            // Bookmarklet 2 code here
            alert("Bookmarklet 2 executed!");
        },
    },
    // Add more bookmarklet data as needed
];

// Function to create and append bookmarklet boxes
function createBookmarkletBoxes() {
    const bookmarkletContainer = document.getElementById("bookmarklet-container");

    bookmarkletsData.forEach((bookmarklet, index) => {
        const bookmarkletBox = document.createElement("div");
        bookmarkletBox.classList.add("bookmarklet-box");

        bookmarkletBox.innerHTML = `
            <h3>${bookmarklet.name}</h3>
            <p>${bookmarklet.description}</p>
            <button class="run-bookmarklet-button">Run Bookmarklet</button>
        `;

        // Attach a click event listener to run the bookmarklet
        bookmarkletBox.querySelector(".run-bookmarklet-button").addEventListener("click", () => {
            bookmarklet.code();
        });

        bookmarkletContainer.appendChild(bookmarkletBox);
    });
}

// Call the function to generate bookmarklet boxes when the page loads
window.addEventListener("load", createBookmarkletBoxes);
