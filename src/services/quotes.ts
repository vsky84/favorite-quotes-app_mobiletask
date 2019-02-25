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
    // initializeFavorites() {
    //     this.favoriteQuotes=JSON.parse(window.localStorage.getItem('favorites'));
    // }
}