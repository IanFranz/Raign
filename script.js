
//for//



var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");


}


//for //


const scriptURL = 'https://script.google.com/macros/s/AKfycbzqQVg7o8q7wSLxLh3VHUtubfvMLLQXDF2nB2p__Z_Yhk84nLlyiAdBjU624CNaE47S/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Great your massage has successfully send!"
        setTimeout(function(){
            msg.innerHTML = ""
        },1000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})