const headerTitle = document.getElementById('header-title');
const textParts = [
    { text: "Hi,", className: "red-text" }, // red "Hi,"
    { text: " I'm Daniel Elisea" }         // normal text
];

function typeWriter(element, parts, delay = 120) {
    let partIndex = 0;
    let charIndex = 0;

    function type() {
        if (partIndex >= parts.length) return;

        const part = parts[partIndex];

        if (!part.element) {
            // Create span if className exists
            if (part.className) {
                part.element = document.createElement("span");
                part.element.className = part.className;
                element.appendChild(part.element);
            } else {
                part.element = element;
            }
        }

        if (charIndex < part.text.length) {
            part.element.innerHTML += part.text.charAt(charIndex);
            charIndex++;
            setTimeout(type, delay);
        } else {
            partIndex++;
            charIndex = 0;
            setTimeout(type, delay);
        }
    }

    type();
}

typeWriter(headerTitle, textParts);
