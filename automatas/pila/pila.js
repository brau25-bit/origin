class Pila {
    constructor() {
        this.items = [];
    }

    push(elemento) {
        this.items.push(elemento);
    }

    pop() {
        if(this.isEmpty()) {
            return "La pila está vacía";
        }
        return this.items.pop();
    }

    peek() {
        if(this.isEmpty()) {
            return "La pila está vacía";
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }
}

const pila = new Pila();
pila.push(10);
pila.push(20);
pila.push(30);

pila.print();
console.log(pila.pop());
console.log(pila.peek());
pila.print();
