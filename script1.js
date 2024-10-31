function Player(name, lvl, points) {
    this.name = name;
    this.lvl = lvl;
    this.points = points;
    this.gainXp = function() {
        this.points += Math.floor(Math.random() * 10) + 1;
    
        if (this.points >= 10) {
            this.lvl += 1;
        } else {
            this.lvl -= 1;
        }
    
        return this; // Allows method chaining
    };
    this.Describe = function() {
        console.log(`Name of the player: ${this.name} \nLevel of the player: ${this.lvl} \nPlayer points: ${this.points}`);
    };
    
}

// Create a new player
const Player1 = new Player("chhiring", 4, 30);
Player1.gainXp().Describe(); // This will work correctly now
