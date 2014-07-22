//hellothere_javascript.js
//When user hovers over the header "hello", make the word "there" appear
//$('#greeting').on('mouseover', function(){
//	show('there');  //doesn't work because the effect show is not in the javascript library, it is a jQuery effect
//});

//Hide id "in_hiding"
$('#in_hiding').hide();

//When user hovers over the header "hello", make the word "there" appear
$('#greeting').on('mouseover', function(){
	$('#in_hiding').show();
});  