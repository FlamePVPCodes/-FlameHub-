// Define an interface for the bookmarklet data
interface Bookmarklet {
    name: string;
    description: string;
    code: () => void;
}

// Example bookmarklet data (you can replace this with your actual data)
const bookmarkletsData: Bookmarklet[] = [
    {
        name: "Bookmarklet 1",
        description: "Description of Bookmarklet 1",
        code: () => {
            // Bookmarklet 1 code here
        },
    },
    {
        name: "Bookmarklet 2",
        description: "Description of Bookmarklet 2",
        code: () => {
            // Bookmarklet 2 code here
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
            <a href="javascript:void(0);" onclick="runBookmarklet(${index})">Run Bookmarklet</a>
        `;

        bookmarkletContainer.appendChild(bookmarkletBox);
    });
}

// Function to run a bookmarklet
function runBookmarklet(index: number) {
    const bookmarklet = bookmarkletsData[index];
    bookmarklet.code();
}

// Call the function to generate bookmarklet boxes
createBookmarkletBoxes();
