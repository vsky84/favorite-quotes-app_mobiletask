import { Quote } from'../data/quote.interface'

export class QuotesService{
    private favoriteQuotes: Quote[]=[];

    addQuoteToFavorites(quote: Quote) {
        console.log(this.favoriteQuotes.indexOf(quote)>-1);
        if(!(this.favoriteQuotes.indexOf(quote)>-1)) {
            this.favoriteQuotes.push(quote);
            //this.saveToCache();
            console.log(this.favoriteQuotes);
        }
        else console.log("WARN: QUOTE EXIST IN FAVORITE");
    }
    addNewQuoteToFavorites(author: string, quote: string) {
        let quoteId = this.favoriteQuotes.length.toString();
        let newQuote:Quote={
            id:quoteId,
            person:author,
            text:quote
        }
        this.addQuoteToFavorites(newQuote);
    }
    removeQuoteFromFavorites(quote: Quote){
        if(this.favoriteQuotes.indexOf(quote)>-1) {
            this.favoriteQuotes.splice(this.favoriteQuotes.indexOf(quote),1);
            //this.saveToCache();
            console.log(this.favoriteQuotes);
        }
        else console.log("ERROR: QUOTE NOT FOUND IN FAVORITE")
    }

    getAllFavoriteQuotes() {
        return this.favoriteQuotes;
    }
    // saveToCache() {
    //     window.localStorage.setItem('favorites',JSON.stringify(this.favoriteQuotes))
    // }
    isFavorite(quote: Quote) : boolean {
        // console.log("Key: " + quote.person +" result: " + (this.favoriteQuotes.indexOf(quote)>-1));
        return this.favoriteQuotes.indexOf(quote)>-1;
    }
    // storeList(token: string) {
    //     const uid=this.authSvc.getCurrentUser().uid;
    //     return this.http
    //     .put('https://mobile2-quotes-app-37148.firebaseio.com/' + uid +
    //     '/fav-quotes.json?auth='+token,this.favoriteQuotes)
    //     .map((response: Response)=>{
    //         return response.json();
    //     })
    // }
    
    // initializeFavorites() {
    //     this.favoriteQuotes=JSON.parse(window.localStorage.getItem('favorites'));
    // }
}