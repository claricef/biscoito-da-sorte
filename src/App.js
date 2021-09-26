import React , {Component} from 'react';
import img from './assets/biscoito.png';
import './estilo.css'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            textoFrase: ''
        };
        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = [
            //link das frases: https://www.blogdocasamento.com.br/70-frases-para-seus-biscoitos-da-sorte/
            'A vida trará coisas boas se tiveres paciência.',
            'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
            'Não compense na ira o que lhe falta na razão.',
            'Defeitos e virtudes são apenas dois lados da mesma moeda.',
           'A maior de todas as torres começa no solo.',
            'Não há que ser forte. Há que ser flexível.',
            'Gente todo dia arruma os cabelos, por que não o coração?',
            'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
            'A juventude não é uma época da vida, é um estado de espírito.',
            'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.'];
    }

    //quebraBiscoito gera um numero aleatório entre a quantidade de dados que tem no array frases
    //ou seja gera um numero que corresponde a uma posição do array
    // entao chama o valor que está nessa posição
    quebraBiscoito(){
       let state = this.state;
       let numAleatorio = Math.floor(Math.random() * this.frases.length); 
       state.textoFrase = '" ' + this.frases[numAleatorio] + ' "'
       this.setState(state);
    }
     render(){
        return(
            <div className="container">
                <img src={img} className="img"/>
                <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
                <h3 className="texto-frase">{this.state.textoFrase}</h3>
            </div>
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        )
    }
}


export default App;