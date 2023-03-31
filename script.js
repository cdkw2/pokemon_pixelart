async function generatePixelArt() {
    // Get the user input
    const pokemonName = document.getElementById("pokemon-name-input").value.toLowerCase();
  
    // Fetch the Pokemon sprite from the PokeAPI
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();
    const spriteUrl = data.sprites.front_default;
  
    // Create a new canvas and context for the pixel art
    const canvas = document.getElementById("pixel-art-canvas");
    const ctx = canvas.getContext("2d");
  
    // Clear the previous pixel art from the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Load the image from the Pokemon sprite URL
    const image = new Image();
    image.onload = function() {
      // Draw the image onto the canvas with pixelated scaling
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
    image.src = spriteUrl;
  
    // Enable the download button
    const downloadButton = document.getElementById("download-button");
    downloadButton.disabled = false;
  }
  
  document.getElementById("download-button").addEventListener("click", function() {
    const canvas = document.getElementById("pixel-art-canvas");
    const link = document.createElement("a");
    link.download = "pixel-art.png";
    link.href = canvas.toDataURL();
    link.click();
  });
  