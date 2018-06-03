import { ViewController,NavController ,NavParams} from 'ionic-angular';
import {Component} from "@angular/core"
@Component({
templateUrl: 'model.html',
})
export class ModalPage {
	username:any;

constructor(public navCtrl: NavController, public viewCtrl : ViewController ,public navParams: NavParams) {
	console.log('ionViewDidLoad ModalPage');
    console.log(this.navParams.get('message'));
}
public closeModal(){
    this.viewCtrl.dismiss({
    	"UserName":this.username,
    });
}
}