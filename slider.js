var slider = document.getElementById("myRange");
var someNumber = document.getElementById("someNumber");
var result = document.getElementById("result");

someNumber.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  someNumber.innerHTML = this.value;
  result.innerHTML = this.value * 0.095;
  var resultRounded = Math.round(result.innerHTML);
  result.innerHTML = "$" + resultRounded;
}
