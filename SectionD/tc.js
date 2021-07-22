class Collection {
  constructor(value, next) {
    this.ivalue = value;
    if (next) this.inext = new Collection(next);
    else this.inext = null;
  }
  get value() {
    return this.ivalue;
  }
  get next() {
    return this.inext;
  }
  add(value) {
    let next;
    for (next = this.inext; next && next.inext; next = next.inext);
    if (!next) next = this;
    next.inext = new Collection(value);
  }
}

let test = new Collection(10, 20);

console.log(test.add());
