jQuery(document).ready(function () {


    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    var observer = new MutationObserver(function (mutations, observer) {

        $(mutations).each(function (i) {
            
            if($('img[alt="freewall"]').length > 0){
               var d = $('img[alt=freewall]').parent().parent().parent();
		
		//d.parent().children().last().remove();
                d.remove();
                $('#header').parent().children().last().children().first().addClass("noblur");
            }
        });
    });

    observer.observe(document, {
        subtree: true,
        childList: true
    });

});
