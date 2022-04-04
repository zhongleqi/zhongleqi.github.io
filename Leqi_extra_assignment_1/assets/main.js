

document.getElementById('backgroundcolor').addEventListener('click', function() {
    document.body.style.backgroundColor = 'Pink';
});

document.getElementById('fontcolor').addEventListener('click', function() {
    document.body.style.color = 'Red';
});

document.getElementById('fontfamily').addEventListener('click', function() {
    let font = 'monospace'
    document.body.style.fontFamily = 'monospace';
});

document.getElementById('replace').addEventListener('click', function() {
    document.getElementById('replace').innerHTML = 'I am about to give up'
});

document.getElementById('alert').addEventListener('click', function(event) {
    alert("Goodbye, world!");
});
