(function () {

	// Initialize Firebase
	const config = {
		apiKey: "AIzaSyC4z8ow8s5wko6yq6EdqF8z7O907Qu2OPk",
		authDomain: "isa-sandbox-learn.firebaseapp.com",
		databaseURL: "https://isa-sandbox-learn.firebaseio.com",
		projectId: "isa-sandbox-learn",
		storageBucket: "isa-sandbox-learn.appspot.com",
		messagingSenderId: "618143956724"
	};
	firebase.initializeApp(config);

	//Get element
	const preObject = document.querySelector("#object");

	//Create refernce
	const dbRefObject = firebase.database().ref().child("newObject")

	//Sync object changes (event, collback)
	dbRefObject.on("value", snapshot => {
		preObject.innerText = JSON.stringify(snapshot.val(), null, 3)
	})


})()