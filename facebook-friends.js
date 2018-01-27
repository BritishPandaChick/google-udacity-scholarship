/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
  name: "Sarah",
  friends: 41,
  messages: ["Article 1", "Article 2", "Image 1", "Status Update"],

  postMessage: function (message) {
      facebookProfile.messages.push(message);
  },

  deleteMessage: function(index) {
    facebookProfile.messages.splice(index, 1);
  },

  addFriend: function() {
    facebookProfile.friends++;
  },

  removeFriend: function() {
    facebookProfile.friends--;
  },
};

facebookProfile.postMessage("Testing");
console.log(facebookProfile.messages);

facebookProfile.deleteMessage(0);
console.log(facebookProfile.messages);

console.log(facebookProfile.friends);
facebookProfile.addFriend();

console.log(facebookProfile.friends);
facebookProfile.removeFriend();
