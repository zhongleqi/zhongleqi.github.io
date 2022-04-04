

document.getElementById('backgroundcolor').addEventListener('click', function() {
    console.log(111111)
    document.body.style.backgroundColor = "Pink";
});

document.getElementById('fontcolor').addEventListener('click', function() {
    document.body.style.color = 'Red';
});

document.getElementById('fontfamily').addEventListener('click', function() {
    let font = 'monospace'
    document.body.style.fontFamily = 'monospace';
});

document.getElementById('replacement-button').addEventListener('click', function() {
    document.getElementById('replacement').innerHTML = 'I am about to give up';
});

document.getElementById('alert').addEventListener('click', function(event) {
    alert("Goodbye, world!");
});
