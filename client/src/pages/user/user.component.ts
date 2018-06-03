import {Component,OnInit,OnDestroy} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginStatusCheck} from "../../Service/loginfile"
import { ModalController } from 'ionic-angular';
import {ModalPage} from "../model/model";
declare let storage= firebase.storage();
@Component({
    templateUrl:"user.template.html",
})



export class UserComponent implements OnInit,OnDestroy{

	AllUserInfo=[];
	OpenForSellList=[];
	JsonResult:any;
	loggerName:any;
	BuyerItem=[];
	constructor(private _http: HttpClient,
		private _logger:LoginStatusCheck,
		public modalCtrl : ModalController){
	
		 var data = { message : 'hello world' };
         var modalPage = this.modalCtrl.create(ModalPage,data);
         modalPage.present();
         modalPage.onDidDismiss(data => {
      			console.log (data);
      			this._logger.loggerName=data.UserName+"@entropix.com"
      			this.loggerName = this._logger.loggerName
      			this.setData();
      		});
	}

	setData(){
			var response = JSON.parse(localStorage.getItem("DATA"));
			console.log(response);
			this.JsonResult = response;
			for(var i=0;i<this.JsonResult.length;i++){
				if(this.JsonResult[i].email === this._logger.loggerName){
						this.AllUserInfo.push(response[i]);
					}
			}
			console.log(this.AllUserInfo);

		for(var i=0;i<this.JsonResult.length;i++){
			if(this.JsonResult[i].email != this.loggerName && this.JsonResult[i].isopenforsell){
				this.BuyerItem.push(this.JsonResult[i]);
			}
		}
		console.log(this.BuyerItem);
	}
	ngOnInit(){
		console.log("Here you are wellcome");
	}
	ngOnDestroy(){
		console.log("Thanks to visit us");
	}
	openSell(){
			for(var i=0;i<this.OpenForSellList.length;i++){
				for(var j=0;j<this.JsonResult.length;j++){
					if(this.OpenForSellList[i].adhar_id === this.JsonResult[j].adhar_id){
						this.JsonResult[j].isopenforsell = true;
					}
				}
			}
			console.log(this.JsonResult);
			localStorage.setItem("DATA",JSON.stringify(this.JsonResult));
		}
	addToSellList(item){
		this.OpenForSellList.push(item);
	}
	Logout(){
		this._logger.loggerName = null;
		window.location.reload();
	}
}