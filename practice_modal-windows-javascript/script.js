// Blur mask for the body
const blurMask = document.querySelector("#blurmask");

// Show-modal buttons
const buttonShowModal1 = document.querySelector("#show-modal1");
const buttonShowModal2 = document.querySelector("#show-modal2");
const buttonShowModal3 = document.querySelector("#show-modal3");

// Close-modal buttons
const buttonCloseModal1 = document.querySelector("#close-modal1");
const buttonCloseModal2 = document.querySelector("#close-modal2");
const buttonCloseModal3 = document.querySelector("#close-modal3");

// Modal articles
const modal1 = document.querySelector("#modal1");
const modal2 = document.querySelector("#modal2");
const modal3 = document.querySelector("#modal3");
const modals = [modal1, modal2, modal3];

// Show modal buttons events
function showModal(event) {
    // read the button's ID number and get appropriate modal
    let buttonIdNum = Number(event.target.id.at(-1));
    let currentModal = modals[buttonIdNum - 1];

    // If the modal is hidden, show it and blurr the background
    if (currentModal.classList.contains("hidden")) {
        currentModal.classList.remove("hidden");
        blurMask.classList.remove("hidden");
    }
}
buttonShowModal1.addEventListener("click", showModal);
buttonShowModal2.addEventListener("click", showModal);
buttonShowModal3.addEventListener("click", showModal);

// Close modal buttons events
function closeModal(event) {
    // read the button's ID number
    let buttonIdNum = Number(event.target.id.at(-1));
    let currentModal = modals[buttonIdNum - 1];
    
    // If the modal is shown, hide it
    if (!currentModal.classList.contains("hidden")) {
        currentModal.classList.add("hidden");
        blurMask.classList.add("hidden");
    }
}
buttonCloseModal1.addEventListener("click", closeModal);
buttonCloseModal2.addEventListener("click", closeModal);
buttonCloseModal3.addEventListener("click", closeModal);

// Close modals when body clicked or ESC pressed
function closeModals() {
    for (const modal of modals) {
        if (!modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
    blurMask.classList.add("hidden");
        }
    }
}
blurMask.addEventListener("click", closeModals);

// Close modals when ESC pressed
document.addEventListener("keydown", function(event) {if (event.key === "Escape") {closeModals()};});