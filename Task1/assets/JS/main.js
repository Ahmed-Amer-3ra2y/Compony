// Initialize AOS (Animate on Scroll) library
AOS.init();

// Initialize PureCounter for each element with class "purecounter"
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".purecounter");
  counters.forEach((counter) => {
    const start = parseInt(counter.getAttribute("data-purecounter-start"));
    const end = parseInt(counter.getAttribute("data-purecounter-end"));
    const duration = parseInt(
      counter.getAttribute("data-purecounter-duration")
    );
    new PureCounter(counter, start, end, duration);
  });
});



// Validate form
let email =document.getElementById('email')
let area = document.getElementById('area')
let submit_btn = document.getElementById('submit')

submit_btn.onclick = function validation(e){
    function check(name){
        e.preventDefault()
        alert(`please enter the ${name}`)
    }

    if(email.value == ''){
        check('email')
    }
    else if(area.value == ''){
        check('your message')
    }}



 