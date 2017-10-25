import React from 'react';

import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
    .add('Regular', () => {
        return (
            <div>
                <div className="flex-container" style={{padding: '10px'}}>
                    <button style={{marginRight: '10px'}}>NORMAL</button>
                    <button className="raised" style={{marginRight: '10px'}}>RAISED</button>
                    <button style={{marginRight: '10px'}} disabled={true}>DISABLED</button>
                </div>
                <div className="flex-container" style={{padding: '10px'}}>
                    <button className="primary" style={{marginRight: '10px'}}>NORMAL</button>
                    <button className="primary raised" style={{marginRight: '10px'}}>RAISED</button>
                    <button className="primary" style={{marginRight: '10px'}} disabled={true}>DISABLED</button>
                </div>
            </div>
        )
    })
    .add('Filled', () => {
        return (
            <div className="flex-container" style={{padding: '10px'}}>
                <button className="fill primary" style={{marginRight: '10px'}}>NORMAL</button>
                <button className="fill primary raised" style={{marginRight: '10px'}}>RAISED</button>
                <button className="fill primary" style={{marginRight: '10px'}} disabled={true}>DISABLED</button>
            </div>
        )
    });
