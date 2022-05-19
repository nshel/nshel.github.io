
function cSyntax() {
				
				//patterns
				let keywordsPattern1 = /\b(public|class|static|void|int|float|bool|NULL|double|long|short|auto|char|struct|union|typedef|namespace)(?![\w])/g,
				keywordsPattern2 = /\b(try|if|else|switch|while|for|return|true|false)(?![\w])/g,
				preprocessorPattern = /(\#\w*)/g,
				strPattern1 = /(".*?")/g,
      strPattern2 = /('.*?')/g,
				sLineCommentPattern = /(\/\/.*)/g,
				mLineCommentPattern = /(\/\*.*\*\/)/g,
				numbersPattern = /([0-9])/g,
				tagPattern = /(&lt;.*&gt;)/g;						
				// get all elements with id 'java-code'
				let codeElements = document.querySelectorAll("[id=c-code]");
				codeElements.forEach( element => {
								let parsed = element.innerHTML;
								parsed = parsed.replace(strPattern1, '<span id="string">$1</span>');
        parsed = parsed.replace(strPattern2, "<span id='string'>$1</span>");
								parsed = parsed.replace(numbersPattern, '<span id="number">$1</span>');
								parsed = parsed.replace(keywordsPattern1, '<span id="keyword1">$1</span>');
								parsed = parsed.replace(keywordsPattern2, '<span id="keyword2">$1</span>');
								parsed = parsed.replace(preprocessorPattern, '<span id="preprocessor">$1</span>');
								parsed = parsed.replace(sLineCommentPattern, "<span id='comment'>$1</span>");
								parsed = parsed.replace(mLineCommentPattern, "<span id='comment'>$1</span>");
								parsed = parsed.replace(tagPattern, "<span id='tag'>$1</span>");
								
								element.innerHTML = parsed;
								if (parsed.match(preprocessorPattern)) {
												console.log(parsed);
								}
				});
				
}

window.onload = cSyntax();
