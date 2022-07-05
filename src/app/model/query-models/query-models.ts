export class QueryParams {
  constructor(
    public page: number = 0,
    public pageable?: boolean,
    public itemCount?: number,
    public pageSize?: number,
    public sortParam?: string[],
    public id?: number,
    public name?: string,
    public surname?: string,
    public username?: string,
    public email?: string,
    public password?: string,
    public userRole?: string,
    public creationTime?: number,
  ) {}
}
