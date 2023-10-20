export class Dog {
    id?: number;
    name: string;
    breed: string;
    dob: Date;
    sex: string;
    height: number;
    weight: number;
    color_coat: string;
    description?: string;
    adopt_date?: Date;

    constructor(
        _name: string, _breed: string, _dob: Date, _sex: string,
        _height: number, _weight: number, _color_coat: string,
        _description: string, _adopt_date: Date) {
        this.name = _name;
        this.breed = _breed;
        this.dob = _dob;
        this.sex = _sex;
        this.height = _height;
        this.weight = _weight;
        this.color_coat = _color_coat;
        this.description = _description;
        this.adopt_date = _adopt_date;
    }
}
