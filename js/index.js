
function onDeviceReady(){
    console.log('Device is Ready');
    document.removeEventListener('deviceready', onDeviceReady, false);
    
    // Set AdMobAds options: 
    admob.setOptions({
      publisherId:          "ca-app-pub-3940256099942544/6300978111",  // Required 
    });
    
    admob.createBannerView();
}

document.addEventListener('deviceready', this.onDeviceReady, false);

$('document').ready(function(){
	$("input[type=submit]").click(function(e) {
		
		//clear out variables
		var portal_code;
		var code_chap_1;
		var code_chap_2;
		
		
		var portal_code = $("#code").val();
		var code_chap_1 = $("#code-chap-1").val();
		var code_chap_2 = $("#code-chap-2").val();
		
		
		//if you have 2 forms in one html file, pls give different id name for the user input if not got issue
		if (portal_code == 'tzuyu14061999') {
			e.preventDefault();
			window.location.href = "chapter2.html";
			
		}else if(portal_code == 'xxx0xxx'){
			//chapter 3 link
			e.preventDefault();
			window.location.href = "chapter3.html";
			
		}else if (code_chap_1 == 'tzuyu14061999') {
			//chapter 1 validation
			e.preventDefault();
			window.location.href = "chapter2.html";
			
		}else if (code_chap_2 == 'xxx0xxx') {
			//chapter 2 validation
			e.preventDefault();
			window.location.href = "chapter3.html";
			
		}else{
			e.preventDefault();
			window.location.href = "index.html#portal";
		}
	});

});

