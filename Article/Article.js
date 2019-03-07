// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = this.domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open");
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to 
iterate over the articles NodeList and create a new instance of Article by passing in each 
article as a parameter to the Article class.

*/

let articles = document.querySelectorAll(".article");

articles.forEach(function(article) {
  return new Article(article);
});

TweenMax.to(".menu-button", 1.5, {
  backgroundColor: "#448c6d",
  x: 0,
  rotation: 180
});

TweenMax.staggerFrom(
  ".article",
  1.5,
  { opacity: 0, top: "100px", ease: Bounce.easeOut, scale: 1.1 },
  0.4
);

TweenMax.staggerFrom(".lambda-school", 1.5, {
  backgroundColor: "#448c6d",
  x: 0
});
