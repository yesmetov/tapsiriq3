let p = document.querySelector('p');
let btn = document.querySelector('.btn');
let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')
class Message {
  constructor(name, sendTime, text) {
    this.name = name
    this.sendTime = sendTime
    this.text = text
  }

  toHtml() {
    p.innerHTML += (`${this.sendTime} ${this.name}: ${this.text} <br><br>`)
  }
}

class Messenger {

  constructor() {
    this.messages = []
  }

  show_history() {
    this.messages.map(message => message.toHtml())
  }

  send(author, text) {
    let message = new Message(author, gettime(), text)
    this.messages.push(message)
  }
}

function gettime() {
  let now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`
}

btn.addEventListener('click', (event) => {
  event.preventDefault()

  let messenger = new Messenger()
  messenger.send(`${input1.value}`, `${input2.value}`)
  messenger.show_history()
})