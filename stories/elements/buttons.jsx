import React from 'react';

import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
    .add('Regular', () => {
        return (
            <div>
                <div className="flex-container" style={{padding: '10px'}}>
                    <button style={{marginRight: '10px'}}>NORMAL</button>
                    <button style={{marginRight: '10px'}} disabled={true}>DISABLED</button>
                </div>
                <div className="flex-container" style={{padding: '10px'}}>
                    <button className="primary" style={{marginRight: '10px'}}>NORMAL</button>
                    <button className="primary" style={{marginRight: '10px'}} disabled={true}>DISABLED</button>
                </div>
            </div>
        )
    })
    .add('Raised', () => {
        return (
            <div className="flex-container" style={{padding: '10px'}}>
                <button className="raised primary" style={{marginRight: '10px'}}>NORMAL</button>
                <button className="filled primary" style={{marginRight: '10px'}}>NO DEPTH</button>
                <button className="raised primary" style={{marginRight: '10px'}} disabled={true}>DISABLED</button>
            </div>
        )
    });
