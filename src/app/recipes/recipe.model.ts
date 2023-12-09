export class Recipe {
    public name: string;
    public descp: string;
    public imagePath: string;

    constructor(recipeName: string, recipeDesciption: string, recipeImagePath: string) {
        this.name = recipeName;
        this.descp = recipeDesciption;
        this.imagePath = recipeImagePath;
    }

}