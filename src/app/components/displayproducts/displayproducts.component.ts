import { Component, OnInit } from '@angular/core';
import {InventoryserviceService} from '../../dashboard/service/inventoryservice.service'
import {Products} from '../../dashboard/interface/products'
import { Observable } from 'rxjs';



@Component({
  selector: 'app-displayproducts',
  templateUrl: './displayproducts.component.html',
  styleUrls: ['./displayproducts.component.scss']
})
export class DisplayproductsComponent implements OnInit {
  userlist!: Observable<Products[]>;
  constructor(private service:InventoryserviceService) { }

  ngOnInit(): void {
    this.userlist = this.service.fetchData();
    console.log(this.userlist)
  }

}
