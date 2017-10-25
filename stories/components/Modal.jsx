import React from 'react';

import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';

import { Modal, AlertDialog, ConfirmDialog } from '../../dist';

function ModalOpener(props) {
    return (<button onClick={props.onClick}>OPEN</button>);
}

const title = 'Reduce interruption'
const body = 'Use dialogs sparingly because they are interruptive. Their sudden appearance forces users to stop their current task and focus on the dialog content. Not every choice, setting, or detail warrants interruption. Alternatives to dialogs include menus or inline expansion, both of which maintain the current context.'
const dialogHandler = decorateAction([
    (args) => args[0] ? [`accepted (result: ${args[0]})`] : [`canceled (result: ${args[0]})`]
])

storiesOf('AlertDialog', module)
    .add('Default action text', () => {
        const open = ()  => AlertDialog.show(title, body).then(dialogHandler('dialogHandler'));
        return (<ModalOpener onClick={open}></ModalOpener>)
    })
    .add('Custom action text', () => {
        const open = ()  => AlertDialog.show(title, body, 'OK').then(dialogHandler('dialogHandler'));
        return (<ModalOpener onClick={open}></ModalOpener>)
    });

storiesOf('ConfirmDialog', module)
    .add('Default cancel and accept text', () => {
        const open = ()  => ConfirmDialog.show(title, body).then(dialogHandler('dialogHandler'));
        return (<ModalOpener onClick={open}></ModalOpener>)
    })
    .add('Custom cancel text', () => {
        const open = ()  => ConfirmDialog.show(title, body, {cancelText: 'NOPE'}).then(dialogHandler('dialogHandler'));
        return (<ModalOpener onClick={open}></ModalOpener>)
    })
    .add('Custom accept text', () => {
        const open = ()  => ConfirmDialog.show(title, body, {acceptText: 'OK'}).then(dialogHandler('dialogHandler'));
        return (<ModalOpener onClick={open}></ModalOpener>)
    });
