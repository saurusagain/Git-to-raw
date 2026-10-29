

//PUBLIC VARIABLES
const convertInputs_ALL = document.querySelectorAll(".convert__input");
const convertBtns_ALL = document.querySelectorAll(".convert__btn");
const convertBtns = document.querySelector('.convert__btn');
const inputtedText = document.querySelector('.inputted__text');
const convertedText = document.querySelector('.converted__text');





/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    // Add show-menu class
    navMenu.classList.add("show-menu");

    // Add animation class
    navMenu.classList.add("animate__animated", "animate__fadeIn", "animate__faster");

    // Remove animation class after a delay
    setTimeout(() => {
      navMenu.classList.remove("animate__animated", "animate__fadeIn", "animate__faster");
    }, 1000); // Adjust the delay as needed
  });
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));






/*==================== DISABLE SAVING OF THIS IMAGES ====================*/

document.addEventListener('contextmenu', function (event) {
  var targetElement = event.target;
  if (
    (targetElement.tagName === 'IMG' && targetElement.classList.contains('about__img')) ||
    (targetElement.tagName === 'IMG' && targetElement.classList.contains('footer__logo_image'))
  ) {
    event.preventDefault();
    return false;
  }
});





/*==================== POPUPUP MODAL ====================*/

// Select all the modal views, modal buttons, and modal close buttons
const modalViews = document.querySelectorAll(".popup__modal"),
  modalBtns_ReadMore = document.querySelectorAll(".popup__button__clicker"),
  modalCloses = document.querySelectorAll(".popup__modal-close");


// Function to open a modal view WITH ANIMATION
let modal = function (modalClick) {
  // Remove active-modal class from all modal views
  for (var i = 0; i < modalViews.length; i++) {
    modalViews[i].classList.remove("active-modal", "animate__animated", "animate__fadeIn", "animate__faster");
  }

  // Delay adding the animation classes to ensure animation triggers consistently
  setTimeout(function () {
    // Add active-modal class to the clicked modal view and animate it
    modalViews[modalClick].classList.add("active-modal", "animate__animated", "animate__fadeIn", "animate__faster");
  }, 10);

  // Add a class to disable scrolling on the body
  document.body.classList.add("disable-scroll");
};


// Attach click event listeners to the modal buttons
modalBtns_ReadMore.forEach((modalBtn1, i) => {
  modalBtn1.addEventListener("click", () => {
    modal(i); // Open the corresponding modal view
  });
});


// Attach click event listeners to the modal close buttons
modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", closeModal);
});


// Function to close the modal view WITH ANIMATION
function closeModal() {
  const activeModal = document.querySelector(".active-modal");
  if (activeModal) {
    // Add fade-out animation class to the active modal view
    activeModal.classList.add("animate__animated", "animate__fadeOut", "animate__faster");

    // Remove the modal and animation classes after the animation finishes
    setTimeout(function () {
      activeModal.classList.remove("active-modal", "animate__animated", "animate__fadeOut", "animate__faster");
      document.body.classList.remove("disable-scroll");
    }, 500); // Adjust the delay as needed
  }
}


// Add a keydown event listener to the document
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal(); // Close the modal view when the ESC key is pressed
  }
});


// Store the initial URL hash
const initialHash = window.location.hash;

// Add a popstate event listener to the window
window.addEventListener("popstate", () => {
  const currentHash = window.location.hash;

  // Check if the hash has changed from the initial value
  if (currentHash !== initialHash) {
    closeModal(); // Close the modal view when the back button is pressed on mobile
  }
});









/*==================== GET YEAR AND CURRENT AGE ====================*/
//update copyright year automatically and age

//USAGE: <span current-year></span>
//USAGE: <span my-age></span>

// Function to update the year and age
function updateYearAndAge() {
  // Get all elements with the current-year and my-age attributes
  let yearElements = document.querySelectorAll("[current-year]");
  let ageElements = document.querySelectorAll("[my-age]");

  // Get the current date and time in Asia/Manila time zone
  let currentDate = new Date();
  let options = { year: 'numeric', timeZone: 'Asia/Manila' };
  let currentYear = new Intl.DateTimeFormat('en-US', options).format(currentDate);

  // Calculate the age
  let birthdate = new Date("July 28, 2001");  // Set the birthdate to July 28, 2001
  let ageInMilliseconds = currentDate - birthdate;  // Calculate the difference between current date and birthdate in milliseconds
  let ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));  // Calculate the age in years, accounting for leap years

  // Iterate over each element and update the year
  yearElements.forEach((element) => {
    element.textContent = currentYear; // Replace content with current year
  });

  // Iterate over each element and update the age
  ageElements.forEach((element) => {
    element.textContent = ageInYears; // Replace content with the calculated age
  });
}

