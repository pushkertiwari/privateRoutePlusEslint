import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom'
const btnStyle = {
    background: 'skyblue',
    color: '#000',
    margin: '10px 10px',
    fontFamily: 'monospace',
    padding: '10px 10px 10px 10px',
    fontSize: '18px'
}
class Home extends Component {
    constructor(props) {
        super(props);
        document.title = process.env.REACT_APP_WEBSITE_NAME + ' Home'
        this.state = {
            value: 'first'
        }
        this.handleClick = this.handleClick.bind(this)
        this.handlePage = this.handlePage.bind(this)
    }
    componentWillMount() {
        console.log("hello1")
    }
    componentDidMount() {
        console.log('hello 2')
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.state.value, 'sdgfas', nextState.value, nextProps);
        alert('sdgdsg');
        return this.state.value !== nextState.value;
    }
    componentWillUnmount(props) {
        console.log(props, 'props willUnmount')
        this.setState({
            value: 'removed value'
        })
        alert('checking');
    }
    handleClick(e) {
        e.preventDefault();
        this.setState({
            value: 'update value'
        })
        console.log('dekho')
    }
    handlePage(e) {
        e.preventDefault();
        this.props.history.push('/term')
    }

    render() {
        return (
            <Fragment>
                <h1>Home page !</h1>
                <button style={btnStyle} onClick={this.handleClick}>Click</button>
                <button style={btnStyle} onClick={this.handlePage}>Move Page</button>
            </Fragment>
        );
    }
}
export default withRouter(Home)