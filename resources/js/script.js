let underBar = document.querySelectorAll('nav li');

let hoverClass = document.querySelectorAll('nav div');

for (let i = 0; i < underBar.length; i++) {
    underBar[i].addEventListener('mouseover', () => {
        switch (hoverClass[i].classList[1]) {
            case 'home':
                hoverClass[i].classList.add('under');
                break;
            case 'about':
                hoverClass[i].classList.add('under');
                break;
            case 'projects':
                hoverClass[i].classList.add('under');
                break;
            case 'contact':
                hoverClass[i].classList.add('under');
                break;
        }
    })
}

for (let i = 0; i < underBar.length; i++) {
    underBar[i].addEventListener('mouseout', () => {
        switch (hoverClass[i].classList[1]) {
            case 'home':
                hoverClass[i].classList.remove('under');
                break;
            case 'about':
                hoverClass[i].classList.remove('under');
                break;
            case 'projects':
                hoverClass[i].classList.remove('under');
                break;
            case 'contact':
                hoverClass[i].classList.remove('under');
                break;
        }
    })
}