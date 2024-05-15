// import * as htmlToImage from 'html-to-image';
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

function generateQR() {
    // Get the review link input value
    const message = document.getElementById("message").value;
    const reviewLink = document.getElementById("link").value;

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

    const file = document.querySelector("#logo")
    const display = document.getElementById("displayLogo")
	display.src = URL.createObjectURL(file.files[0]);
}

const getCard = document.getElementById("card");

function setLayout1() {
    getCard.classList.remove("layout2");
    getCard.classList.remove("layout3");
    getCard.classList.add("layout1");
}

function setLayout2() {
    getCard.classList.remove("layout1");
    getCard.classList.remove("layout3");
    getCard.classList.add("layout2");
}

function setLayout3() {
    getCard.classList.remove("layout1");
    getCard.classList.remove("layout2");
    getCard.classList.add("layout3");
}
