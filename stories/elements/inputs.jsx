import React from 'react';

import StoryContainer from '../StoryContainer.jsx'
import { storiesOf } from '@storybook/react';

storiesOf('Input', module)
    .add('Single-line text', () => {
        return (
            <div>
                <StoryContainer className="flex-container" padding="large">
                    <div className="flex-20">
                        <input type="text" placeholder="Placeholder" spellCheck="false"></input>
                        <input type="text" placeholder="Invalid" value={'Invalid value'} spellCheck="false" className="invalid"></input>
                        <input type="text" placeholder="Invalid" spellCheck="false" className="invalid"></input>
                        <input type="text" placeholder="Disabled" value={'Disabled value'} spellCheck="false" disabled="true"></input>
                        <input type="text" placeholder="Disabled" spellCheck="false" disabled="true"></input>
                    </div>
                </StoryContainer>
                <StoryContainer className="flex-container" padding="large" theme="light">
                    <div className="flex-20">
                        <input type="text" placeholder="Placeholder" spellCheck="false"></input>
                        <input type="text" placeholder="Invalid" value={'Invalid value'} spellCheck="false" className="invalid"></input>
                        <input type="text" placeholder="Invalid" spellCheck="false" className="invalid"></input>
                        <input type="text" placeholder="Disabled" value={'Disabled value'} spellCheck="false" disabled="true"></input>
                        <input type="text" placeholder="Disabled" spellCheck="false" disabled="true"></input>
                    </div>
                </StoryContainer>
                <StoryContainer className="flex-container" padding="large" theme="dark">
                    <div className="flex-20">
                        <input type="text" placeholder="Placeholder" spellCheck="false"></input>
                        <input type="text" placeholder="Invalid" value={'Invalid value'} spellCheck="false" className="invalid"></input>
                        <input type="text" placeholder="Invalid" spellCheck="false" className="invalid"></input>
                        <input type="text" placeholder="Disabled" value={'Disabled value'} spellCheck="false" disabled="true"></input>
                        <input type="text" placeholder="Disabled" spellCheck="false" disabled="true"></input>
                    </div>
                </StoryContainer>
            </div>
        )
    })
