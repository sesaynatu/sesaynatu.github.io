const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const messageArea = document.getElementById('messageArea');

  if (nameInput.value.trim() !== "") {
    messageArea.textContent = `Thank you, ${nameInput.value}! Your form has been submitted successfully.`;
    messageArea.style.color = 'green';
    nameInput.value = '';
  } else {
    messageArea.textContent = 'Please enter your name before submitting.';
    messageArea.style.color = 'red';
  }
});
