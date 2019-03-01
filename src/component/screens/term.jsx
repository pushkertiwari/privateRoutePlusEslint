import React, { Component, Fragment } from 'react'
class Term extends Component {
    constructor(props) {
        super(props)
        document.title = 'Term page'
        this.textInput = React.createRef();
        this.state = {
            termPage: 'Term page',
            textValue: 'testing value'
        }
        this.handleRef = this.handleRef.bind(this)
    }
    handleRef(e) {
        e.preventDefault();
        this.setState({
            textValue: this.textInput.current.value
        })
    }
    render() {
        return (
            <Fragment>
                <h1>{this.state.termPage}</h1>
                <input type="text" ref={this.textInput} defaultValue={this.state.textValue} />
                <button onClick={this.handleRef}>Fire Ref</button>
            </Fragment>
        )
    }
}
export default Term