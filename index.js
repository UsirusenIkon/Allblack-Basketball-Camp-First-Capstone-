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

const coaches = [
  {
    image: {
      url: 'asset/coaches/IMG1.jpg',
      alt: 'Aniebiet Otung',
    },
    name: 'Aniebiet Otung',
    status: 'Small forward at Kano Pillars in the NBBF',
    info: 'Aniebiet Otung is a well decourated player of the Kano pillars,annually he partakes in camps to spread the culture.',
  },
  {
    image: {
      url: 'asset/coaches/IMG2.jpg',
      alt: 'Richard Eton',
    },
    name: 'Richard Eton',
    status: 'Assistant Coach of the AkwaIbom State team',
    info: 'Sir Richard has been coaching for 9 years and has a keen eye for youths at game of basketball.',
  },
  {
    image: {
      url: 'asset/coaches/IMG3.jpg',
      alt: 'Emaimo Orok',
    },
    name: 'Emaimo Orok',
    status: 'Retired NBA player of the Miami Heat',
    info: 'Emaimo Orok is a well decorated athlete, he retired 2 years ago, curently he annualy hosts basketball camp clinics accross the nation.',
  },
  {
    image: {
      url: 'asset/coaches/IMG4.jpg',
      alt: 'David Enyedok',
    },
    name: 'David Enyedok',
    status: '3 time NBA Dunk champion',
    info: 'David famously known as <b>P Harmony</b> is well known accross the state for his generous contributions to the growth of basketball.',
  },
  {
    image: {
      url: 'asset/coaches/IMG5.jpg',
      alt: 'Daniel King',
    },
    name: 'Daniel King',
    status: 'Shooting guard at the Utah Jazz',
    info: 'Daniel King just recently got drafted to the Utah Jazz, still he creates time for this because he is enthusiastic about giving to the society.',
  },
  {
    image: {
      url: 'asset/coaches/IMG6.jpg',
      alt: 'Ukponobong Ekwere',
    },
    name: 'Ukponobong Ekwere',
    status: 'Point guard at the Rivers Hoopers',
    info: 'Ukponobong popularly known as <b>Cj</b>, is currently the lead scorer in 3pt shooting in the league. <b>Cj</b> regulaly partakes in basketball camps to promote the culture',
  },
  {
    image: {
      url: 'asset/coaches/IMG7.jpg',
      alt: 'Etubom Smith',
    },
    name: 'Etubom Smith',
    status: 'Assistant coach at Cobra Sport team OF the BAL',
    info: 'Smith has developed effective drills and schedules that have improved the overall performance of athletes generally his knowledge in sport science is a great asset',
  },
  {
    image: {
      url: 'asset/coaches/IMG8.jpg',
      alt: 'Ikon Usirusen',
    },
    name: 'Ikon Usirusen',
    status: 'Point guard at Memphis team of the NCAA',
    info: 'Usirusen Ikon recently joined the Memphis team of the NCAA college basketball league',
  },
];

const coachCards = document.querySelector('.coach-cards');

function loadCoaches() {
  coaches.forEach((card) => {
    coachCards.innerHTML += ` 
    <div class="c-card flex">
    <div>
      <div class="c-images margin">
        <img src="asset/checkerboard-squares-black-white.jpg" alt="checkerboard" class="c1-img post"></img>
        <img src=${card.image.url} alt=${card.image.alt} class="c2-img post"></img>
      </div>
    </div>
    <div class="c-content">
      <p class="cp-content">
        <span class="c-name">${card.name}</span>
        <i class="c-stack red">${card.status}</i>
        <span class="c-summary">${card.info}</span>
      </p>
    </div>
  </div>`;
  });
}

loadCoaches();

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

const viewBtn = document.querySelector('.more-btn');

viewBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (coachCards.classList.contains('view')) {
    viewBtn.innerHTML = 'Less<i class=\'bx bx-chevron-up\'></i> ';
  } else {
    viewBtn.innerHTML = 'More<i class=\'bx bx-chevron-down\'></i>';
  }
  coachCards.classList.toggle('view');
});
