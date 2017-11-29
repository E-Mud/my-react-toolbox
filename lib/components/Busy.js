
import React from 'react'

export class Busy extends React.Component {
    constructor(props) {
        super(props)

        this.state = {busy: false}
        this.waitFor = this.waitFor.bind(this)
        this.stopWaiting = this.stopWaiting.bind(this)
    }

    stopWaiting() {
        this.setState({busy: false})
    }

    waitFor(promise) {
        if(promise && promise.then) {
            this.setState({busy: true})
            promise.then(this.stopWaiting, this.stopWaiting)
        }
    }

    render() {
        return this.props.children(this.state.busy, this.waitFor)
    }
}

export function BusyOnClickHOC(WrappedComp) {
    return class BusyOnClick extends React.Component {
        constructor(props) {
            super(props)

            this.renderWrappedComp = this.renderWrappedComp.bind(this)
            this.handleClick = this.handleClick.bind(this)
        }

        handleClick(e, waitFor) {
            if(this.props.onClick) {
                waitFor(this.props.onClick(e))
            }
        }

        renderWrappedComp(busy, waitFor) {
            return <WrappedComp {...this.props} onClick={this.handleClick} disabled={this.props.disabled || busy}></WrappedComp>
        }

        render() {
            return <Busy>{this.renderWrappedComp}</Busy>
        }
    }
}
