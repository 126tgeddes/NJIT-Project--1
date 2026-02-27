let mCurrentIndex = 0 // Tracks the current image index
let mImages = [] // Array to hold GalleryImage objects
const mUrl = 'https://js/myImages.json' // Replace with actual JSON URL
const mWaitTime = 5000 // Timer interval in milliseconds

$(document).ready(() => {
  $('.details').hide() // Hide details initially

  // Call a function here to start the timer for the slideshow
let slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
   
}

  // Select the moreIndicator button and add a click event to:
  // - toggle the rotation classes (rot90 and rot270)
  // - slideToggle the visibility of the .details section
  document.getElementById("moreIndicator").addEventListener("click", handleClick);
  element.classList.toggle('rot90');
  element.classList.toggle('rot270');




  // Select the "Next Photo" button and add a click event to call showNextPhoto
  document.getElementById("nextPhoto").addEventListener("click", handleClick);

  // Select the "Previous Photo" button and add a click event to call showPrevPhoto
    document.getElementById("prevPhoto").addEventListener("click", handleClick);

  // Call fetchJSON() to load the initial set of images
  fetchJSON()
})

// Function to fetch JSON data and store it in mImages
function fetchJSON () {
  // Use $.getJSON here to request the JSON data from mUrl
  $.getJSON('myImages.json', function(data) {
    myImages = data;
    console.log("Data loaded into myImages", myImages);
  });
  // On success, parse the JSON and push each image object into mImages array
  const data = JSON.parse(xhr.responseText);
  // After JSON is loaded, call swapPhoto() to display the first image
  document.getElementById("swapPhoto").addEventListener("click", function() {
    swapPhoto('img/1.jpg, ')

  })
}

// Function to swap and display the next photo in the slideshow
function swapPhoto () {

  let currentImage = mImages[mCurrentIndex];
  $("#photo").attr("src", currentImage.image);
  $(".location").text(currentImage.location);
  $(".description").text(currentImage.description);
  $(".date").text(currentImage.date);
  // Access mImages[mCurrentIndex] to update the image source and details
  // Update the #photo element's src attribute with the current image's path
  // Update the .location, .description, and .date elements with the current image's details
}

// Advances to the next photo, loops to the first photo if the end of array is reached
function showNextPhoto () {

  mCurrentIndex++;

  if(mCurrentIndex >= mImages.length){
    mCurrentIndex = 0;
  }

  swapPhoto();
}
  // Increment mCurrentIndex and call swapPhoto()
  // Ensure it loops back to the beginning if mCurrentIndex exceeds array length
const images = ['1.jpg','2.jpg','3.webp'];
let index = 0;
const img = document.getElementById('photo');
const button = document.getElementById('nextPhoto');

$('#nextPhoto').on('click', function() {
  img.src = images[index + 1];
});




// Goes to the previous photo, loops to the last photo if mCurrentIndex goes negative
function showPrevPhoto () {

  if(mCurrentIndex < 0){
    mCurrentIndex = mImages.length - 1;
  }

  prevPhoto();

  // Decrement mCurrentIndex and call swapPhoto()
  // Ensure it loops to the end if mCurrentIndex is less than 0
}

// Starter code for the timer function
function startTimer () {
  if (mTimer !== null) {
    clearInterval(mTimer)
  }

  mTimer = setInterval(function (){
    showNextPhoto();
  }), mWaitTime
}
  // Create a timer to automatically call `showNextPhoto()` every mWaitTime milliseconds
  // Consider using setInterval to achieve this functionality
  // Hint: Make sure only one timer runs at a time

  const imagePaths = [
    '1.jpg',
    '2.jpg',
    '3.webp',
    '4.jpg'
];

const slideshowImg = document.getElementById('slideshow-img');

let currentIndex = 0;

function nextPhoto() {
    slideshowImg.src = imagePaths[currentIndex];

    currentIndex++;

    if (currentIndex >= imagePaths.length) {
        currentIndex = 0;
    }
}

const timerId = setInterval(nextPhoto, mWaitTime);



