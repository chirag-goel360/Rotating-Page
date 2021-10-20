const sheet = new CSSStyleSheet();
sheet.replaceSync('* {transition: all 2s}');
document.adoptedStyleSheets = [sheet];

const allElements = document.body.children;

setInterval(() => {
    for(let el of allElements){
        const rotation = Math.floor(Math.random() * 360);
        const x = Math.floor(document.body.clientWidth * Math.random());
        const y = Math.floor(document.body.clientHeight * Math.random());
        el.style.transform = `translate(${x}px,${y}px) rotate(${rotation}deg)`;
    }
}, 2000)