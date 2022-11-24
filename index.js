import {app,signInAnonymously,signOut} from "./init.js";

const signInBtn = document.getElementById("sign");
signInBtn.addEventListener("click", () => {
    if (signInBtn.innerText === "Log Out") {
        signOut(app).then(()=>{
            console.log("logged out");
        }).catch((error)=>{
            console.log(error);
        })
        signInBtn.innerText = "Sign In";
        return
    }
    signInAnonymously(app).then(data => {
        console.log("signed in", data);
        signInBtn.innerHTML = "Log Out";
    }).catch(err => {
        console.log("error", err);
    })
});

const form = document.getElementById("input-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("form submitted");
});

const selectItem = document.getElementById("select-Item");
selectItem.addEventListener("change", (e) => {
    console.log("item selected");
});

const ratingInput = document.getElementById("rating-input");
ratingInput.addEventListener("change", (e) => {
    console.log("rating input");
});

const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", (e) => {
    console.log("submit button clicked");
});