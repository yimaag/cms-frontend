import { Pageable } from "../pageble-sort/pageable.model";
import { Sort } from "../pageble-sort/sort.model";
import { User } from "./user.models";

export class PageOfUser {
  constructor(
    public content?: User[],
    public empty?: boolean,
    public first?: boolean,
    public last?: boolean,
    public number?: number,
    public numberOfElements?: number,
    public pageable?: Pageable,
    public size?: number,
    public sort?: Sort,
    public totalElements?: number,
    public totalPages?: number,
  ) {}
}
