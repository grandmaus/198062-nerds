var link = document.querySelector(".contact-btn");   
var popup = document.querySelector(".write-form");   
var close = document.querySelector(".write-form-close");
var form = popup.querySelector("form");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var letter = popup.querySelector("[name=letter]");
var storageUsername = localStorage.getItem("username");
var storageEmail = localStorage.getItem("email");

link.addEventListener("click", function(event) {     
    event.preventDefault();     
    popup.classList.add("write-form-show");
    if (storageUsername) {
        username.value = storageUsername;
        email.focus();
    }   else {
        login.focus();
    };
    if (storageUsername && storageEmail) {
        username.value = storageUsername;
        email.value = storageEmail;
        letter.focus();
    }
}); 

close.addEventListener("click", function(event) {     
    event.preventDefault();     
    popup.classList.remove("write-form-show");
    popup.classList.remove("write-form-error");
});

form.addEventListener("submit", function(event) {
    if (!username.value || !email.value || !letter.value) {
        event.preventDefault();
        popup.classList.remove("write-form-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("write-form-error");
    }   else {
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("write-form-show")) {
            popup.classList.remove("write-form-show");
            popup.classList.remove("write-form-error");
        }
    }
})