import Notiflix, { Notify } from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit)

function onFulfilled(result) {
  Notify.success(result);
}
function onRejected(error) {
 Notify.failure(error)
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.currentTarget;
  let delayPromise = Number(delay.value);

 for (let i = 1; i <= amount.value; i++){

   createPromise(i,delayPromise)
  .then(onFulfilled)
     .catch(onRejected); 
   delayPromise += Number(step.value);
  };
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
      , delay)

  });
}