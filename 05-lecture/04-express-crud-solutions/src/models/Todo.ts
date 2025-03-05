export class Todo {
  id: number;
  done: boolean;
  date: string;

  constructor(
    public content: string
  ) {
    this.id = Math.round(Math.random()* 1000);
    this.done = false;
    this.date = new Date().toDateString()
  }
}