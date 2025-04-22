// Change text content and style
document.getElementById("change-btn").addEventListener("click", () => {
    const text = document.getElementById("dynamic-text");
    text.textContent = "🎉 The text and style have changed!";
    text.style.color = "purple";
    text.style.fontWeight = "bold";
    text.style.fontSize = "1.2rem";
  });
  
  // Add or remove an element
  document.getElementById("toggle-element-btn").addEventListener("click", () => {
    const container = document.getElementById("extra-info-container");
    const existing = document.getElementById("extra-paragraph");
  
    if (existing) {
      container.removeChild(existing);
    } else {
      const newParagraph = document.createElement("p");
      newParagraph.id = "extra-paragraph";
      newParagraph.textContent = "✨ Here's some extra info added by JavaScript!";
      container.appendChild(newParagraph);
    }
  });
  