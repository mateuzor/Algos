var fs = require("fs");

class Solution {
  email(birthday) {
    var text = fs.readFileSync(
      "C:\\Users\\mateu\\POCS\\algo-exercises\\birthday-email\\friends.txt",
      "utf8"
    );

    if (birthday === "") return [];

    const friendsArray = text.split("\r");
    let friendsGreeted = [];

    friendsArray.forEach((friend) => {
      const friendBirthDay = friend.split(",")[2].trim();

      if (birthday === friendBirthDay) {
        const friendName = friend.split(",")[1].trim();
        friendsGreeted.push(`Happy birthday, dear ${friendName}!`);
      }
    });
    return friendsGreeted;
  }
}

module.exports = Solution;
