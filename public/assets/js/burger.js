$(document).ready(function(){

  $(".mark-complete").on("click", function() {

    // read id from button
    const id = $(this).attr("data-id");
    $.ajax({
      url: "/api/burgers/" + id,
      method: "PUT"
    }).then(function(data) {
      location.reload();
    });

  });

  $(".delete").on("click", function () {

    // read id from button
    const id = $(this).attr("data-id");
    $.ajax({
      url: "/api/burgers/" + id,
      method: "DELETE"
    }).then(function (data) {
      location.reload();
    });

  })

  $("#submit-btn").on("click", function(e) {
    e.preventDefault();

    // package up burger
    const burger = {
      burger: $("#burgers-input").val().trim()
    }

    $.ajax({
      url: "/api/burgers",
      method: "POST",
      data: burger 
    })
    .then(function(data) {
      location.reload();
    });
  });

});