// Call the updateYearAndAge function initially
updateYearAndAge();

// Schedule the updateYearAndAge function to be called every minute
setInterval(updateYearAndAge, 60000); // 60000 milliseconds = 1 minute





const name1 = "Your shortcut to Generate Raw GitHub Links";
const name2 = "By Saurus from Indonesia";
const name3 = "Fast & Open Source Tool";
const name4 = "By Saurus from Indonesia";

let i = 0;
let currentName = name1;

function typeEffect() {
  const homeWorkElement = document.getElementsByClassName("convert__subtitle")[0];

  if (i <= currentName.length) {
    const typedText = currentName.substring(0, i);
    homeWorkElement.innerHTML = typedText + "█";
    i++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(function () {
      i = 0;
      if (currentName === name1) {
        currentName = name2;
      } else if (currentName === name2) {
        currentName = name1;
      } else {
        currentName = name1;
      }
      homeWorkElement.innerHTML = "";
      typeEffect();
    }, 2000);
  }
}

function work() {
  setTimeout(typeEffect, 1000);
}

work();





/*======================= CONVERT TO RAW =======================*/

/*===== ENABLE/DISABLE A BUTTON, BASED ON INPUT FIELDS OR PASTE DATA =====*/

// Function to handle input event
function handleInputChange(event) {
  const convertInput = event.target;
  const convertBtn = convertInput.nextElementSibling;

  if (convertInput.value.trim() === '') {
    convertBtn.disabled = true; // Disable the button when the input field is empty
  } else {
    convertBtn.disabled = false; // Enable the button when the input field has content
  }
}

// Loop through each pair of input and button elements
for (let i = 0; i < convertInputs_ALL.length; i++) {
  const convertInput = convertInputs_ALL[i];
  const convertBtn = convertBtns_ALL[i];

  // Set the initial state of the button
  convertBtn.disabled = true;

  // Attach the 'input' event listener to each input element
  convertInput.addEventListener('input', handleInputChange);

  // Attach the 'paste' event listener to each input element
  convertInput.addEventListener('paste', handleInputChange);

  // Attach the 'click' event listener to each button element
  convertBtn.addEventListener('click', function () {
    console.log('You entered:', convertInput.value);
  });
}

//ORIG CODE STYLE:
//https://stackdiary.com/enable-disable-button-javascript/




/*===== CHECK IF THE "inputted__text" is empty, then clear the converted__text =====*/
inputtedText.addEventListener('keyup', function () {
  if (inputtedText.value.trim() === '') {
    convertedText.value = ''; // Clear the converted text if inputted text is empty
    document.querySelector('.convert__copy_btn').disabled = true;    // Disable the COPY BTN 
  }
});





/*=== PROCESS FOR CONVERTHING GITHUB LINK TO RAW LINK  ===*/
function convertToRawLink() {

  /*=== VARS ===*/
  var githubLink = document.getElementById("githubLink").value;

  /*=== CHECK IF INVALID LINK, BEFORE PROCESS  ===*/
  if (!isValidGithubLink(githubLink)) {
    showAlertToast('Error', 'Invalid Link', 'uil-times');
    inputtedText.focus(); // Focus on converted text
    convertedText.value = ''; // Clear the converted text
    document.querySelector('.convert__copy_btn').disabled = true;    // Disable the COPY BTN 
    return;
  }

  /*=== PROCESS OF CONVERTING LINK TO RAW LINK  ===*/
  var rawLink = githubLink.replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/");
  document.getElementById("rawLink").value = rawLink;
  document.querySelector('.convert__copy_btn').disabled = false; // Enable the COPY BTN

  copyRawLink(); // AUTO COPY
}




