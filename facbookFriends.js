let facebookProfile = {
  name: "Prabhu Vardhan Rao Pill",
  friends: 1295,
  messages: [
    "Graduated From Humber",
    "2018",
    "Started Bootcamp At Lighthouse Labs",
  ],
  postMessage: function () {
    facebookProfile.messages.push("Processing Bootcamp");
    console.log(facebookProfile.messages);
  },
  deleteMessage: function (messageToBeDeleted) {
    facebookProfile.messages.pop();
    console.log(facebookProfile.messages);
  },
  addFriend: function (addAFriend) {
    facebookProfile.friends += 1;
    console.log(facebookProfile.friends);
  },
  removeFriend: function (removeAFriend) {
    facebookProfile.friends -= 1;
    console.log(facebookProfile.friends);
  },
};

facebookProfile.postMessage();
facebookProfile.deleteMessage();
facebookProfile.addFriend();
facebookProfile.removeFriend();
