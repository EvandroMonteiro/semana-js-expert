const uuid = require('uuid');

class Todo {
  constructor({ text, when }) {
    this.text = text;
    this.when = when;

    this.status = '';
    this.id = uuid.v4();
  }

  isValid() {
    // !! converte tudo que fica a frente para falso (null, '', 0, false)
    return !!this.text && !isNaN(this.when.valueOf());
  }
}

module.exports = Todo;