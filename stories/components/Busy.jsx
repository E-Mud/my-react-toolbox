import React from 'react';

import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';

import { BusyOnClickHOC } from '../../dist';

const startAction = action('start')
const finishAction = action('finish')

const BusyButton = BusyOnClickHOC((props) => {
    return <button {...props}>{props.children}</button>
})

class BusyButtonClient extends React.Component {
    constructor(props) {
        super(props)

        this.state = {disabled: false}

        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        this.setState({disabled: true})

        return delayedResolve()
    }

    render() {
        return <BusyButton className="primary" disabled={this.state.disabled} onClick={this.onClick}>BUSY</BusyButton>
    }
}

const delayedResolve = function() {
    startAction()
    return new Promise((resolve) => {
        setTimeout(() => {
            finishAction()

            resolve()
        }, 2000)
    })
}

storiesOf('Busy on click', module)
    .add('Busy button', () => {
        return <BusyButton className="primary" onClick={delayedResolve}>BUSY</BusyButton>
    })
    .add('Busy button (stay disabled)', () => {
        return <BusyButtonClient></BusyButtonClient>
    })
