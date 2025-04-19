function openFullscreen(imgElement) {
   const fullscreenDiv = document.getElementById('fullscreen');
   const fullscreenImg = document.getElementById('fullscreen-img');
   fullscreenImg.src = imgElement.src;
   fullscreenDiv.classList.add('active');
}

function closeFullscreen() {
   document.getElementById('fullscreen').classList.remove('active');
}
         