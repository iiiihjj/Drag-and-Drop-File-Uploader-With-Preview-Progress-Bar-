# Drag-and-Drop-File-Uploader-With-Preview-Progress-Bar-
A responsive drag-and-drop image uploader with image preview, simulated upload progress, file validation, and localStorage persistence using HTML, CSS, and JavaScript.
 Project Description

The Drag and Drop File Uploader is a frontend web application that allows users to upload images by dragging and dropping files into a designated area or selecting them from their computer. It displays an image preview, simulates upload progress with an animated progress bar, and validates file types to ensure that only supported image formats are accepted.

The application also uses the browser's localStorage to save uploaded images and restore them when the page is refreshed.

This project was developed to practice HTML, CSS, and JavaScript concepts, including file handling, drag-and-drop events, image preview generation, progress simulation, and browser storage.

✨ Features

Drag and Drop Upload: Drag image files into the designated upload area.

File Selection: Select images directly from your computer using the Browse Files button.

Image Preview: Preview selected images before completing the simulated upload.

Upload Progress Bar: Display animated upload progress from 0% to 100%.

File Type Validation: Accept JPG, JPEG, PNG, and GIF images.

Error Handling: Display error messages for unsupported file types and oversized images.

File Size Limit: Restrict image files to a maximum size of 2 MB.

Local Storage: Save uploaded images in the browser using localStorage.

Persistent Gallery: Display previously saved images after refreshing the page.

Responsive Design: Provide a user-friendly interface across different screen sizes.

Interactive UI: Highlight the drop area when a file is dragged over it.

🛠️ Technologies Used

HTML5 – Structure of the application and file input.

CSS3 – Styling, responsive layout, transitions, and progress bar animation.

JavaScript – Event handling, file validation, preview generation, and upload simulation.

File API – Access selected files and their metadata.

FileReader API – Read images and generate previews.

localStorage API – Persist uploaded images in the browser.

setInterval() – Simulate the upload progress.

⚙️ How It Works

The user selects an image or drags and drops it into the upload area.

JavaScript checks the file type and size.

The FileReader API reads the image and displays its preview.

A progress bar simulates the upload process.

After the simulated upload reaches 100%, the image data is saved in localStorage.

The saved images are displayed in the gallery.

When the page is refreshed, the application retrieves the saved images from browser storage.

🚀 Getting Started

Prerequisites

You need a web browser and a code editor such as Visual Studio Code.

Installation

Clone this repository:

git clone YOUR_GITHUB_REPOSITORY_URL

Open the project folder:

cd drag-drop-uploader

Open index.html in your browser or run it using the Live Server extension in Visual Studio Code.

No additional dependencies or package installations are required.

📁 Project Structure

drag-drop-uploader/
│
├── index.html       # Application structure
├── style.css        # Styling and responsive design
└── script.js        # Upload logic and local storage

📚 Concepts Learned

HTML5 file input and file handling.

Drag-and-drop events: dragover, dragleave, and drop.

JavaScript event listeners and DOM manipulation.

File validation and error handling.

Image previews using the FileReader API.

Progress simulation using setInterval().

Saving and retrieving data with localStorage.

Responsive web design using CSS media queries.

CSS transitions and interactive UI elements.

⚠️ Limitations

The upload process is simulated; files are not sent to a server.

Images are stored locally in the browser rather than in a cloud database.

Browser storage has limited capacity, so saving many or large images may fail.

Clearing browser storage can remove saved images.
File type and size checks performed in the browser are for user experience and are not a substitute for server-side validation in a production application.

🔮 Future Improvements
Add support for uploading multiple images at once.
Add a remove-image button.
Implement a real backend upload API.
Store images in cloud storage.
Add upload cancellation and retry functionality.
Improve accessibility and upload status feedback.

🎯 Project Goal
The goal of this project is to strengthen frontend development skills by building an interactive file uploader with image previews, progress feedback, file validation, and persistent browser storage.

👩‍💻 Author

Developed as a frontend development practice project to improve practical HTML, CSS, and JavaScript skills.
