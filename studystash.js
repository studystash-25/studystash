var navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});

/*Toggle*/
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const links = navLinks.querySelectorAll("a");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", String(open));
});
links.forEach((a) => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

/*popup*/
const popupBox1 = document.getElementById("popup-box1");
const popupBox2 = document.getElementById("popup-box2");
const popupoverlay = document.querySelector(".popup-overlay");
const errorMsg1 = document.getElementById("error-msg1");
const errorMsg2 = document.getElementById("error-msg2");
function openPopup1() {
  popupBox2.classList.remove("active");
  popupBox1.classList.add("active");
  popupoverlay.style.display = "block";
}
function openPopup2() {
  popupBox1.classList.remove("active");
  popupBox2.classList.add("active");
  popupoverlay.style.display = "block";
}
function closePopup1() {
  popupBox1.classList.remove("active");
  popupoverlay.style.display = "none";
}
function closePopup2() {
  popupBox2.classList.remove("active");
  popupoverlay.style.display = "none";
}
function login() {
  let email = document.getElementById("email1").value.trim();
  let password = document.getElementById("password1").value.trim();
  if (email === "" || password === "") {
    errorMsg1.style.display = "block";
  } else {
    errorMsg1.style.display = "none";
    alert("✅Logged In successful!");
    closePopup1();
  }
}
function createAccount() {
  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email2").value.trim();
  const password = document.getElementById("password2").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!fullname || !email || !password || !confirmPassword) {
    errorMsg2.innerText = "⚠️ Please fill all fields";
    errorMsg2.style.display = "block";
    return;
  }
  if (!emailPattern.test(email)) {
    errorMsg2.innerText = "⚠️ Enter a valid email";
    errorMsg2.style.display = "block";
    return;
  }
  if (password.length < 6) {
    errorMsg2.innerText = "⚠️ Password must be at least 6 characters";
    errorMsg2.style.display = "block";
    return;
  }
  if (password !== confirmPassword) {
    errorMsg2.innerText = "⚠️ Passwords do not match";
    errorMsg2.style.display = "block";
    return;
  }
  errorMsg2.style.display = "none";
  alert("✅ Account created successfully!");
  closePopup2();
}
popupoverlay.addEventListener("click", function () {
  closePopup1();
  closePopup2();
});
function switchToSignIn() {
  closePopup2();
  openPopup1();
}
function switchToSignUp() {
  closePopup1();
  openPopup2();
}
