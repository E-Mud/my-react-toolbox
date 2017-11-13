import React from 'react';

import StoryContainer from '../StoryContainer.jsx'
import { storiesOf } from '@storybook/react';

storiesOf('Depth', module)
    .add('z-depth class', () => {
        const boxStyle = {width: '50px', height: '50px', marginRight: '20px', backgroundColor: '#fff'},
            avDepths = [1, 2, 3, 4, 6, 8, 9, 12, 16, 24];
        return (<div>
            <StoryContainer className="flex-container row" padding="large">
                {
                    avDepths.map((depth) => {
                        return (<div key={depth} className={'flex-container center-center z-depth-' + depth} style={boxStyle}>{depth}</div>)
                    })
                }
            </StoryContainer>
            <StoryContainer className="flex-container row" padding="large" theme="light">
                {
                    avDepths.map((depth) => {
                        return (<div key={depth} className={'flex-container center-center z-depth-' + depth} style={boxStyle}>{depth}</div>)
                    })
                }
            </StoryContainer>
            <StoryContainer className="flex-container row" padding="large" theme="dark">
                {
                    avDepths.map((depth) => {
                        return (<div key={depth} className={'flex-container center-center z-depth-' + depth} style={boxStyle}>{depth}</div>)
                    })
                }
            </StoryContainer>
        </div>)
    });
