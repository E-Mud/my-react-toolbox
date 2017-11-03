import React from 'react';

import { storiesOf } from '@storybook/react';

storiesOf('Input', module)
    .add('Single-line text', () => {
        return (
            <div className="padding-base flex-container">
                <div className="flex-20">
                    <input type="text" placeholder="Placeholder" spellCheck="false"></input>
                    <input type="text" placeholder="Invalid" spellCheck="false" className="invalid"></input>
                    <input type="text" placeholder="Disabled" spellCheck="false" disabled="true"></input>
                </div>
            </div>
        )
    })
