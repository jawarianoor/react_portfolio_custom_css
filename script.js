const navBar = document.getElementById('nav-bar');
const sideBar = document.getElementById('side-bar');
const sideBarLinks = document.querySelectorAll("#side-bar .side-bar-links a");


//open sidebar when clicked on navBar 
navBar.addEventListener('click', () => {
    sideBar.classList.toggle("active");
});

//close sidebar when any link is clicked
sideBarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideBar.classList.remove("active");
    });
});


//download cv button functionality

document.getElementById('cv').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'https://docs.google.com/document/d/1LGMHKZlKkRqAVVPIZ7-Y3UrqeVmFVDgB/edit?usp=sharing';
    window.open(link, '_blank');
} );

const msgSent = document.getElementById('msg-sent');
const msgBtn = document.getElementById('msg-btn');
//show msgSent when msgBtn is clicked
msgBtn.addEventListener('click', (event) => {
    event.preventDefault(); //prevent page reloading
    msgSent.classList.toggle("active");
});

//Function to send Email when email link in clicked in footer
function sendEmail() {
    const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=jawarianoorsmk@gmail.com&su=Hello&body=Write%20your%20message%20here";
            window.open(gmailLink, '_blank');
}

//send message button functionality
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting the traditional way
    
    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Construct the mailto link with form data
    const mailtoLink = `mailto:jawarianoorsmk@@gmail.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    
    // Open the user's default mail client with the mailto link
    window.location.href = mailtoLink;

    // Show success message
    document.getElementById('msg-sent').style.display = 'block';
});





