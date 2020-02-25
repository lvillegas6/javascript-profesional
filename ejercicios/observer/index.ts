interface Observer {
    update: (data: any) => void
}

interface Subject {
    subscribe: (observer: Observer) => void
    unsubscribe: (observer: Observer) => void
}

class BitCoinPrice implements Subject{
    
    private observers: Observer[] = []

    constructor(){
        const input: HTMLInputElement = document.querySelector('#value')
        input.addEventListener('input', () =>{
            this.notify(input.value)
        })
    }

    subscribe(observer: Observer){
        this.observers.push(observer)
    }

    unsubscribe(observer: Observer){
        const index = this.observers.findIndex(obs => {
            return obs === observer
        })

        this.observers.splice(index, 1)
    }

    notify(data: any){
        this.observers.forEach(obs => obs.update(data))
    }
}

class priceDispley implements Observer{
    
    private el: HTMLElement

    constructor(el: HTMLElement){
        this.el = el
    }

    update(data: any){
        this.el.innerText = `$${data}`
    }
}

const value = new BitCoinPrice()
const display = new priceDispley(document.querySelector('#price'))
const display2 = new priceDispley(document.querySelector('#price2'))

value.subscribe(display)
value.subscribe(display2)

setTimeout( () =>{
    value.unsubscribe(display)
}, 5000)