'use strict';

/* VERTICAL MENU */
function adjustMenuDivHeights() {
    const menuDivs = document.querySelectorAll('.vertical-menu div');

    menuDivs.forEach(menuDiv => {
        const link = menuDiv.querySelector('a');

        if (link) {
            const linkComputedStyle = window.getComputedStyle(link);
            const linkWidth = link.offsetWidth;
            const paddingVertical = 15; 
            menuDiv.style.height = `${linkWidth + 2 * paddingVertical}px`;
        }
    });
}
window.addEventListener('load', adjustMenuDivHeights);
window.addEventListener('resize', adjustMenuDivHeights);


/* ICON 4 MOBILE*/
function adjustIconWidthAndMarquee() {
    const icon = document.querySelector('.icon');
    const column1 = document.querySelector('.column1');
    const marquee = document.querySelector('.marquee');

    if (window.innerWidth <= 500) {
        if (icon && column1 && marquee) {
            const column1ComputedStyle = window.getComputedStyle(column1);
            const column1Width = column1.offsetWidth;
            const newIconWidth = 40.5 + column1Width;
            icon.style.width = `${newIconWidth}px`;
            const newMarqueeWidth = window.innerWidth - newIconWidth;
            marquee.style.width = `${newMarqueeWidth}px`;
        }
    } else {
        const icon = document.querySelector('.icon');
        const marquee = document.querySelector('.marquee');
        if (icon && marquee) {
            icon.style.width = '';
            marquee.style.width = '';
        }
    }
}
window.addEventListener('load', adjustIconWidthAndMarquee);
window.addEventListener('resize', adjustIconWidthAndMarquee);


function adjustOnFrame() {
    requestAnimationFrame(() => {
        adjustMenuDivHeights();
        adjustIconWidthAndMarquee()
    });
}

window.addEventListener('DOMContentLoaded', adjustOnFrame);
window.addEventListener('resize', adjustOnFrame);