// console.log('hello world');

// ======= button event listener =======
const myButton = document.querySelector('.my-button');

function handleClick1() {
  console.log('hello');
}
function handleClick2() {
  console.log('world');
}
function handleClick3(event) {
  console.log(event);
}

myButton.addEventListener('click', handleClick1);
myButton.addEventListener('click', handleClick2);
myButton.addEventListener('click', handleClick3);

// ======= form event listener =======
const form = document.querySelector('.form');

function handleSubmit(e) {
  const login = e.target.elements.login.value;
  const password = e.target.elements.password.value;
  const myRadioGroup = e.target.elements.myRadioGroup.value;

  e.preventDefault();

  if (login === 'admin' && password === 'admin') {
    console.log('submit form');
    console.log('login:', login);
    console.log('password:', password);
    console.log('myRadioGroup:', myRadioGroup);

    myButton.classList.toggle('visible');
  } else {
    console.log('wrong login or password');
  }

  //   if (myButton.classList.contains('visible')) {
  //     myButton.classList.remove('visible');
  //   } else {
  //     myButton.classList.add('visible');
  //   }
}

form.addEventListener('submit', handleSubmit);

// ======== link ========
const link = document.querySelector('.link');

function handleLinkClick(e) {
  e.preventDefault();

  console.log('ha-ha-ha');
  window.location.href = 'https://www.facebook.com';
}

link.addEventListener('click', handleLinkClick);
