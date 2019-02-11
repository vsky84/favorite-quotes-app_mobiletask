import { Quote } from'../data/quote.interface'

export class QuotesService{
    private favoriteQuotes: Quote[]=[];
    
    addQuoteToFavorites(quote: Quote) {
        this.favoriteQuotes.push(quote);
    }

    removeQuoteFromFavorites(quote: Quote){
        //TODO: remove quote in key
    }

    getAllFavoriteQuotes() {
        return this.favoriteQuotes;
    }

    isFavorite(quote: Quote) {
        //TODO: check if quote is favorite or not
    }

}