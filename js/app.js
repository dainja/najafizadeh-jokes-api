class Jokster {

  constructor(joker) {

    this.joker = joker;

    if (joker.includes('zlatan')) {
      this.url = 'http://www.zlatanjokes.site/joke ';
    }

    if (joker.includes('chuck')) {
      this.url = 'https://api.chucknorris.io/jokes/random'
    }

  }


  generateJoke() {

    const request = new XMLHttpRequest;
    request.open('GET', `${this.url}`, true);
    request.send()


    request.onload = function () {

      if (this.status == 200){

        let data = this.responseText

        data = JSON.parse(data)

        document.querySelector('.grid-joke').innerHTML = `
        <blockquote class="grid-text"><cite>${data.joke || data.value}</cite></blockquote>
        `;

      }
    }



  }
}


class Zlatan {

  zlatanJoke() {

    const zlatanJokster = new Jokster('zlatan')

    zlatanJokster.generateJoke()

  }
}


class Chuck {

  chuckJoke() {

    const chuckJokster = new Jokster('chuck')

    chuckJokster.generateJoke()
  }
}


const chuck = new Chuck
const zlatan = new Zlatan




document.querySelector('.btn-zlatan').addEventListener('click', zlatan.zlatanJoke)
document.querySelector('.btn-chuck').addEventListener('click', chuck.chuckJoke)














// function generateJoke() {

//   const request = new XMLHttpRequest;

//   request.onload = function () {

//     if (this.status == 200) {

//       let data = this.responseText

//       data = JSON.parse(data)

//       document.querySelector('.grid-joke').innerHTML = `
//       <blockquote class="grid-text"><cite>${data.joke}</cite></blockquote>     `;

//     }
//   }
//   request.open('GET', 'https://yacdn.org/serve/http://www.zlatanjokes.site/joke', true);
//   request.send()
// }
