const getTheTitles = function(books) {
    let titles = [];
function getTitle(book) {
  titles.push(book.title);
}

books.forEach(getTitle);
return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
