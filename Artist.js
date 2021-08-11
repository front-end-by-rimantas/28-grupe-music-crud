class Artist {
    constructor(artistName, currency) {
        this.artistName = artistName;
        this.currency = currency;
        this.pricePerSong = 0;
        this.wallet = 0;
        this.list = [];
    }

    intro() {
        console.log(`Hi, my name is ${this.artistName} and I am a musician!`);
    }

    songPrice(newPrice) {
        this.pricePerSong = newPrice;
        const price = this.formatedMoney(newPrice);
        console.log(`${this.artistName}'s price per song is ${price}`);
    }

    addSong(songName) {
        this.list.push({
            name: songName,
            playCount: 0,
        })
    }

    playlist() {
        console.log(`${this.artistName}'s playlist:`);
        console.log(`====================`);
        let number = 0;
        for (const song of this.list) {
            console.log(`${++number}. ${song.name} (${song.playCount})`);
        }
    }

    playSong(songIndex) {
        const song = this.list[songIndex];
        song.playCount++;
        this.wallet += this.pricePerSong;
        console.log(`Playing song: ${song.name}.`);
    }

    fortune() {
        console.log(`Total lifetime wealth of Raimonda is ${this.formatedMoney(this.wallet)} right now!`);
    }

    formatedMoney(cents) {
        return (cents / 100).toFixed(2) + ' ' + this.currency;
    }
}

module.exports = Artist;