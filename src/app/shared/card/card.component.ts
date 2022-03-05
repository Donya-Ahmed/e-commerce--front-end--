import { Component, OnInit, Input} from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()sharedData:Product={
    title:"",
     discription:"",
      categories:"",
     subcategory:"",
     attributes:[
     {
                attributeName:"" ,
                 values:[
                      {
                          value:"",
                           quantity:0
                      }

                        ]

     }
     ],
     price:0,
     image:"",
     avaliable:true,
     createdAt: "",
     updatedAt:"",
     _id:""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
