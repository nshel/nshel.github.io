
//patterns
let keywordsPattern1 = /\b(import|public|class|static|void|int|float|boolean)(?![\w])/g,
keywordsPattern2 = /\b(try|if|else|switch|while|for|new|return|true|false)(?![\w])/g,
strPattern1 = /(".*?")/g,
strPattern2 = /('.*?')/g,
sLineCommentPattern = /(\/\/.*)/g,
mLineCommentPattern = /(\/\*.*\*\/)/g,
numbersPattern = /([0-9])/g;

function javaSyntax() {
										
	// get all elements with id 'java-code'
	let codeElements = document.querySelectorAll("[id=java-code]");
	codeElements.forEach( element => {
		let parsed = element.innerHTML;

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
		let res1 = parsed.match(sLineCommentPattern);
		let res2 = parsed.match(mLineCommentPattern);
		parsed = RegExD(res1, parsed);
		parsed = RegExD(res2, parsed);

		// let res3 = parsed.match(strPattern1);
		// parsed = RegExS(res3, parsed);

		// let res4 = parsed.match(strPattern2);
		// parsed = RegExS(res4, parsed);

		element.innerHTML = parsed;
	});
				
}

function RegExD(res, parsed) {

	let p = parsed;
	if (res != null) {
		res.forEach(item => {
			let n = item.replace(keywordsPattern1, "<span id='comment'>$1</span>");
			n = n.replace(keywordsPattern2, "<span id='comment'>$1</span>");
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
			let n = item.replace(keywordsPattern1, '<span id="string">$1</span>');
			n = n.replace(keywordsPattern2, '<span id="string">$1</span>');
			n = n.replace(numbersPattern, '<span id="string">$1</span>');
			p = p.replace(item, n);
		});
	}
	return p;
}

window.onload = javaSyntax();
