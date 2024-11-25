import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiNetService } from '../api.net.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { profile } from 'node:console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-useradd',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterLink,CommonModule],
  templateUrl: './useradd.component.html',
  styleUrl: './useradd.component.css',
  providers: [ApiNetService]
})
export class UseraddComponent {

  constructor(private getservice: ApiNetService,private route:Router) { }


  public user = {
    name: '',
    email: '',
    password: '',
    profile: ''

  }
  images: File | null = null;
  getfile(filename:any){
    this.images=filename.target.files[0];
    console.log(filename)
  }
  adduser() {
    const form = new FormData
form.append('name',this.user.name);
form.append('email',this.user.email);
form.append('password',this.user.password);
form.append('profile',this.images as File);


this.getservice.add(form).subscribe(data=>{
  debugger;
  this.route.navigate(['fetchuser']);

})

  }
}
