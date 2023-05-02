// console.dir(document);
// console.log (document.domain); 
// console.log (document.URL);
// console.log (document.title);
document.title = "Index Page";
// console.log (document.forms);

var headerTitle = document.getElementById ("header-title");

var header = document.getElementById ("main-header");

// headerTitle.style.borderBottom = "solid 5px black";

header.style.borderBottom = "solid 3px black";

var head2 = document.getElementById ("h2-head");

head2.style.color = "green";
head2.style.fontWeight = "bold";

var items = document.getElementsByClassName("list-group-item");

items[2].style.backgroundColor = "green";

// items[0].style.fontWeight = "bold";
// items[1].style.fontWeight = "bold";
// items[2].style.fontWeight = "bold";
// items[3].style.fontWeight = "bold";

for (var i = 0; i < items.length; i++)
{
    items[i].style.fontWeight = "bold";
}
