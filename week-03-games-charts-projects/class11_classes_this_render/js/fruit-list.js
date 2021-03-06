import html from './html.js';

function makeTemplate() {
    return html`
        <ul class="fruits"></ul>
    `;
}

function makeFruit(fruit) {
    return html`
        <li class="fruit">
            <h3 class="name" style="background: ${fruit.color};">
                ${fruit.name}
            </h3>
            <p class="price">$${fruit.price.toFixed(2)}</p>
            <img src="assets/${fruit.image ? fruit.image : 'logo.png'}">
            <div class="order-buttons hidden">
                <button class="decrement">-</button>
                <button class="increment">+</button>
                <button class="increment-five">+5</button>
            </div>
        </li>
    `;
}


class FruitList {
    constructor(fruits, onSelect, onOrder) {
        this.fruits = fruits;
        this.onSelect = onSelect;
        this.onOrder = onOrder;
    }

    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('ul');

        for(let i = 0; i < this.fruits.length; i++) {
            this.add(this.fruits[i]);
        }

        return dom;
    }

    add(fruit) {
        const dom = makeFruit(fruit);

        // do work of finding elements _before_ appending

        const listItem = dom.querySelector('li');

        if(this.onSelect) {
            // using "this" here only work because arrow function
            listItem.addEventListener('click', () => {
                this.onSelect(fruit);
            });
        }

        if(this.onOrder) {
            listItem.classList.add('order');
            const buttonsContainer = dom.querySelector('.order-buttons');
            buttonsContainer.classList.remove('hidden');

            const increment = dom.querySelector('button.increment');
            const incrementFive = dom.querySelector('button.increment-five');
            const decrement = dom.querySelector('button.decrement');
            
            increment.addEventListener('click', () => {
                this.onOrder(fruit, 1);
            });
            
            incrementFive.addEventListener('click', () => {
                this.onOrder(fruit, 5);
            });
            
            decrement.addEventListener('click', () => {
                this.onOrder(fruit, -1);
            });
        }

        // append to <ul>, this will empty the fragment
        this.list.appendChild(dom);
    }

    remove(index) {
        this.list.querySelectorAll('li')[index].remove();
    }
}

export default FruitList;