// Chronicle — lightbox for figure images (same behavior as baty.net)
document.querySelectorAll('figure img').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    const dialog = document.createElement('dialog');
    dialog.className = 'lightbox';
    const clone = img.cloneNode();
    clone.removeAttribute('width');
    clone.removeAttribute('height');
    dialog.append(clone);
    document.body.append(dialog);
    dialog.showModal();
    dialog.addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => dialog.remove());
  });
});
