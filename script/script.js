// Using "window.onload" fuction so my js code will be executed after base DOM structure is built.

window.onload = function() {
  // I do not use 'var' keyword to declare a variable here, because i want my variables to be global
  // So i can use them outside "window.onload" function

  productOne = "Trip to London";
  productTwo = "Trip to Amsterdam";
  productOnePrice = 2360;
  productTwoPrice = 1189;

  sum = productOnePrice + productTwoPrice;

  discount = sum - sum / 100 * 10;

  // Selecting 1st element from NodeList of all elements with a class="invoice"
  // In this case we have only 1 element with a class invoice, but it is still a nodelist.
  // with ".innerHTML +=" Adding a p tag inside an element with a class="incoice".

  document.getElementsByClassName("invoice")[0].innerHTML +=
    "<p>If you want to buy a <b>Flight to London</b> and a <b>Flight to Amsterdam</b>, it costs:</p>" +
    "<p>" +
    sum +
    "&euro;";
  ("</p>");

  document.getElementsByClassName("invoice")[0].innerHTML +=
    "<p>If you want buy a <b>Flight to London</b> and a <b>Flight to Amsterdam</b> as a GoldenCard holder, you will get a 10% discount:</p>" +
    "<p>" +
    discount +
    "&euro;";
  ("</p>");
};
