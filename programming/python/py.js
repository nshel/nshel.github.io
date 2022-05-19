// Patterns
let = keywordsPattern = /\b(import|from|if|else|elif|try|except|for|in|as|class|with|def|return|break|continue)(?![\w])/g,
funcPattern = /\b(print|open|read|range|write|len|exit|input|str|int|self)(?![\w])/g,
strPattern1 = /(".*?")/g,
strPattern2 = /('.*?')/g,
commentPattern = /(\#.*)/g,
formatedStrPattern = //g,
numbersPattern = /([0-9])/g;

function pySyntax() {

    // get all elements with id 'py-code'
    let codeElements = document.querySelectorAll("[id=py-code]");
    codeElements.forEach(element => {
        
        let parsed = element.innerHTML;
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
		let res1 = parsed.match(commentPattern);
		parsed = RegExD(res1, parsed);

		let res2 = parsed.match(strPattern1);
		parsed = RegExS(res2, parsed);

		let res3 = parsed.match(strPattern2);
		parsed = RegExS(res3, parsed);

        element.innerHTML = parsed;
        
    });
}

function RegExD(res, parsed) {

	let p = parsed;
	if (res != null) {
		res.forEach(item => {
			let n = item.replace(keywordsPattern, "<span id='comment'>$1</span>");
			n = n.replace(funcPattern, "<span id='comment'>$1</span>");
			n = n.replace(numbersPattern, "<span id='comment'>$1</span>");
			p = p.replace(item, n);
		});
	}
	return p;
}

function RegExS(res, parsed) {

	let p = parsed;
	if (res != null) {
		res.forEach(item => {
			let n = item.replace(keywordsPattern, "<span id='string'>$1</span>");
			n = n.replace(funcPattern, "<span id='string'>$1</span>");
			n = n.replace(numbersPattern, "<span id='string'>$1</span>");
			p = p.replace(item, n);
		});
	}
	return p;
}
window.onload = pySyntax();
