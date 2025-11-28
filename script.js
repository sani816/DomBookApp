let bookArr=[]
const imgurl="https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg";

function addBook(){
    let title=document.getElementById("title").value;
    let auther=document.getElementById("auther").value;
    let category=document.getElementById("category").value;
   
    if(!title || !auther || !category){
        alert("Please fill the all field");
        return;
    }

    let book={
       title,
       auther,
       category,
       imgURL:imgurl
    };

    bookArr.push(book);
    renderBooks(bookArr);

    document.getElementById("title").value=""
    document.getElementById("auther").value=""
    document.getElementById("category").value=""
}
 function renderBooks(bookList) {
            let container = document.getElementById("booksContainer");
            container.innerHTML = "";

            bookList.forEach((book, index) => {
                let card = document.createElement("div");
                card.className = "card";

                //image
                let img = document.createElement("img");
                img.src = book.imgURL;

                // Title
                let title = document.createElement("h3");
                title.textContent = `Title:${book.title}`;

                // Author
                let auther = document.createElement("p");
                auther.textContent = `Auther:${book.auther}`;
                // Category
                let category = document.createElement("p");
                category.textContent = `Category:${book.category}`;

                // Delete button
                let deleteBtn = document.createElement("button");
                deleteBtn.className = "deleteBtn";
                deleteBtn.textContent = "Delete";

                deleteBtn.addEventListener("click", function () {
                    deleteBook(index);
                });

                // Append everything to card
                card.appendChild(img);
                card.appendChild(title);
                card.appendChild(auther);
                card.appendChild(category);
                card.appendChild(deleteBtn);

                // Add card to container
                container.appendChild(card);
            });
        }

        function deleteBook(index) {
            bookArr.splice(index, 1);
            renderBooks(bookArr);
        }

        function shortAZ() {
            bookArr.sort((a, b) => a.title.localeCompare(b.title));
            renderBooks(bookArr);
        }

        function shortZA() {
            bookArr.sort((a, b) => b.title.localeCompare(a.title));
            renderBooks(bookArr);
        }

        function filterBook() {
            let category = document.getElementById("filterCategory").value;


            // category => fiction

            if (category === "All") {
               renderBooks(bookArr);
                return;
            }

            let filtered = bookArr.filter(book => book.category === category);
            renderBooks(filtered);
        }