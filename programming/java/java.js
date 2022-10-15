
//patterns
var keywordsPattern1 = /\b(import|public|Exception|NumberFormatException|class|static|void|int|float|boolean)(?![\w])/g,
keywordsPattern2 = /\b(try|catch|if|else|switch|while|for|do|new|return|true|false)(?![\w])/g,
strPattern1 = /(".*?")/g,
strPattern2 = /('.*?')/g,
sLineCommentPattern = /(\/\/.*)/g,
mLineCommentPattern = /(\/\*.*\*\/)/g,
numbersPattern = /\b([0-9])/g;

function javaSyntax() {
										
	// get all elements with id 'java-code'
	var codeElements = document.querySelectorAll("[id=java-code]");
	for (var i = 0; i < codeElements.length; i++) {

		var parsed = codeElements[i].innerHTML;

		parsed = parsed.replace(strPattern1, '<span id="string">$1</span>');
		parsed = parsed.replace(strPattern2, "<span id='string'>$1</span>");
		parsed = parsed.replace(numbersPattern, '<span id="number">$1</span>');
		parsed = parsed.replace(keywordsPattern1, '<span id="keyword1">$1</span>');
		parsed = parsed.replace(keywordsPattern2, '<span id="keyword2">$1</span>');
		parsed = parsed.replace(sLineCommentPattern, "<span id='comment'>$1</span>");
		parsed = parsed.replace(mLineCommentPattern, "<span id='comment'>$1</span>");
		
		/**
		 * We need to recheck and replace some keywords, numbers in
		 * comment so that it'll not be highlighted
		 */
		var res1 = parsed.match(sLineCommentPattern);
		var res2 = parsed.match(mLineCommentPattern);
		parsed = RegExD(res1, parsed);
		parsed = RegExD(res2, parsed);

		var res3 = parsed.match(strPattern1);
		parsed = RegExS(res3, parsed);

		var res4 = parsed.match(strPattern2);
		parsed = RegExS(res4, parsed);

		codeElements[i].innerHTML = parsed;
	}
	// codeElements.Array.forEach( element => {
		
	// });
				
}

function RegExD(res, parsed) {

	var p = parsed;
	if (res != null) {
		res.forEach(item => {
			var n = item.replace(keywordsPattern1, "<span id='comment'>$1</span>");
			n = n.replace(keywordsPattern2, "<span id='comment'>$1</span>");
			n = n.replace(numbersPattern, "<span id='comment'>$1</span>");
			p = p.replace(item, n);
		});
	}
	return p;
}

function RegExS(res, parsed) {

	var p = parsed;
	if (res != null) {
		res.forEach(item => {
			var n = item.replace(keywordsPattern1, '<span id="string">$1</span>');
			n = n.replace(keywordsPattern2, '<span id="string">$1</span>');
			n = n.replace(numbersPattern, '<span id="string">$1</span>');
			p = p.replace(item, n);
		});
	}
	return p;
}


window.addEventListener('DOMContentLoaded', () => {
	javaSyntax()
});

