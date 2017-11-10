import React from 'react';

import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';

import { InputValidator } from '../../dist';

function someInput(valid, onChange) {
    const className = valid ? '' : 'invalid';
    return <input className={className} onChange={onChange}></input>;
}

storiesOf('InputValidator', module)
    .add('required (custom)', () => {
        const required = (val) => !!val
        return (
            <InputValidator valid={required} onChange={action('onChange')}>{someInput}</InputValidator>
        )
    })
