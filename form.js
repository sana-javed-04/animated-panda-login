let video = document.querySelector("#pnda-vido");
let mail = document.querySelector("#mail");
let paswrd = document.querySelector("#pswrd");
let showIcon = document.querySelector("#show");
let hideIcon = document.querySelector("#off");

showIcon.style.display = 'none';

function videoPlayDcid(startTime, endTime) {
    video.currentTime = startTime;  // Set the start time
    video.play(); // Play the video

    setTimeout(() => {
        video.pause();  // Pause the video after the duration
    }, (endTime - startTime) * 1000);  // Calculate the duration in milliseconds
};


// Event listeners for the email input

mail.addEventListener('focus', () => {
    videoPlayDcid(6, 10); // Panda looks down when typing email
});

mail.addEventListener('blur', () => {
    videoPlayDcid(0, 5); // Panda looks front when not typing
});


// Event listeners for the password input

paswrd.addEventListener('focus', () => {
    if (paswrd.type === 'text') {
        videoPlayDcid(19, 22); // Panda covers one eye when password is visible and being typed
    } else {
        videoPlayDcid(12, 15); // Panda covers both eyes when password is hidden and being typed
    }
});

paswrd.addEventListener('blur', () => {
    videoPlayDcid(0, 5); // Panda looks front when not typing
});



// Toggle password visibility

hideIcon.addEventListener("click", () => {
    paswrd.type = "text";
    hideIcon.style.display = 'none'; // Hide the "visibility_off" icon
    showIcon.style.display = 'inline'; // Show the "visibility" icon
    videoPlayDcid(20, 22); // Panda opens one eye when showing password
});

showIcon.addEventListener('click', function () {
    paswrd.type = 'password'; // Hide the password
    showIcon.style.display = 'none'; // Hide the "visibility" icon
    hideIcon.style.display = 'inline'; // Show the "visibility_off" icon
    videoPlayDcid(12, 15); // Panda covers eyes again when hiding password
});
