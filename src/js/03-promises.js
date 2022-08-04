import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delay = document.querySelector('input[name=delay]');
const step = document.querySelector('input[name=step]');
const amount = document.querySelector('input[name=amount]');

form.addEventListener('submit', onFormSubmit)


function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(delay.value);
  console.log(step.value);
  console.log(amount.value)
 
}
for (let i = 1; i <= amount; i+=1){
  const position = i;
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise(() => {
    setTimeout(() => {
      if (shouldResolve) {
         Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}, delay)

})

createPromise(resolve,reject)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
   Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  
}