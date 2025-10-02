document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("fileInput");
  // Mudamos o ID de volta para 'imageGrid'
  const imageGrid = document.getElementById("imageGrid");

  // Função para adicionar a imagem à grade
  const addImageToGrid = (file) => {
    const fileURL = URL.createObjectURL(file);

    // Cria o elemento da imagem (<img>)
    const img = document.createElement("img");
    img.src = fileURL;
    img.alt = `Foto para laudo - ${file.name}`;

    // Cria o container para a imagem (div.image-item)
    const imageItem = document.createElement("div");
    imageItem.classList.add("image-item");
    imageItem.appendChild(img);

    // Adiciona a imagem diretamente à grade
    imageGrid.appendChild(imageItem);

    // Remove a mensagem de instrução se houver
    const instruction = imageGrid.querySelector("p");
    if (instruction) {
      imageGrid.removeChild(instruction);
    }
  };

  // Adiciona uma mensagem de instrução inicial
  const initialInstruction = document.createElement("p");
  initialInstruction.style.textAlign = "center";
  initialInstruction.style.color = "#999";
  initialInstruction.style.padding = "50px";
  initialInstruction.textContent =
    'Nenhuma foto adicionada. Clique em "Adicionar Fotos".';
  imageGrid.appendChild(initialInstruction);

  // Listener para o evento de mudança no input de arquivo
  fileInput.addEventListener("change", (event) => {
    const files = event.target.files;

    for (const file of files) {
      addImageToGrid(file);
    }

    // Limpa o valor do input
    fileInput.value = "";
  });
});
