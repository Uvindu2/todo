import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { IUser, User } from '../Models/user';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  user = new User();

  constructor(private router: Router,private route:ActivatedRoute, private userService: UserService, private fb: FormBuilder) { }

  editForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    roles: ['', Validators.required],
    email_verified_at: ['', Validators.required],
    created_at: [''],
    updated_at: [''],
  });
  ngOnInit() {


    this.route.params.subscribe((params) => {
      this.user.id = params['id'];
      this.getUserById(this.user.id);

    })
  }
  getUserById(uid: any) {

    this.userService.findUserById(uid).subscribe((res) => {
      console.log(res);
      this.updateForm(res);
    })

  }
  updateForm(user: IUser) {
    this.editForm.patchValue({
      name: user.name,
      email: String(user.email),
      email_verified_at: user.email_verified_at,
      roles: String(user.roles),
      created_at: String(user.created_at),
      updated_at: String(user.updated_at),

    })
  }

  private createFrom(): IUser {
    return {
      ...new User(),
      name: this.editForm.get(['name'])?.value,
      email: this.editForm.get(['email'])?.value,
      roles: this.editForm.get(['roles'])?.value,
      created_at: this.editForm.get(['created_at'])?.value,
      updated_at: this.editForm.get(['updated_at'])?.value,

    };
  }
  save() {
    const user = this.createFrom();
    this.userService.updateUser(this.user.id, user).subscribe(() => {
      alert("Data Updated");
      
      this.router.navigate(['/view-users']);
  
    })

  }
}
