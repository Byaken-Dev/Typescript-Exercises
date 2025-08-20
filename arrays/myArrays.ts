const superHeroes: string[] = [];
const heroPower: Array<number> = []; //Another way to define an array with a specific type

type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];
const MLModels: number[][] = [
  [255, 255, 255],
  [0, 100, 250],
]; // Array of arrays, each containing numbers

superHeroes.push("Ironman");
heroPower.push(20);
allUsers.push({ name: "John", isActive: true });
