export class LabelValue {
  label?: string;
  value?: any;
}

export const UserSortOptions: LabelValue[] = [
  {label: 'Name - Ascending', value: 'name-asc'},
  {label: 'Name - Descending', value: 'name-desc'},
  {label: 'Surname - Ascending', value: 'surname-asc'},
  {label: 'Surname - Descending', value: 'surname-desc'},
  {label: 'Username - Ascending', value: 'username-asc'},
  {label: 'Username - Descending', value: 'username-desc'},
  {label: 'E-Mail - Ascending', value: 'email-asc'},
  {label: 'E-Mail - Descending', value: 'email-desc'},
  {label: 'Role - Ascending', value: 'userRole-asc'},
  {label: 'Role - Descending', value: 'userRole-desc'},
  {label: 'Creation Time - Ascending', value: 'creationTime-asc'},
  {label: 'Creation Time - Descending', value: 'creationTime-desc'},
];
