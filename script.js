// Start script for work modal windows
// get Elements from HTLM
const siteModal = document.getElementById('siteWin');
const salesModal = document.getElementById('salesWin');
const siteBtn = document.getElementById('siteBtn');
const salesBtn = document.getElementById('salesBtn');
const siteSpan = document.getElementsByClassName('siteClose')[0];
const salesSpan = document.getElementsByClassName('salesClose')[0];
// function show site manager block.
siteBtn.onclick = function () {
    siteModal.style.display = 'block';
}
// function hide site manager clock.
siteSpan.onclick = function() {
    siteModal.style.display = 'none';
}
// function show sales manager block.
salesBtn.onclick = function () {
    salesModal.style.display = 'block';
}
// function hide sales manager clock.
salesSpan.onclick = function() {
    salesModal.style.display = 'none';
}
// function hide block if click outside the block.
window.onclick = function(event) {
    if (event.target == siteModal) {
        siteModal.style.display = 'none';
    }
    if (event.target == salesModal) {
        salesModal.style.display = 'none';
    }
}
// End script



















