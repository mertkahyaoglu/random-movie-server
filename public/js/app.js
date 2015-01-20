$(document).ready(function() {
  $("#bytitle").change(function(){
    $("#gotitle").attr('href', '/moviebytitle/'+$(this).val());
  });
  $("#byid").change(function(){
    $("#goid").attr('href', '/moviebyid/'+$(this).val());
  });
});
