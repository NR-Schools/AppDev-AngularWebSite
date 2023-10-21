export class Dog {
  id?: number;
  name: string;
  breed: string;
  dob: Date;
  sex: string;
  height: number;
  weight: number;
  colorCoat: string;
  description?: string;

  constructor(
    _name: string,
    _breed: string,
    _dob: Date,
    _sex: string,
    _height: number,
    _weight: number,
    _colorCoat: string,
    _description: string
  ) {
    this.name = _name;
    this.breed = _breed;
    this.dob = _dob;
    this.sex = _sex;
    this.height = _height;
    this.weight = _weight;
    this.colorCoat = _colorCoat;
    this.description = _description;
  }

  static NoDog(): Dog {
    return new Dog('', '', new Date(), '', -1, -1, '', '');
  }
}
