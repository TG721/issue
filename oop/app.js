const header1 = header({text:"Hello",importance:'h1'})
class App extends Component {
    constructor(props) {
        super(props);
    }
    
}

document.getElementById('root').appendChild(new App({children: [header1]}).render());
