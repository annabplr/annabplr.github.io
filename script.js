console.log("coucou");

$.ajax({
  url: "https://usebasin.com/f/ca1342003997.json",
  method: "POST",
  data: {message: "hello!", email: "annabplr@gmail.com"},
  dataType: "json"
})
