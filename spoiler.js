var movies = ['chrome'];

movies.forEach((movie) => {
  var p = document.querySelectorAll('p');

  if(p.length > 0){
    p.forEach((node) => {
      var text = node.textContent;
      var regex = new RegExp(movie, 'gi');
      var newText = text.replace(regex, '😂');
      node.textContent = newText;
    });
  }
});