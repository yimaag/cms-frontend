import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from 'src/app/enums/service.enum';
import { CustomHttpUrlEncodingCodec } from 'src/app/main/encoder';
import { QueryParams } from 'src/app/model/query-models/query-models';
import { PageOfUser } from 'src/app/model/user-management/page-of-user.model';
import { User } from 'src/app/model/user-management/user.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly userApiUrl = environment.endPoint  + Service.USER;
  constructor(private http: HttpClient) { }

  getAllUsers(usersParams?: QueryParams): Observable<PageOfUser> {
    let queryParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
    if (usersParams?.page) {
      queryParams = queryParams.set('page', <any>usersParams.page);
    }
    if (usersParams?.pageable) {
      queryParams = queryParams.set('pageable', <any>usersParams.pageable);
    }
    return this.http.get<PageOfUser>(this.userApiUrl, {params: queryParams});
  }

  deleteUserById(userId: number): Observable<number> {
    return this.http.delete<number>(this.userApiUrl + `/${userId}`);
  }
}
