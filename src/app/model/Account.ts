export class Account{
  id:number =0;
  name:string='';
  password:string='';


  constructor(id: number, name: string, password: string) {
    this.id = id;
    this.name = name;
    this.password = password;
  }
}
