'use strict';

function adjustPaddingAndBorder() {
    const columns = document.querySelectorAll('.column2');
    
    columns.forEach(column => {
        const softwareBox = column.querySelector('.software_box');
        
        if (softwareBox) {
            const paragraphs = softwareBox.querySelectorAll('p');
            let prevBottom = null;

            paragraphs.forEach(p => {
                p.style.borderBottom = 'none';
            });

            paragraphs.forEach((p, index) => {
                const rect = p.getBoundingClientRect();
                
                if (rect.bottom < softwareBox.getBoundingClientRect().bottom) {
                    p.style.borderBottom = '.5px solid rgb(0, 0, 0)';
                }
            });

            column.style.paddingBottom = `${softwareBox.offsetHeight}px`;
        }
    });
}
window.addEventListener('load', adjustPaddingAndBorder);
window.addEventListener('resize', adjustPaddingAndBorder);

function adjustBlurbAndSoftwareBox() {
const rows = document.querySelectorAll('.main-content > div');

rows.forEach(row => {
const blurb = row.querySelector('.blurb');
const softwareBox = row.querySelector('.software_box');

if (blurb && softwareBox) {
    
    const softwareBoxHeight = softwareBox.offsetHeight;

    const maxHeight = 185 - softwareBoxHeight - 6; // -5 for 5px padding, then -1px which i think is being split above and below? idk but it works

    blurb.style.maxHeight = `${maxHeight}px`;
}
});
}

window.addEventListener('load', adjustBlurbAndSoftwareBox);
window.addEventListener('resize', adjustBlurbAndSoftwareBox);



function adjustOnFrame() {
    requestAnimationFrame(() => {
        adjustPaddingAndBorder();
        adjustBlurbAndSoftwareBox();
    });
}

window.addEventListener('DOMContentLoaded', adjustOnFrame);
window.addEventListener('resize', adjustOnFrame);