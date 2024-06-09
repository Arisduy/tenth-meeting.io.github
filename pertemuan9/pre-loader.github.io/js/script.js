
document.getElementById('myButton').addEventListener('click', function() {
    this.classList.add('loading');
    setTimeout(() => {
        window.location.href = '../pertemuan_8/first.html';
    }, 1000);
});