/*=== CHECK IF LINK IS "GITHUB.COM"  ===*/
function isValidGithubLink(link) {
  var pattern = /^https?:\/\/github\.com/;
  return pattern.test(link);
}




/*=== PROCESS FOR COPYING RAW LINK  ===*/
function copyRawLink() {
  var rawLink = document.getElementById("rawLink");
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(rawLink.value).then(() => {
      showAlertToast('Success', 'Copied to clipboard!', 'fa-solid fa-check');
    }).catch(() => {
      fallbackCopy();
    });
  } else {
    fallbackCopy();
  }

  function fallbackCopy() {
    rawLink.select();
    rawLink.setSelectionRange(0, 99999);
    document.execCommand("copy");
    // Deselect so the bar is not full white selection!
    window.getSelection().removeAllRanges();
    rawLink.blur();
    showAlertToast('Success', 'Copied to clipboard!', 'fa-solid fa-check');
  }
}




/*=== TRIGGER "ENTER" KEY EVENT  ===*/
const githubLinkInput = document.getElementById('githubLink');

// Add an event listener to the input field
githubLinkInput.addEventListener('keyup', function (event) {
  // Check if the "Enter" key was pressed (key code 13)
  if (event.keyCode === 13) {
    // Trigger the button click
    convertBtns.click();
  }
});



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);






/*==================== ANIMATION WHILE SCROLLING ON WHOLE SITE ====================*/

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);





/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);



/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// Add animation to scroll-up button
const scrollUpButton = document.getElementById("scroll-up");

scrollUpButton.addEventListener("click", () => {
  // Add animate__fadeInUp class
  scrollUpButton.classList.add("animate__animated", "animate__slideInUp");

  // Remove animate__fadeInUp class after the animation finishes
  setTimeout(() => {
    scrollUpButton.classList.remove("animate__animated", "animate__slideInUp");
  }, 1000); // Adjust the delay as needed
});


/*==================== SHOW SCROLL DOWN ====================*/
function scrollDown() {
  const scrollDown = document.getElementById("scroll-down");
  // When the scroll is higher than 560 viewport height, add the show-scrolldown class to the a tag with the scroll-top class
  if (this.scrollY < 500) scrollDown.classList.add("show-scrolldown");
  else scrollDown.classList.remove("show-scrolldown");
}
window.addEventListener("scroll", scrollDown);

// Add animation to scroll-down button
const scrollDownButton = document.getElementById("scroll-down");

scrollDownButton.addEventListener("click", () => {
  // Add animate__fadeInUp class
  scrollDownButton.classList.add("animate__animated", "animate__slideInDown");

  // Remove animate__fadeInUp class after the animation finishes
  setTimeout(() => {
    scrollDownButton.classList.remove("animate__animated", "animate__slideInDown");
  }, 1000); // Adjust the delay as needed
});





/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme") || "dark";
const selectedIcon = localStorage.getItem("selected-icon") || "uil-moon";

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// Apply default theme (Dark theme is default)
if (selectedTheme === "light") {
  document.body.classList.remove(darkTheme);
  themeButton.classList.remove(iconTheme);
} else {
  // Default is dark theme
  document.body.classList.add(darkTheme);
  themeButton.classList.add(iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // Add animation classes using Animate.css
  document.body.classList.add("animate__animated", "animate__fadeIn", "animate__fast");
  themeButton.classList.add("animate__animated", "animate__fadeIn", "animate__fast");

  // Remove animation classes after the animation finishes
  setTimeout(() => {
    document.body.classList.remove("animate__animated", "animate__fadeIn", "animate__fast");
    themeButton.classList.remove("animate__animated", "animate__fadeIn", "animate__fast");
  }, 500);

  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});




/*==================== SHOW TOAST ALERT ====================*/
/*CSS:   .toast {   */

