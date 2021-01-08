"use strict";

// Once upon a time, on a way through the old wild mountainous west,…

// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed a mountainous desert the smart way.

// The directions given to the man are, for example, the following (depending on the language):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

// or

// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };

// or

// [North, South, South, East, West, North, West]

// You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

// ["WEST"]

// or

// { "WEST" }

// or

// [West]

// Other examples:

// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

function dirReduc(arr) {
  const directions = [...arr];
  let index = 0;
  while (index < directions.length) {
    if (
      (directions[index] == "NORTH" && directions[index + 1] == "SOUTH") ||
      (directions[index] == "SOUTH" && directions[index + 1] == "NORTH") ||
      (directions[index] == "WEST" && directions[index + 1] == "EAST") ||
      (directions[index] == "EAST" && directions[index + 1] == "WEST")
    ) {
      directions.splice(index, 2);
      index = 0;
      continue;
    }

    index++;
  }
  return directions;
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
); // ["WEST"]
