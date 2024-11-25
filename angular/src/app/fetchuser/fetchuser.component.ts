import { Component } from '@angular/core';
import { ApiNetService } from '../api.net.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fetchuser',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule],
  templateUrl: './fetchuser.component.html',
  styleUrl: './fetchuser.component.css',
  providers:[ApiNetService]
})
export class FetchuserComponent {

constructor(private getservice:ApiNetService){}
public fetchdata:any;
public selected:any;

ngOnInit(){
  return this.getservice.fetch().subscribe(data=>{
   this.fetchdata=data
    console.log(data)
  })
}

edit(data:any){
this.selected=data;
}

editform(){
this.getservice.update(this.selected).subscribe(data=>{
  this.selected=null
})
}
}
