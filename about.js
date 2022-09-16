const menuBtn = document.querySelector('.nav-menu-btn');
const menuContent = document.querySelector('.nav-menu-content');
const links = document.querySelectorAll('.nav-menu-link');
const body = document.querySelector('body');

// menu button & links
menuBtn.addEventListener('click', () => {
  menuContent.classList.toggle('slide');
  menuBtn.classList.toggle('slide');
  body.classList.toggle('overflow');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    menuContent.classList.remove('slide');
    menuBtn.classList.remove('slide');
    body.classList.remove('overflow');
  });
});

// modal popup and form validation
const modalFilter = document.querySelector('.modal-filter');
const modal = document.querySelector('.modal');
const joinLink = document.querySelector('.join');

function LoadModal() {
  modal.innerHTML = `<i class="bx bx-x"></i>
  <p class="m-txt">
    Register For AllBlack Basketball Camp Summit 2023
  </p>
  <form
    class="form flex"
    action="https://formspree.io/f/xwkzpvdn"
    method="post">
    <div class="input flex">
      <label for="user-name">
        <input
          name="fullname"
          class="wf"
          type="text"
          placeholder="Full Name"
          maxlength="30"
          id="user-name"
          required
        />
      </label>
      <label for="user-email">
        <input
          name="email"
          class="wf"
          type="text"
          placeholder="Email address"
          maxlength="30"
          id="user-email"
          required
        />
      </label>
    </div>
    <button class="reg-btn" type="submit">Register</button>
    <i class="error msg"></i>
  </form>`;
}

LoadModal();

joinLink.addEventListener('click', () => {
  modalFilter.classList.toggle('open');
  modal.classList.toggle('open');
  body.classList.toggle('overflow');

  const closeModal = document.querySelector('.bx-x');
  closeModal.addEventListener('click', () => {
    modalFilter.classList.remove('open');
    modal.classList.remove('open');
    body.classList.remove('overflow');
  });
});

const form = document.querySelector('.form');
const formEmail = document.querySelector('#user-email');
const error = document.querySelector('.error');
const formName = document.querySelector('#user-name');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (formEmail.value !== formEmail.value.toLowerCase()) {
    error.classList.add('msg');
    error.innerHTML = 'Invalid Email Address';
  } else {
    const storage = {
      name: formName.value,
      email: formEmail.value,
    };
    error.classList.remove('msg');
    localStorage.setItem('user', JSON.stringify(storage));
    form.submit();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(localStorage.getItem('user'));
  if (data) {
    formName.value = data.name;
    formEmail.value = data.email;
  }
});
