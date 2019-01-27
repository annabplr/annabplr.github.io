// display div confirmation after sending message

$('form[action^="https://usebasin.com"]').each(function(i,el){
  form = $(el);
  form.submit(function(e){
    //stop the form from submitting
    e.preventDefault();
    form = $(e.target);
    //get the form's action parameter and add ".json" to the end
    action = form.attr('action') + '.json';
    //submit the form via ajax
    $.ajax({
      url: action,
      method: "POST",
      data: form.serialize(),
      dataType: "json",
      success: function(data){
        if(data.success){
          //successful submission - hide the form and show the success message
          parent = $(form.parent());
          parent.children('form').css('display','none');
          parent.find('.form-done').addClass('display-form-done');
        } else {
          //failed submission - log the output to the console and show the failure message
          console.log(data);
          parent.find('.form-fail').addClass('display-form-done');
        }
      },
      error: function(){
        //failed submission - show the failure message
        parent.find('.form-fail').addClass('display-form-done');
      }
    });
  });
});

// display text when click on the div resume

document.querySelectorAll(".resume-each").forEach((button) => {
  button.addEventListener("click", (event) => {
  event.currentTarget.querySelector('div.resume-hide').classList.toggle("resume-display");
});
});


// display div on scroll

  $(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave'
      }
    });

    // get all slides
    var slides = document.querySelectorAll("section.panel");

    // create scene for every slide
    for (var i=0; i<slides.length; i++) {
      new ScrollMagic.Scene({
          triggerElement: slides[i]
        })
        .setPin(slides[i])
        .addTo(controller);
    }
  });

// display text when click on the div projet

document.querySelector(".terracognita").
  addEventListener("click", (event) => {
    document.querySelector('.detail-batchka').classList.remove("display-projects");
    document.querySelector('.detail-joliesdates').classList.remove("display-projects");
    document.querySelector('.detail-lapioche').classList.remove("display-projects");
  document.querySelector('.detail-terracognita').classList.toggle("display-projects");
});

document.querySelector(".batchka").
  addEventListener("click", (event) => {
    document.querySelector('.detail-terracognita').classList.remove("display-projects");
    document.querySelector('.detail-joliesdates').classList.remove("display-projects");
    document.querySelector('.detail-lapioche').classList.remove("display-projects");
  document.querySelector('.detail-batchka').classList.toggle("display-projects");
});

document.querySelector(".joliesdates").
  addEventListener("click", (event) => {
    document.querySelector('.detail-batchka').classList.remove("display-projects");
    document.querySelector('.detail-terracognita').classList.remove("display-projects");
    document.querySelector('.detail-lapioche').classList.remove("display-projects");
  document.querySelector('.detail-joliesdates').classList.toggle("display-projects");
});

document.querySelector(".lapioche").
  addEventListener("click", (event) => {
    document.querySelector('.detail-batchka').classList.remove("display-projects");
    document.querySelector('.detail-joliesdates').classList.remove("display-projects");
    document.querySelector('.detail-terracognita').classList.remove("display-projects");
  document.querySelector('.detail-lapioche').classList.toggle("display-projects");
});
