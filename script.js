
const dropArea = document.getElementById("dropArea");
const fileInput = document.getElementById("fileInput");
const browseBtn = document.getElementById("browseBtn");
const message = document.getElementById("message");
const previewContainer = document.getElementById("previewContainer");
const imagePreview = document.getElementById("imagePreview");
const fileName = document.getElementById("fileName");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const gallery = document.getElementById("gallery");

const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB

browseBtn.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
        handleFile(fileInput.files[0]);
    }

    // Allows selecting the same file again.
    fileInput.value = "";
});

// Drag-and-drop events
dropArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropArea.classList.add("dragover");
});

dropArea.addEventListener("dragleave", (event) => {
    if (!dropArea.contains(event.relatedTarget)) {
        dropArea.classList.remove("dragover");
    }
});

dropArea.addEventListener("drop", (event) => {
    event.preventDefault();
    dropArea.classList.remove("dragover");

    const files = event.dataTransfer.files;

    if (files.length > 0) {
        handleFile(files[0]);
    }
});

function handleFile(file) {
    message.textContent = "";

    // Validate the file type.
    if (!allowedTypes.includes(file.type)) {
        message.textContent = "Invalid file! Please upload JPG, PNG, or GIF.";
        return;
    }

    // Limit the image size to 2 MB.
    if (file.size > MAX_FILE_SIZE) {
        message.textContent = "Image must be smaller than 2 MB.";
        return;
    }

    // Read the image for preview.
    const reader = new FileReader();

    reader.onload = () => {
        const imageData = reader.result;

        previewContainer.hidden = false;
        imagePreview.src = imageData;
        fileName.textContent = file.name;

        progressBar.style.width = "0%";
        progressText.textContent = "0%";

        simulateUpload(imageData, file.name);
    };

    reader.onerror = () => {
        message.textContent = "Could not read this image. Try another file.";
    };

    reader.readAsDataURL(file);
}

// Simulate uploading without a server.
function simulateUpload(imageData, name) {
    let progress = 0;

    const interval = setInterval(() => {
        progress += 10;

        progressBar.style.width = progress + "%";
        progressText.textContent = progress + "%";

        if (progress >= 100) {
            clearInterval(interval);

            saveImage(imageData, name);
            message.style.color = "green";
            message.textContent = "Image uploaded successfully!";
        }
    }, 150);
}

// Save images in localStorage.
function saveImage(imageData, name) {
    try {
        const images = JSON.parse(
            localStorage.getItem("uploadedImages") || "[]"
        );

        images.push({
            name: name,
            data: imageData
        });

        localStorage.setItem(
            "uploadedImages",
            JSON.stringify(images)
        );

        displayImages();
    } catch (error) {
        message.style.color = "#d93025";
        message.textContent =
            "Storage is full. Try a smaller image or remove saved images.";
    }
}

// Display saved images after uploading or refreshing.
function displayImages() {
    gallery.replaceChildren();

    try {
        const images = JSON.parse(
            localStorage.getItem("uploadedImages") || "[]"
        );

        images.forEach((image) => {
            const img = document.createElement("img");
            img.src = image.data;
            img.alt = image.name;
            img.title = image.name;

            gallery.appendChild(img);
        });
    } catch (error) {
        message.textContent = "Could not load saved images.";
    }
}

// Restore previously saved images on page load.
displayImages();
