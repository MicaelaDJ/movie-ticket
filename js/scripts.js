// Business End
function Ticket() {
  this.movie = movie,
  this.time = time,
  this.age = age;
};

var ticketOne = new Ticket();
var ticketTwo = new Ticket();
var ticketThree = new Ticket();

Ticket.prototype.movieChecker = function() {
  if (this.movie === "New") {
    return true;
  }
  else {
    return false;
  };
};

Ticket.prototype.ageChecker = function() {
  if (this.age >= 16) {
    return true;
  }
  else {
    return false;
  };
};

// Ticket.proto.discountChecker {
// if age <= 12 || >= 65 {
// return true } else { return false}

Ticket.prototype.timeChecker = function() {
  if (this.time === "Night") {
    return true;
  }
  else {
    return false;
  }
};



Ticket.prototype.ticketPrice = function() {
    // if new + night { price++}
    // else if new || night { price+ }
    // else {price}
    //if discountChecker = true { price-}
    //else {prise}
    // return price
};

// User Interface
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
  });
});
