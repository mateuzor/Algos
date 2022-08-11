var fs = require("fs");
class Solution {
  email(birthday) {
    if (birthday === "") return [];

    var text = fs.readFileSync(require.resolve("./friends.txt"), "utf8");

    const friendsArray = text.split("\n");

    return friendsArray.reduce((greetings, friend) => {
      const friendBirthDay = friend.split(",")[2].trim();

      if (birthday === friendBirthDay) {
        const friendName = friend.split(",")[1].trim();
        greetings.push(`Happy birthday, dear ${friendName}!`);
      }
      return greetings;
    }, []);
  }
}

module.exports = Solution;
