export class SettingsService {
    private altBackground = false;
    setBackground(isAlt:boolean) {
        this.altBackground=isAlt;
        window.localStorage.setItem('favBg',JSON.stringify(this.altBackground));
    }
    isAltBackground() {
        return this.altBackground;
    }
    initializeFavBackground() {
        this.altBackground=JSON.parse(window.localStorage.getItem('favBg'));
    }
}