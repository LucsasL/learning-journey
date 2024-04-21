class Box<Type> {
  private content: Type;

  constructor(initialContent: Type) {
    this.content = initialContent;
  }

  getContent(): Type {
    return this.content;
  }

  setContent(newContent: Type): void {
    this.content = newContent;
  }
}

const stringBox = new Box<string>("Don't know what to write here.");
console.log(stringBox.getContent());

stringBox.setContent("New content added.");
console.log(stringBox.getContent());

const numberBox = new Box<number>(20);
console.log(numberBox.getContent());