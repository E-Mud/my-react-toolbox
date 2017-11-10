import React from 'react';

import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';

import { MasterDetail, ConfirmDialog } from '../../dist';

function MdUI(props) {
    return (
        <div>
            <MasterDetail {...props}>
                {(selected, selectDetail) => {
                    return (
                        <div>
                            <div>{selected || 'NONE'}</div>
                            <button onClick={() => selectDetail('ONE')}>ONE</button>
                            <button onClick={() => selectDetail('TWO')}>TWO</button>
                            <button onClick={() => selectDetail('THREE')}>THREE</button>
                        </div>
                    )
                }}
            </MasterDetail>
        </div>
    );
}

class MdClient extends React.Component {
    constructor(props) {
        super(props)

        this.changeDetail = this.changeDetail.bind(this)
        this.state = {}
    }

    changeDetail(newDetail) {
        this.setState({detail: newDetail})
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={() => this.changeDetail('ONE')}>ONE</button>
                    <button onClick={() => this.changeDetail('TWO')}>TWO</button>
                    <button onClick={() => this.changeDetail('THREE')}>THREE</button>
                </div>
                <MdUI onSelectionChanged={action('selectionChanged')} selectedDetail={this.state.detail}></MdUI>
            </div>
        )
    }
}

storiesOf('MasterDetail', module)
    .add('changing selection', () => {
        return (<MdUI onSelectionChanged={action('selectionChanged')}></MdUI>)
    })
    .add('toggling selection', () => {
        return (<MdUI onSelectionChanged={action('selectionChanged')} unselectOnToggle={true}></MdUI>)
    })
    .add('changing selection through props', () => {
        return (<MdClient></MdClient>)
    })
    .add('canceling selection (ONE -> THREE)', () => {
        const onChanging = (newSelected, currentSelected) => {
            return (currentSelected !== 'ONE' || newSelected !== 'THREE')
        }
        return (<MdUI onSelectionWillChange={onChanging}></MdUI>)
    })
    .add('delaying selection', () => {
        const onChanging = (newSelected, currentSelected) => {
            return ConfirmDialog.show('', 'Change?')
        }
        return (<MdUI onSelectionWillChange={onChanging}></MdUI>)
    })
