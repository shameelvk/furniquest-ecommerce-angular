import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {

  constructor(private routerId:ActivatedRoute,private api:ApiService){}
  data:any=[];
  ngOnInit(){
    this.api.getProducts().subscribe((res:any)=>{
      let id=this.routerId.snapshot.paramMap.get('id')
      let responses=res.data
     let products=responses.filter((p:any)=>{
        if(p.id==id){
            return p;
        }
    }
    
    )
    
    
      this.data=products[0]
      
    })

  }


}
