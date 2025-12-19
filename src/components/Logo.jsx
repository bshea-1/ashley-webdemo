import React from 'react';
import emblem from '../assets/logos/Ashley-Emblem.png';
import logoText from '../assets/logos/Ashley-HomeStore-Logo-2016.png'; // Assuming this is the text logo, check if it includes icon or not.

// Ideally, we might want to check which image is which. 
// "Ashley-Emblem.png" is likely the icon.
// "Ashley-HomeStore-Logo-2016.png" is likely the full logo.
// The original code had an SVG icon and text. 
// I'll use the emblem for the icon part and the full logo if appropriate, 
// or just the full logo. 
// The user asked to "add the logos to the website to replace the placeholders".
// The 'Logo' component in reference.html had an SVG and text "Ashley Furniture".
// I will attempt to use the provided images. 

const Logo = () => (
    <div className="flex items-center gap-3 text-text-main dark:text-white">
        <div className="h-8 w-auto">
            {/* Using the text logo if it looks good, or emblem? 
                 Let's try to use the emblem for the icon part and text. 
                 Or maybe just the HomeStore logo. 
                 Ashley-HomeStore-Logo-2016.png is 39KB, likely full width. 
                 I'll use the Emblem + Text approach or just the Image.
                 Given the design, a clean logo is better. 
                 If the file is "Ashley-HomeStore-Logo-2016.png", it's probably the full lockup.
                 I'll render that.
             */}
            <img src={logoText} alt="Ashley Furniture" className="h-full object-contain" />
        </div>
    </div>
);

// Actually, looking at the previous specific SVG, it was just the "A" icon.
// Maybe I should use the emblem there? 
// And the text "Ashley Furniture" was <h2>.
// If I replace the SVG with the emblem image:

const LogoWithEmblem = () => (
    <div className="flex items-center gap-3 text-text-main dark:text-white">
        <div className="size-8">
            <img src={emblem} alt="Ashley Emblem" className="w-full h-full object-contain" />
        </div>
        <h2 className="text-xl font-extrabold leading-tight tracking-[-0.015em] hidden sm:block">Ashley Furniture</h2>
    </div>
);

export default LogoWithEmblem;
