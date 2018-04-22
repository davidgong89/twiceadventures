document.addEventListener('deviceready', this.onDeviceReady, false);

function onDeviceReady(){
    console.log('Device is Ready');
}

$('document').ready(function(){
	$("input[type=submit]").click(function(e) {
		var portal_code = $("#code").val();
		var code_chap_1 = $("#code-chap-1").val();
		
		//if you have 2 forms in one html file, pls give different id name for the user input if not got issue
		//if you have 2 forms in one html file, pls give different id name for the user input if not got issue
		if (portal_code == 'tzuyu14061999') {
			e.preventDefault();
			window.location.href = "chapter2.html";
		}else{
			e.preventDefault();
			window.location.href = "index.html#portal";
		}
		
		
		
		if (code_chap_1 == 'tzuyu14061999') {
			e.preventDefault();
			window.location.href = "chapter2.html";
		}else{
			e.preventDefault();
			window.location.href = "index.html#portal";
		}
		
		
	});

});