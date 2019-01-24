var books=["book_1", "book_2", "book_3","book_4","book_5","book_6","book_7","book_8","book_9","book_10"];
console.log(books);

var samList= document.querySelector("#list")
books.forEach((i)=>{
	var newList = document.createElement("li")
	newList.innerHTML =i
	samList.appendChild(newList)
	
})

var obj= {title:"x" ,auther:"x" , language:"x" 
for (var i =0; i< books.length; i++ ){
	
}


-------------------------

let ul = document.createElement("ul");

// append ul to html div
document.getElementById("list").appendChild(ul);

let i;
for (i = 0; i < books.length; i++) {
  let li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML += books[i];
}
