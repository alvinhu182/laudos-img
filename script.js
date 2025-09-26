document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("fileInput");
  const imageGrid = document.getElementById("imageGrid");

  // Listener para o evento de mudança no input de arquivo
  fileInput.addEventListener("change", (event) => {
    // Obtém a lista de arquivos selecionados
    const files = event.target.files;

    // Itera sobre a lista de arquivos
    for (const file of files) {
      // Cria um URL temporário para o arquivo (Blob URL)
      const fileURL = URL.createObjectURL(file);

      // Cria o elemento da imagem (<img>)
      const img = document.createElement("img");
      img.src = fileURL;
      img.alt = `Foto para laudo - ${file.name}`;

      // Cria o container para a imagem (div.image-item)
      const imageItem = document.createElement("div");
      imageItem.classList.add("image-item");
      imageItem.appendChild(img);

      // Adiciona o container da imagem à grade
      imageGrid.appendChild(imageItem);
    }

    // Limpa o valor do input
    fileInput.value = "";
  });
});
