export class Dog {
  id?: number;
  name: string;
  breed: string;
  age: number;
  sex: string;
  colorCoat: string;
  description: string;
  arrivedDate: Date;
  arrivedFrom: string;
  size: string;
  location: string;

  constructor(
    _name: string,
    _breed: string,
    _age: number,
    _sex: string,
    _colorCoat: string,
    _description: string,
    _arrivedDate: Date,
    _arrivedFrom: string,
    _size: string,
    _location: string
  ) {
    this.name = _name;
    this.breed = _breed;
    this.age = _age;
    this.sex = _sex;
    this.colorCoat = _colorCoat;
    this.description = _description;
    this.arrivedDate = _arrivedDate;
    this.arrivedFrom = _arrivedFrom;
    this.size = _size;
    this.location = _location;
  }
}
