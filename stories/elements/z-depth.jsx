import React from 'react';

import { storiesOf } from '@storybook/react';

storiesOf('Depth', module)
    .add('z-depth class', () => {
        const boxStyle = {width: '50px', height: '50px', marginRight: '20px'},
            avDepths = [1, 2, 3, 4, 6, 8, 9, 12, 16, 24];
        return (<div className="flex-container row" style={{padding: '10px'}}>
            {
                avDepths.map((depth) => {
                    return (<div key={depth} className={'flex-container center-center z-depth-' + depth} style={boxStyle}>{depth}</div>)
                })
            }
        </div>)
    });
