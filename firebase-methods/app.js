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
	const ulList = document.querySelector("ul")

	//Create refernce ....ref("/newObject") is the same as ....ref().child("newObject")
	const dbRefObject = firebase.database().ref("/newObject")   
	const dbRefList = dbRefObject.child("hobbies")

	//Sync object changes (event, collback)
	dbRefObject.on("value", snapshot => {
		preObject.innerText = JSON.stringify(snapshot.val(), null, 3)
	})

	//Sync list changes (event: child_added -> ONLY ADDED!)
	dbRefList.on("child_added", snapshot => {
		const li = document.createElement("li")
		li.innerText = snapshot.val()
		li.id = snapshot.key
		ulList.appendChild(li)
	})

	dbRefList.on("child_changed", snapshot => {
		const liChanged = document.querySelector(`#${snapshot.key}`)
		liChanged.innerText = snapshot.val()
	})

	dbRefList.on("child_removed", snapshot => {
		const liToRemove = document.querySelector(`#${snapshot.key}`)
		liToRemove.remove()
	})

})()