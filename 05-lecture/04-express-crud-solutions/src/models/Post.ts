export class Post {
  id: number
  
  constructor(
    public title: string,
    public content: string,
    public author: string
  ) {
    this.id = Math.round(Math.random()* 1000);
  }
}