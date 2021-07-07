let ownerName = "Yash Kumar Singh"
let userName = "yash-kumar-yks";
let linkedin="yash-kumar-singh-308319180/"
let face="yash.singh.125323"
let twitter="YASHKUM35068255"

document.querySelectorAll(".owner-name").forEach((e) => {
    e.innerHTML = ownerName;
});

document.querySelector("#github").href = "http://github.com/" + userName;
document.querySelector("#fork").href = "http://github.com/" + userName + "/" + userName + ".github.io";
document.querySelector("#LinkedIn").href = "https://www.linkedin.com/in/" + linkedin;
document.querySelector("#facebook").href = "https://www.facebook.com/" + face;
document.querySelector("#twitter").href = "https://www.twitter.com/" + twitter;
