import React from 'react'

class InputValidator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {valid: true}

        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onChangeHandler(event) {
        const valid = this.props.valid(event.target.value, event) === true

        if(valid !== this.state.valid) {
            this.setState({valid})
        }

        this.props.onChange(event, {valid})
    }

    render() {
        return this.props.children(this.state.valid, this.onChangeHandler)
    }
}

InputValidator.defaultProps = {
    onChange: () => {}
}

export default InputValidator
