const cursor = document.getElementById('cursor');

console.log(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.setAttribute(
    'style',
    'top: ' + e.pageY + 'px; left: ' + e.pageX + 'px'
  );
});
