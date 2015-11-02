(function() {
	var shits = [
		"ul#ibm-navigation-trail",
		"div#ibm-masthead",
		"div#dw-regbar",
		"div#dwc-exp-a",
		"p.ibm-no-print.ibm-ind-link",
		"ul.ibm-portrait-module-list",
		"h2#icomments",
		"p.ibm-ind-link.ibm-back-to-top",
		"div#dw-icomments-container",
		"div#ibm-footer-module-dwwrapper",

		// english version
		"div#dw-social-tools-container"
	];

	for (var i = 0; i < shits.length; ++i) {
		$(shits[i]).remove();
	}

//	TODO: remove black strip in the page head (but it doesn't appear in the printer pdf of chrome)
//	setInterval(function() {
//		$("html").css("background", "");
//		$("body").css("background", "");
//	}, 1000);
})();
