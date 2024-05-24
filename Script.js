function smoothScroll(event) {
    event.preventDefault(); // Impede o comportamento padrão de navegação
  
    const targetId = event.currentTarget.getAttribute("href").substring(1); // Obtém o ID do alvo
    const targetElement = document.getElementById(targetId); // Obtém o elemento de destino
  
    // Verifica se o elemento de destino existe
    if (targetElement) {
      // Usa a função scrollTo da SmoothScroll.js para rolar suavemente até o elemento de destino
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
      });
    }
  }