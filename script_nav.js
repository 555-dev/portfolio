'use strict';

/**
 * BANNER
 * This script dynamically adjusts the minimum width of the `.icon` element 
 * to ensure proper alignment with `.column1` content and `.vertical-menu`.
 * Linked to all portfolio pages.
 */

function adjustIconWidthAndMarquee() {
    const icon = document.querySelector('.icon');
    const column1 = document.querySelector('.column1');
    const marquee = document.querySelector('.marquee');

    // Check if the window width is less than or equal to 500px
    if (window.innerWidth <= 500) {
        if (icon && column1 && marquee) {
            // Get computed styles of column1
            const column1ComputedStyle = window.getComputedStyle(column1);

            // Get total width including padding
            const column1Width = column1.offsetWidth; // Includes padding + content

            // Calculate the new width for .icon
            const newIconWidth = 40.5 + column1Width; // 40.5px base for .vertical-menu

            // Apply the calculated width to .icon
            icon.style.width = `${newIconWidth}px`;

            // Adjust marquee width to fill remaining space
            const newMarqueeWidth = window.innerWidth - newIconWidth;
            marquee.style.width = `${newMarqueeWidth}px`;
        }
    } else {
        // If the window width is above 500px, reset styles (optional)
        const icon = document.querySelector('.icon');
        const marquee = document.querySelector('.marquee');
        
        if (icon && marquee) {
            // Reset the icon width and marquee width
            icon.style.width = '';  // reset width
            marquee.style.width = '';  // reset width
        }
    }
}

// Adjust on page load and window resize
window.addEventListener('load', adjustIconWidthAndMarquee);
window.addEventListener('resize', adjustIconWidthAndMarquee);


/* VERTICAL MENU */

function adjustMenuDivHeights() {
    const menuDivs = document.querySelectorAll('.vertical-menu div');

    menuDivs.forEach(menuDiv => {
        const link = menuDiv.querySelector('a');

        if (link) {
            // Get the computed styles of the link to include padding
            const linkComputedStyle = window.getComputedStyle(link);
            const linkWidth = link.offsetWidth; // Get the width of the <a> tag including padding

            // Set the height of the parent div to match the width of the <a> tag
            // Add padding to the top and bottom for visible space
            const paddingVertical = 15; // Change this value to control the padding space above and below the text
            menuDiv.style.height = `${linkWidth + 2 * paddingVertical}px`; // Add padding to the height calculation

            // Optionally, add padding inside the div for more space around the link text
            menuDiv.style.paddingTop = `${paddingVertical}px`;
            menuDiv.style.paddingBottom = `${paddingVertical}px`;
        }
    });
}

// Call the function when the page loads and on window resize
window.addEventListener('load', adjustMenuDivHeights);
window.addEventListener('resize', adjustMenuDivHeights);