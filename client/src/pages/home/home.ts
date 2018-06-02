import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare let firebase:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

	setData(){
		// Initialize Cloud Firestore through Firebase
		var db = firebase.firestore();
	  	
  	db.collection("ANGELHACK-USER-Details").add({
		    fullname: "Bharat Saraswat",
		    aadharid: 900080007000,
		    coordinates: [23, 67]
		})
		.then(function(docRef) {
		    console.log("Document written with ID: ", docRef.id);
		})
		.catch(function(error) {
		    console.error("Error adding document: ", error);
		});
	}



  authLogin(){
  	firebase.auth().signInWithEmailAndPassword(this.email, this.password)
  	.then(function(){
  		alert('logged in')
  	})

  	.catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  alert(errorCode);
	});
  }
  
}
