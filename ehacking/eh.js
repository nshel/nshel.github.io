// Patterns
var keywordsPattern = /\b(nmap|sshcred|hydra|msfconsole)(?![\w])/g,
strPattern1 = /(".*?")/g,
strPattern2 = /('.*?')/g,
argPattern = /(\s)(?=[-.*?])/g;

function pySyntax() {

    // get all elements with id 'py-code'
    var codeElements = document.querySelectorAll("[id=command]");
	for (var i = 0; i < codeElements.length; i++) {
		var parsed = codeElements[i].innerHTML;
        parsed = parsed.replace(strPattern1, '<span id="string">$1</span>');
        parsed = parsed.replace(strPattern2, "<span id=\"string\">$1</span>");
        parsed = parsed.replace(keywordsPattern, '<span id="keyword">$1</span>');
        parsed = parsed.replace(argPattern, '<span id="arg">$1</span>');

        codeElements[i].innerHTML = parsed;
	}
    // codeElements.forEach(element => {
        
    
        
    // });
}


window.onload = pySyntax();
