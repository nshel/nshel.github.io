// Patterns
var keywordsPattern = /\b(import|from|if|else|elif|try|except|for|in|as|class|with|def|return|break|continue)(?![\w])/g,
funcPattern = /\b(print|open|read|range|write|len|exit|input|str|int|self)(?![\w])/g,
strPattern1 = /(".*?")/g,
strPattern2 = /('.*?')/g,
commentPattern = /(\#.*)/g
// formatedStrPattern = //g,
numbersPattern = /([0-9])/g;

function pySyntax() {

    // get all elements with id 'py-code'
    var codeElements = document.querySelectorAll("[id=py-code]");
	for (var i = 0; i < codeElements.length; i++) {
		var parsed = codeElements[i].innerHTML;
        parsed = parsed.replace(strPattern1, '<span id="string">$1</span>');
        parsed = parsed.replace(strPattern2, "<span id=\"string\">$1</span>");
        parsed = parsed.replace(keywordsPattern, '<span id="keyword">$1</span>');
        parsed = parsed.replace(funcPattern, "<span id=\"function\">$1</span>");
        parsed = parsed.replace(commentPattern, "<span id='comment'>$1</span>");
        parsed = parsed.replace(numbersPattern, "<span id='number'>$1</span>");

        /**
		 * We need to recheck and replace some keywords, numbers in
		 * comment so that it'll not be highlighted
		 */
		var res1 = parsed.match(commentPattern);
		parsed = RegExD(res1, parsed);

		var res2 = parsed.match(strPattern1);
		parsed = RegExS(res2, parsed);

		var res3 = parsed.match(strPattern2);
		parsed = RegExS(res3, parsed);

        codeElements[i].innerHTML = parsed;
	}
    // codeElements.forEach(element => {
        
    
        
    // });
}

function RegExD(res, parsed) {

	var p = parsed;
	if (res != null) {
		res.forEach(item => {
			var n = item.replace(keywordsPattern, "<span id='comment'>$1</span>");
			n = n.replace(funcPattern, "<span id='comment'>$1</span>");
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
			var n = item.replace(keywordsPattern, "<span id='string'>$1</span>");
			n = n.replace(funcPattern, "<span id='string'>$1</span>");
			n = n.replace(numbersPattern, "<span id='string'>$1</span>");
			p = p.replace(item, n);
		});
	}
	return p;
}

window.onload = pySyntax();
