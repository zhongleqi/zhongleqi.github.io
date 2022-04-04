

document.getElementById('backgroundcolor').addEventListener('click', function() {
    document.body.style.backgroundColor = 'Pink';
});

document.getElementById('fontcolor').addEventListener('click', function() {
    document.body.style.color = 'Red';
});

document.getElementById('fontfamily').addEventListener('click', function() {
    document.body.style.fontfamily = 'monospace';
});

document.getElementById('replace').addEventListener('click', function() {
    document.getElementById('replace').innerHTML = 'I give up'
});

document.getElementById('alert').addEventListener('click', function(event) {
    alert("Goodbye, world!");
});
