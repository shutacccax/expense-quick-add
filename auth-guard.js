firebase.auth().onAuthStateChanged(user => {
  if (!user) {
    window.location.href = "/login.html";
    return;
  }

  if (user.email !== "sablayjames@gmail.com") {
    alert("Access denied");
    firebase.auth().signOut();
  }
});
