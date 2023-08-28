import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-tracker',
  templateUrl: './delivery-tracker.component.html',
  styleUrls: ['./delivery-tracker.component.css']
})
export class DeliveryTrackerComponent implements OnInit{
orderId:Number=123
deliveryAgentName:string='john D'
customerName: String = 'Vijay Kumar'
deliveryAddress: Array<String> = ['225 Baker Street']
orderPrice: Number = 900
orderVerified: String = 'Order not Verified!'
orderPaymentStatus:String = 'Paid'
productImg: String = 'https://static.toiimg.com//photo/msid87930581/87930581.jpg'

constructor(){

}

ngOnInit(): void {
    
}
verifyOrder(){
this.orderVerified='Order is Verified'
}
}
