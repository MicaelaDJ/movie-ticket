// Business End
function Ticket() {
  this.movie = movie,
  this.time = time,
  this.age = age;
};

var ticketOne = new Ticket();
var ticketTwo = new Ticket();
var ticketThree = new Ticket();



Ticket.prototype.ticketPrice = function() {
  this.price = moviePrice + timePrice + agePrice;
  if (age <= 16) {
    return
  };
};

// User Interface
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
  });
});
