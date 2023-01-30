var colorBox = document.querySelector('.color-box');
var fliperBtn = document.querySelector('.fliper')

fliperBtn.addEventListener('click', () => {
  const colors = colorBox.style.backgroundColor;
var newColor = colors === 'blue' ? 'red' : 'blue';
colorBox.style.backgroundColor = newColor;
})