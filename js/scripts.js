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
