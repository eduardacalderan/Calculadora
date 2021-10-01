function creatCalculator() {
  return {
    //atributos:
    input: document.querySelector('.display'),

    //inicializar a calculadora
    start() {
      this.buttonClicks()
      this.pressEnter()
    },

    //habilitar enter para mostrar resultado
    pressEnter() {
      this.input.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.calculate()
        }
      })
    },

    //pegar o valor do botão clicado
    btnForInput(valor) {
      this.input.value += valor
    },

    //limpar o campo do input
    clearInput() {
      this.input.value = ''
    },

    //apagar um número
    dellNumber() {
      this.input.value = this.input.value.slice(0, -1)
    },

    //calcular
    calculate() {
      let account = this.input.value

      try {
        account = eval(account)
        if (!account) {
          alert('Conta inválida!')
          return
        }

        this.input.value = account
      } catch (e) {
        alert('Conta inválida!')
        return
      }
    },

    //clicar no botão e executar suas ações
    buttonClicks() {
      document.addEventListener('click', e => {
        const el = e.target

        if (el.classList.contains('btn-num')) {
          this.btnForInput(el.innerText)
        }

        if (el.classList.contains('btn-clear')) {
          this.clearInput()
        }

        if (el.classList.contains('btn-del')) {
          this.dellNumber()
        }

        if (el.classList.contains('btn-eq')) {
          this.calculate()
        }
      })
    }
  }
}

const calculator = creatCalculator()
calculator.start()
