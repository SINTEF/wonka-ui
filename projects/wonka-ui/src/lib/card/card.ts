export interface Card<T> {
  input?: T;
  imageUrl?: string;
  title: string;
  description: string;
  content: string;
  actions?: Action[];
}

export class Action {

  myMethod: () => void;
  title: string;

  constructor(title: string, myMethod: () => void) {
    this.title = title;
    this.myMethod = myMethod;
  }

  run(): void {
    this.myMethod();
  }
}
