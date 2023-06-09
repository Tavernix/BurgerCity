let form = document.getElementById('form');
form.addEventListener('submit', formSend);

async function formSend(e){
  e.preventDefault();

  let formData = new FormData(form);
	formData.append('cart', window.localStorage.getItem('cart'));
  formData.append('allPrice', document.querySelector('.all-price').textContent);  
  let response = await fetch('sendmail.php', {
    method: 'POST',
    body: formData
  });

  if (response.ok){
    let result = await response.json();
    alert('Заказ отправлен!');
  }
}


