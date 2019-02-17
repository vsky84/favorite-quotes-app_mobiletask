import { Quote } from'../data/quote.interface'

export class QuotesService{
    private favoriteQuotes: Quote[]=[];
    
    addQuoteToFavorites(quote: Quote) {
        console.log(this.favoriteQuotes.indexOf(quote)>-1);
        if(!(this.favoriteQuotes.indexOf(quote)>-1)) {
            this.favoriteQuotes.push(quote);
            console.log(this.favoriteQuotes);
        }
        else console.log("WARN: QUOTE EXIST IN FAVORITE");
    }

    removeQuoteFromFavorites(quote: Quote){
        if(this.favoriteQuotes.indexOf(quote)>-1) {
            this.favoriteQuotes.splice(this.favoriteQuotes.indexOf(quote),1);
            console.log(this.favoriteQuotes);
        }
        else console.log("ERROR: QUOTE NOT FOUND IN FAVORITE")
    }

    getAllFavoriteQuotes() {
        return this.favoriteQuotes;
    }

    isFavorite(quote: Quote) {
        return this.favoriteQuotes.indexOf(quote)>-1;
    }

}