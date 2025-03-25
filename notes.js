// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Keep Dark Mode Enabled if Previously Set
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
}

// Get the Branch from URL
const urlParams = new URLSearchParams(window.location.search);
const branch = urlParams.get("branch");
document.getElementById("branchTitle").innerText = `Notes for ${branch.toUpperCase()}`;

// Notes Data (Replace with actual PDF URLs)
const notesData = {
    "cse": [
        { subject: "Data Structure", pdf: "pdfs/ds.pdf" },
        { subject: "Linear Algebra for Engineers", pdf: "pdfs/lae.pdf" },
        { subject: "Semiconductor Physics and Devices", pdf: "pdfs/spd.pdf" },
        { subject: "Discrete Structures & Theory of Logic", pdf: "pdfs/dstl.pdf" },
        { subject: "IOT", pdf: "pdfs/iot.pdf" },
        { subject: "Semiconductor Physics and Devices Lab", pdf: "pdfs/spdl.pdf" },
        { subject: "Python for Engineers", pdf: "pdfs/py.pdf" },
    ],
    "ai": [
        { subject: "Data Structure", pdf: "pdfs/ds.pdf" },
        { subject: "Linear Algebra for Engineers", pdf: "pdfs/lae.pdf" },
        { subject: "Enviromental Chemistry", pdf: "pdfs/ec.pdf" },
        { subject: "Computer Organizationg & Logic Design", pdf: "pdfs/cold.pdf" },
        { subject: "Introduction to AI", pdf: "pdfs/ai.pdf" },
        { subject: "Computer Organizationg & Logic Design Lab", pdf: "pdfs/coldl.pdf" },
        { subject: "Python for Engineers", pdf: "pdfs/py.pdf" },
    ],
    "ece": [
        { subject: "Data Structure", pdf: "pdfs/ds.pdf" },
        { subject: "Linear Algebra for Engineers", pdf: "pdfs/lae.pdf" },
        { subject: "Semiconductor Physics and Devices", pdf: "pdfs/spd.pdf" },
        { subject: "Explorations in Electrical Engineering", pdf: "pdfs/eee.pdf" },
        { subject: "IOT", pdf: "pdfs/iot.pdf" },
        { subject: "Semiconductor Physics and Devices Lab", pdf: "pdfs/spdl.pdf" },
        { subject: "Python for Engineers", pdf: "pdfs/py.pdf" },
    ],
    "eee": [
        { subject: "Data Structure", pdf: "pdfs/ds.pdf" },
        { subject: "Linear Algebra for Engineers", pdf: "lae.pdf" },
        { subject: "Environmental chemistry", pdf: "pdfs/ec.pdf" },
        { subject: "Python for Engineers", pdf: "pdfs/py.pdf" },
        { subject: "Digital Logic Design", pdf: "pdfs/dld.pdf" },
        { subject: "Emerging Technologies for Engineers", pdf: "pdfs/ete.pdf" },
    ],
    "elce": [
        { subject: "Data Structure", pdf: "pdfs/ds.pdf" },
        { subject: "Linear Algebra for Engineers", pdf: "pdfs/lae.pdf" },
        { subject: "Environmental chemistry", pdf: "pdfs/ec.pdf" },
        { subject: "Python for Engineers", pdf: "pdfs/py.pdf" },
        { subject: "Computer Organization and Logic Design", pdf: "pdfs/cold.pdf" },
        { subject: "Computer Organization and Logic Design Lab", pdf: "pdfs/coldl.pdf" },
    ],
    "me": [
        { subject: "Data Structure", pdf: "pdfs/ds.pdf" },
        { subject: "Differential Equations & complex Integaration", pdf: "pdfs/deci.pdf" },
        { subject: "Environmental chemistry", pdf: "pdfs/ec.pdf" },
        { subject: "Python for Engineers", pdf: "pdfs/py.pdf" },
        { subject: "Engineering Mechanics", pdf: "pdfs/em.pdf" },
        { subject: "Emerging Technologies for Engineers", pdf: "pdfs/ete.pdf" },
    ]
};

// Load Notes for the Selected Branch
function loadNotes() {
    const notesContainer = document.getElementById("notesList");
    notesContainer.innerHTML = ""; // Clear previous content

    if (notesData[branch]) {
        notesData[branch].forEach(note => {
            const noteDiv = document.createElement("div");
            noteDiv.classList.add("note-item");
            noteDiv.innerHTML = `
                <p>${note.subject}</p>
                <a href="${note.pdf}" target="_blank" class="download-btn">📄 Download</a>
            `;
            notesContainer.appendChild(noteDiv);
        });
    } else {
        notesContainer.innerHTML = "<p>No notes available for this branch.</p>";
    }
}

// Search Functionality
function searchNotes() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const notesContainer = document.getElementById("notesList");
    notesContainer.innerHTML = "";

    if (notesData[branch]) {
        const filteredNotes = notesData[branch].filter(note => note.subject.toLowerCase().includes(searchTerm));

        if (filteredNotes.length === 0) {
            notesContainer.innerHTML = "<p>No matching notes found.</p>";
        } else {
            filteredNotes.forEach(note => {
                const noteDiv = document.createElement("div");
                noteDiv.classList.add("note-item");
                noteDiv.innerHTML = `
                    <p>${note.subject}</p>
                    <a href="${note.pdf}" target="_blank" class="download-btn">📄 Download</a>
                `;
                notesContainer.appendChild(noteDiv);
            });
        }
    }
}

// Go Back to Home Page
function goBack() {
    window.location.href = "index.html";
}

// Load Notes on Page Load
window.onload = loadNotes;