function showAlertToast(text1, text2, iconClass) {
  // Remove existing toast if present
  const existing = document.querySelectorAll('.toast');
  existing.forEach(t => t.remove());

  const toast = document.createElement('div');
  toast.className = 'toast active';

  // SVG Check icon (Guaranteed to render crisply, no external CDN font dependency!)
  const checkSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display:block;margin:auto;"><polyline points="20 6 9 17 4 12"></polyline></svg>';

  const crossSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display:block;margin:auto;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';

  const closeIconSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';

  const isError = text1.toLowerCase().includes('error') || (iconClass && iconClass.includes('times'));
  const iconMarkup = isError ? crossSvg : checkSvg;
  const iconBg = isError ? '#EF4444' : '#2563EB';

  toast.innerHTML = `
    <div class="toast-content" style="display: flex; align-items: center; gap: 14px;">
      <div class="check" style="width: 36px; height: 36px; min-width: 36px; border-radius: 50%; background: ${iconBg}; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 14px ${iconBg}88;">
        ${iconMarkup}
      </div>
      <div class="message" style="display: flex; flex-direction: column; gap: 2px;">
        <span class="text text-1" style="font-weight: 700; font-size: 0.95rem; color: #FFFFFF;">${text1}</span>
        <span class="text text-2" style="font-weight: 500; font-size: 0.85rem; color: #94A3B8;">${text2}</span>
      </div>
    </div>
    <span class="toast-close-btn" style="position: absolute; top: 12px; right: 12px; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 4px;">${closeIconSvg}</span>
    <div class="progress active"></div>
  `;

  toast.querySelector('.toast-close-btn').addEventListener('click', () => {
    toast.classList.remove('active');
    setTimeout(() => toast.remove(), 300);
  });

  document.body.appendChild(toast);

  // Play audio
  try {
    const audio = new Audio('assets/mp3/notification-sound-7062.mp3');
    audio.volume = 0.4;
    audio.play().catch(() => {});
  } catch(e) {}

  setTimeout(() => {
    toast.classList.remove('active');
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

/*==================== Function for reCAPTCHA v3 ====================*/
//https://dirask.com/posts/reCAPTCHA-v3-simple-example-how-to-use-in-JavaScript-and-Spring-Framework-prw0zj

var ReCAPTCHAv3Utils = (function () {
  // reCaptcha v3 key to get on https://www.google.com/recaptcha/admin#list
  var PUBLIC_KEY = '6LdUccImAAAAALa1N3ue9L4t8SVRdA3adp2aziIF';

  // Requests Google reCAPTCHAv3 API to get token.
  // Arguments:
  //   action - we can use our own label that describes our action
  //   Look at "Use case" on https://developers.google.com/recaptcha/docs/v3
  //   e.g. homepage, login, social, e-commerce
  //   onSuccess and onError - callback functions
  var request = function (action, onSuccess, onError) {

    // Display toast message here
    showAlertToast('Verifying reCAPTCHA', 'reCAPTCHA verification in progress...', 'uil-spinner');

    if (window.grecaptcha) {
      window.grecaptcha.ready(function () {
        var config = {
          action: action
        };
        try {
          var query = window.grecaptcha.execute(PUBLIC_KEY, config);
          if (onSuccess) {
            console.log("reCAPTCHA verification successful");
            query.then(onSuccess);
          }
        } catch (e) {
          var message = e && e.message || 'Captcha request error.';
          if (onError) {
            onError(message);
          }
        }
      });
    } else {
      if (onError) {
        onError('reCAPTCHA v3 is not loaded correctly.');
      }
    }
  };

  return {
    request: request
  };
})();



/*==================== DISABLE RIGHT CLICK EVENTS ON WEBSITE ====================*/

// Capture the right-click event on the whole page
document.addEventListener('contextmenu', function (event) {
  // Check if the right mouse button was clicked
  if (event.button === 2) {
    // Check if the right-click occurred outside of an <a> tag and not on an <input> element
    const isLinkClicked = event.target.tagName.toLowerCase() === 'a';
    const isInputClicked = event.target.tagName.toLowerCase() === 'input';
    if (!isLinkClicked && !isInputClicked) {
      // Prevent the default behavior for right-click
      event.preventDefault();
    }
  }
});

// Add hover event listeners to all 'a' tags
const links = document.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
  const link = links[i];
  link.addEventListener('contextmenu', function (event) {
    // Allow right-clicking on the hovered <a> tag
    event.stopPropagation();
  });
  link.addEventListener('mouseenter', function () {
    // Add a CSS class to the hovered link for styling
    this.classList.add('hovered-link');
  });
  link.addEventListener('mouseleave', function () {
    // Remove the CSS class from the link when no longer hovered
    this.classList.remove('hovered-link');
  });
}
