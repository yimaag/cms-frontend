import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabelValue, UserSortOptions } from 'src/app/constants/general-constants';
import { QueryParams } from 'src/app/model/query-models/query-models';
import { PageOfUser } from 'src/app/model/user-management/page-of-user.model';
import { User } from 'src/app/model/user-management/user.models';
import { UserService } from 'src/app/services/user-management/user.service';
import { Utility } from 'src/app/utility/utility';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: User[] = [];
  usersQueryParams!: QueryParams;
  pageOfUser!: PageOfUser;
  userSortParams: LabelValue[] =[];
  userSortOptions: LabelValue[] = UserSortOptions;
  itemCount: LabelValue = new LabelValue();
  page: number = 0;
  isLoading: boolean = false;
  deletableUser!: User;
  deletableUserId!: number;

  constructor(private userService: UserService,
    private router: Router,
    public utility: Utility) { }

  ngOnInit(): void {
    this.usersQueryParams = new QueryParams();
    this.pageOfUser = new PageOfUser();
    this.deletableUser = new User();
    this.getAllUsers();
  }

  getAllUsers(): void {
    let userSortParamsString: string[] = this.userSortParams.map((sort) => {
      return sort.value;
    });
    this.usersQueryParams = new QueryParams();
    this.usersQueryParams.itemCount = this.itemCount.value;
    this.userService.getAllUsers(this.usersQueryParams).subscribe((response) => {
      this.pageOfUser = response;
    });
  }


  deleteUser(user: User) {
    try {
     /* this.isLoading = true;
      this.userService.deleteUserById().subscribe((_) => {
        this.getAllUsers();
        this.utility.closeModal('modal-deleteprovider');
        this.isLoading = false;
      });*/
    } catch (error) {
      this.isLoading = false;
    }
  }

}
