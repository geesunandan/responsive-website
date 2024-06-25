function changeColor(): void {
    console.log("entered");
    
    // Select all <p> elements with class "text"
    const textElements = document.querySelectorAll<HTMLParagraphElement>("p.text");
    console.log(textElements);
    
    const colors: string[] = ["red", "green", "blue", "purple", "orange"];

    textElements.forEach((textElement:HTMLParagraphElement) => {
        let currentColor: string = textElement.style.color;
        console.log(currentColor);
        
        let newColor: string = colors[Math.floor(Math.random() * colors.length)];

        // Ensure the new color is different from the current color
        while (newColor === currentColor) {
            console.log("color change");
            newColor = colors[Math.floor(Math.random() * colors.length)];
        }

        textElement.style.color = newColor;
    });
}

console.log("typescript is loaded");
