// Constants for query selector
const myStudentId = document.getElementById("myStudentId");
const customNumberInput = document.getElementById("customNumber");
const custColorButton = document.querySelector(".custColor");
const randColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const images = document.getElementById("images");

// Function to change background color from user input and add student id
function changeCustomColor() {
    const userInput = parseInt(customNumberInput.value);
    myStudentId.textContent = "Student ID: 200552822"; // Replace with your actual student ID

    // Change background color based on user input range
    if (userInput < 0 || userInput > 100) {
        document.body.style.backgroundColor = "red";
    } else if (userInput >= 0 && userInput <= 20) {
        document.body.style.backgroundColor = "green";
    } else if (userInput > 20 && userInput <= 40) {
        document.body.style.backgroundColor = "blue";
    } else if (userInput > 40 && userInput <= 60) {
        document.body.style.backgroundColor = "orange";
    } else if (userInput > 60 && userInput <= 80) {
        document.body.style.backgroundColor = "purple";
    } else if (userInput > 80 && userInput <= 100) {
        document.body.style.backgroundColor = "yellow";
    }
}

// Function to change background color from random number
function changeRandomColor() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    customNumberInput.value = randomNum;
    changeCustomColor(); // Reuse the function to set background color
}

// Function to generate options for select list
function addList() {
    const imgArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"]; // Replace with actual image names
    
    // Loop through the image array and create options for the select list
    for (let i = 0; i < imgArray.length; i++) {
        const option = document.createElement("option");
        option.value = imgArray[i];
        option.text = imgArray[i];
        imageSelect.appendChild(option);
    }
}

// Function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = `img/${selectedImage}`; // Assuming images are stored in the 'img' folder
}

// Event listeners for onclick event of buttons and onchange event of select
custColorButton.addEventListener("click", changeCustomColor);
randColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("change", changeImage);

// Initialize the select list options
addList();
