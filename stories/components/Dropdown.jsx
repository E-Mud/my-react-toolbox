import React from 'react';

import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';

import { DropdownOrigin, DropdownContent } from '../../dist';

class DropdownClient extends React.Component {
    constructor(props) {
        super(props)

        this.state = {open: false}
    }

    render() {
        return (
            <div>
                <DropdownOrigin>
                    <button className="raised primary" onClick={() => this.setState({open: !this.state.open})}>OPEN</button>
                    <DropdownContent open={this.state.open} hDirection={this.props.hDirection} vDirection={this.props.vDirection}>
                        <div>ONE</div>
                        <div>TWO</div>
                        <div>THREE</div>
                    </DropdownContent>
                </DropdownOrigin>
            </div>
        )
    }
}

storiesOf('Dropdown', module)
    .add('down right', () => {
        return (
            <div style={{height: '300px'}} className="padding-large flex-container center-center">
                <DropdownClient></DropdownClient>
            </div>
        )
    })
    .add('up left', () => {
        return (
            <div style={{height: '300px'}} className="padding-large flex-container center-center">
                <DropdownClient hDirection={DropdownContent.LEFT} vDirection={DropdownContent.UP}></DropdownClient>
            </div>
        )
    })
