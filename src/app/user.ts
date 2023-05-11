export class User {
  nom: string;
  prenom: string;
  age: number;
  quote: string;
  photo: string;

  constructor(nom: string, prenom: string, age: number, quote: string, photo: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.quote = quote;
    this.photo = photo;
  }
}
