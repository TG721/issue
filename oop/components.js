class header extends Component {
    constructor(props) {  //{text,importance} // h1 h2 h3 h4 h5
        super(props);
        this.element = document.createElement(this.props.importance);
        this.element.innerText = this.props.text;
    }
}