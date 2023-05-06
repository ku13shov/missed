const btn = document.querySelector('.content__btn');
const text = document.querySelector('.content__text');
const img = document.querySelector('.content__img');
const fuck = document.querySelector('.content__fuck');


btn.addEventListener('click', () => {
  text.textContent = 'К сожалению ваше упущенное проебалось!!! Но вы не растраивайтесь, опытный верстальщик обязательно наверстает ещё';
  img.src = 'https://media.tenor.com/hq6Fi0viNQQAAAAM/sassy.gif';
  btn.style.display = 'none';
  fuck.style.display = 'block';
});