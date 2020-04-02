import { Ingredient } from './ingredients';
export class Recette {
  constructor(
    public time: number,
    public type: string,
    public ingredientList: Ingredient[],
    public name: string,
    public instruction: string)  {
  }
}
