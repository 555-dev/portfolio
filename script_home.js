'use strict';

function adjustPaddingAndBorder() {
    const columns = document.querySelectorAll('.column2');
    
    columns.forEach(column => {
        const softwareBox = column.querySelector('.software_box');
        
        if (softwareBox) {
            const paragraphs = softwareBox.querySelectorAll('p');
            let prevBottom = null;

            // Reset the borders to prevent issues when content changes
            paragraphs.forEach(p => {
                p.style.borderBottom = 'none';
            });

            // Iterate through each paragraph to check for wrapping
            paragraphs.forEach((p, index) => {
                const rect = p.getBoundingClientRect();
                
                // If it's not at the bottom of the container, we add the border
                if (rect.bottom < softwareBox.getBoundingClientRect().bottom) {
                    p.style.borderBottom = '.5px solid rgb(0, 0, 0)';
                }
            });

            // Add padding based on the height of the software box
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
    // Dynamically calculate software_box height
    const softwareBoxHeight = softwareBox.offsetHeight;

    const maxHeight = 185 - softwareBoxHeight - 6; // -5 for 5px padding, then -1px which i think is being split above and below? idk but it works

    // Apply the calculated maxHeight
    blurb.style.maxHeight = `${maxHeight}px`;
}
});
}

window.addEventListener('load', adjustBlurbAndSoftwareBox);
window.addEventListener('resize', adjustBlurbAndSoftwareBox);

