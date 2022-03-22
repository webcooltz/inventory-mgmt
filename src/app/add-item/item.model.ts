export class Item {
  name!: string;
  id!: string;
  brand!: string;
  model!: string;
  datePurchased!: Date;
  dateAdded!: Date;

  constructor(name: string, id: string, brand: string, model: string,
              datePurchased: Date, dateAdded: Date) {
    this.name = name;
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.datePurchased = datePurchased;
    this.dateAdded = dateAdded;
  }
}
