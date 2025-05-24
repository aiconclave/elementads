document.querySelectorAll('.lightbox-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('lightbox-img').src = this.href;
        document.getElementById('lightbox-overlay').style.display = 'flex';
    });
});
document.getElementById('lightbox-overlay').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('lightbox-img').src = '';
});