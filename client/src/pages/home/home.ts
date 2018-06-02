import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	email:any
	password:any
	errorMessage:any

  constructor(public navCtrl: NavController) {

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
