import { Component } from '@angular/core';
import { AuthService } from '@myorg/auth';
import { User } from '@myorg/models';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  users: User[] = [];
  constructor(private AuthService: AuthService) {}
  // ngOninit() {
  //   alert('UserListComponent');
  //   this.loadUsers();
  // }

  // loadUsers(): void {
  //   this.AuthService.getUsers().subscribe({
  //     next: (users) => {
  //       this.users = users;
  //       console.log(users);
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //   });
  // }
}
