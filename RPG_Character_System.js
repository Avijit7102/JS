/* 
In this challenge, students will create an RPG (Role-Playing Game) character system using JavaScript objects. 
They’ll apply all the concepts they’ve learned, including nested objects, methods, constructors, and looping through properties.


Instructions:
Create a constructor function called Character that initializes a character’s:
name (string)
classType (string, e.g., "Warrior", "Mage", "Archer")
level (number)
health (number)
inventory (an array of items)
stats (an object with attack, defense, and speed properties)


Add methods to:
Level up the character: Increase their level by 1 and improve their stats.
Take damage: Subtract health points based on the damage received.
Print character summary: Display the character’s name, class, level, and health.

Create 2 character instances using the constructor function.
Loop through the characters’ stats and print each stat with its value.
*/

function Character(name, classType, level, health, inventory, stats) {
  this.name = name;
  this.classType = classType;
  this.level = level;
  this.health = health;
  this.inventory = [];
  this.stats = {
    attack: 10 * level,
    defense: 10 * level,
    speed: 5 * level,
  };
}

Character.prototype.levelUp = function () {
  this.level += 1;
  this.stats.attack += 5;
  this.stats.defense += 4;
  this.stats.speed += 2;

  console.log(`${this.name} leveled up to level ${this.level}!`);
};

Character.prototype.takeDamage = function (amount) {
  this.health -= amount;
  if (this.health < 0) {
    this.health = 0;
  }
  console.log(
    `${this.name} took ${amount} damage. Health is now ${this.health}`
  );
};

Character.prototype.printSummary = function () {
  console.log(`--- Character Summary ---`);
  console.log(`Name: ${this.name}`);
  console.log(`Class: ${this.classType}`);
  console.log(`Level: ${this.level}`);
  console.log(`Health: ${this.health}`);
  console.log(`Stats: `);
  for (let stat in this.stats) {
    console.log(`${stat}: ${this.stats[stat]}`);
  }
};

let aragorn = new Character("Aragorn", "Warrior", 2, 100);

aragorn.printSummary();
aragorn.levelUp();
aragorn.printSummary();
