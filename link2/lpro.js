document.addEventListener("DOMContentLoaded", function () {
    const notifyButton = document.querySelector('.box .btn');
  
    notifyButton.addEventListener('click', function (event) {
      event.preventDefault();
  
      window.location.href = 'link3/tindex.html';
    });
  });
