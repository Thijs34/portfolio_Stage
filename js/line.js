document.addEventListener("DOMContentLoaded", () => {
    const projectTitles = document.querySelectorAll('.projects_name');
    
    projectTitles.forEach((title) => {
      const titleHTML = title.innerHTML.trim();
      const words = titleHTML.split(/(\s+)/); // Split on spaces, keep them for joining

      const firstWordIndex = words.findIndex(word => word.trim() !== "");
      words[firstWordIndex] = `<span class="underline-first-word">${words[firstWordIndex]}</span>`;
      
      title.innerHTML = words.join('');
    });
  });