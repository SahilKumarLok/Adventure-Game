#! /usr/bin/env node
import inquirer from "inquirer";

class Character {
  name: string;
  fuel: number = 100;

  constructor(name: string) {
    this.name = name;
  }

  decreaseFuel() {
    this.fuel -= 25;
  }
}

class Player extends Character {
  constructor(name: string) {
    super(name);
  }
}

class Opponent extends Character {
  constructor(name: string) {
    super(name);
  }
}

async function main() {
  const player = await inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "Please Enter Your Name: "
    }
  ]);

  const opponent = await inquirer.prompt([
    {
      name: "Select",
      type: "list",
      message: "Select Your Opponent",
      choices: ["Alien", "Zombie"],
    }
  ]);

  const p1 = new Player(player.name);
  const o1 = new Opponent(opponent.Select);

  while (true) {
    const ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: "What would you like to do",
        choices: ["Attack", "Run"],
      }
    ]);

    if (ask.opt === "Attack") {
      const num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.decreaseFuel();
      } else {
        o1.decreaseFuel();
      }
      console.log(`${p1.name} fuel is ${p1.fuel}`);
      console.log(`${o1.name} fuel is ${o1.fuel}`);
    } else if (ask.opt === "Run") {
      console.log(`${p1.name} is running away from ${o1.name}`);
    }
  }
}

main();