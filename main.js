// import * as htmlToImage from 'html-to-image';
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

// Get the message input element
const messageInput = document.getElementById('message');

// Set the maximum character limit
const maxCharacters = 75;

const characterCountSpan = document.querySelector('.character-count');

// Add an event listener to the input element to update the character count
messageInput.addEventListener('input', updateCharacterCount);

function updateCharacterCount() {
    const currentCharacters = messageInput.value.length;
    characterCountSpan.textContent = `${currentCharacters}/${maxCharacters}`;
  }


function updateLayout(layout) {
    const card = document.getElementById('card');
    card.classList.remove('layout1', 'layout2', 'layout3');
    card.classList.add(`layout${layout}`);

    generateQR();
}

// Add an event listener to the input element to check the character count
messageInput.addEventListener('input', function() {
  // Get the current character count
  const currentCharacters = messageInput.value.length;

  // Calculate the percentage of characters used
  const percentageUsed = (currentCharacters / maxCharacters) * 100;

  // Update the warning message based on the character count
  if (percentageUsed > 80) {
    messageInput.classList.add('warning');
    messageInput.setCustomValidity('Message is too long. Maximum 100 characters allowed.');
  } else {
    messageInput.classList.remove('warning');
    messageInput.setCustomValidity('');
  }

  // Allow up to 120 characters to be displayed, but prevent form validation
  if (currentCharacters > maxCharacters) {
    messageInput.value = messageInput.value.substring(0, maxCharacters);
  }
});


function generateQR() {
    // Get the review link input value
    const message = document.getElementById("message").value;
    const cta = document.getElementById("cta").value;
    const reviewLink = document.getElementById("link").value;

    // add a character limit to the message input

    if (reviewLink) {
        // Generate the QR code
        const displayQR = document.getElementById("qrcode");
        displayQR.innerHTML = "";
        new QRCode(displayQR, reviewLink);
    }

    if (message) {
        document.getElementById("displayMessage").textContent = message;
    } else {
        document.getElementById("displayMessage").textContent = ("Add Message Content")
    }

    if (cta) {
        document.getElementById("displayCta").textContent = cta;
    } else {
        document.getElementById("displayCta").textContent = ("Add CTA")
    } 

    const file = document.querySelector("#logo")
    const display = document.getElementById("displayLogo")
	display.src = URL.createObjectURL(file.files[0]);
}

const getCard = document.getElementById("card");
const getLayoutSelectBtn = document.querySelectorAll(".layout-selector");

function setLayout1(el) {
    getCard.classList.remove("layout2");
    getCard.classList.remove("layout3");
    getCard.classList.add("layout1");
    getLayoutSelectBtn.forEach(btn => {
        btn.classList.remove("active");
    });
    
    el.classList.add("active");
}

function setLayout2(el) {
    getCard.classList.remove("layout1");
    getCard.classList.remove("layout3");
    getCard.classList.add("layout2");
    getLayoutSelectBtn.forEach(btn => {
        btn.classList.remove("active");
    });
    el.classList.add("active");
}

function setLayout3(el) {
    getCard.classList.remove("layout1");
    getCard.classList.remove("layout2");
    getCard.classList.add("layout3");
    getLayoutSelectBtn.forEach(btn => {
        btn.classList.remove("active");
    });
    el.classList.add("active");
}
