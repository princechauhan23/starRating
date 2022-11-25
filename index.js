import {app,signInAnonymously,signOut, fireStore,collection, addDoc, getDocs} from "./init.js";

var uId = null;


const getProductRatings = () => {
    var ratings = {
        sony : [],
        samsung : [],
        vizio: [],
        panasonic: [],
        phillips: []
    }
    return new Promise((resolve, reject) => {
        getDocs(collection(fireStore, "ratings")).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let data = doc.data();
                ratings[data.productSelected].push(Number(data.ratingSelected));
            });
            return resolve(ratings);
        });
    })
}
const renderRatings = () => {
    getProductRatings().then((ratings) => {
        for (let key in ratings){
            var total = ratings[key].reduce((acc, curr) => acc + curr,0);
            let avg = total / ratings[key].length;
            if (isNaN(avg)){
                avg = 0;
            }
            document.getElementById(key).style.width = `${avg * 20}%`;
            document.getElementById("num-"+key).innerHTML = `${avg.toFixed(2)}`;
        }
        })
    }

renderRatings();

setTimeout(() => {
    if (app.currentUser) {
        signInBtn.innerHTML = "Log Out";
        uId = app.currentUser.uid;
    }
    signInBtn.style.visibility = "visible";
},500)


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
        uId = data.user.uid;
        signInBtn.innerHTML = "Log Out";
    }).catch(err => {
        console.log("error", err);
    })
});

const submitBtn = document.getElementById("submit-btn");

var productSelected;
var ratingSelected;
var isValid = false;

const validate = () => {
    console.log(productSelected, ratingSelected);
    if (productSelected && ratingSelected){
        isValid = true;
        submitBtn.style.backgroundColor = "green";
    }else{
        isValid = false;
        submitBtn.style.backgroundColor = "#ccc";
    }
}



const form = document.getElementById("input-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!isValid) { 
        alert("Please select a product and rating");
        return;
    }
    console.log(fireStore, collection, addDoc)
    addDoc(collection(fireStore, "ratings"),{productSelected, ratingSelected, uId}).then(() => {
        renderRatings()
        console.log("rating submitted");
    }).catch((error) => {
        console.log("error",error);
    });
});

const selectItem = document.getElementById("select-Item");
selectItem.addEventListener("change", (e) => {
    productSelected = e.target.value;
    validate();
});

const ratingInput = document.getElementById("rating-input");
ratingInput.addEventListener("input", (e) => {
    ratingSelected = e.target.value;
    validate();
});

const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", (e) => {
    console.log("submit button clicked");
});

const starsInner = document.getElementById("stars-inner");