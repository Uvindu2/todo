import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../services/user.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.scss']
})
export class ViewAllUsersComponent implements OnInit{
  user: User[] = [];
  // User=new User();
  public displayedColumns =  ['name','email','createdDate','roles','action'];
  public dataSource :any= new MatTableDataSource<User>();

  constructor(private userService:UserService){}

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngOnInit(){
this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getUsers().subscribe((res) => {
      this.dataSource.data = res
      console.log(res);
      alert(JSON.stringify(res));
    })
  }
  deleteUser(id:any){

      this.userService.deleteById(id).subscribe((res)=>{
        alert("Deleted Successfully");
      })
  }
}
