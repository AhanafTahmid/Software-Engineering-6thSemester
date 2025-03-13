//Prototype Implementation

class Proto{
    constructor(){
        this.books = [];
    }
 
    add(title){
        console.log(`Book added ${title}`);
        this.books.push(title);
    }
 
    search(title){
        let n = this.books.length, ok = 0;
        for(let i = 0;i<n;i++){
            if( title == this.books[i]){
                ok = 1;
                break;
            }
        }
        console.log( ok? `Found ${title}`: `Not Found ${title}`);
    }
 
    display(){
        let n = this.books.length;
        if( n == 0 ){
            console.log("No books to display");
            return;
        }
        console.log("\n");
        console.log("Books:");
        for(let i = 0;i<n;i++){
            console.log( this.books[i] );
        }
        console.log("\n");
    }
}

//Adding a new prototype method
Proto.prototype.book_remove_all = function(){
    this.books = [];
    console.log("All books removed");
}
 
const ahanaf = new Proto();
ahanaf.add("BOOK1");
ahanaf.add("BOOK2");
ahanaf.search("BOOK2");
ahanaf.display();

ahanaf.book_remove_all();
ahanaf.display();
