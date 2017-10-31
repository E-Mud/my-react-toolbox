import React from 'react'

import Modal from './Modal.js'

const DialogActions = (props) => {
    let children;

    if(typeof props.children === 'function'){
        children = props.children
    }else{
        children = () => props.children;
    }

    return (
        <div className="dialog-actions flex-container">
            <span className="flex"></span>
            {children(props.closeDialog, props.cancelDialog)}
        </div>
    )
}

const DialogComponent = (props) => {
    return (
        <div className="dialog">
            {props.title ? <div className="dialog-title text-title">{props.title}</div> : null}
            <div className="dialog-body text-medium text-secondary">{props.body}</div>
            <DialogActions closeDialog={props.closeDialog} cancelDialog={props.cancelDialog}>{props.actions}</DialogActions>
        </div>
    )
}

const showDialog = (title, body, actions) => {
    return Modal.show((closeDialog, cancelDialog) => {
        return <DialogComponent
            title={title}
            body={body}
            actions={actions}
            closeDialog={closeDialog}
            cancelDialog={cancelDialog}>
        </DialogComponent>
    })
}

export const AlertDialog = {
    show: (title, body, actionText = 'ACCEPT') => {
        const actions = (closeDialog) => {
            return <button className="primary" onClick={() => closeDialog()}>{actionText}</button>
        }

        return showDialog(title, body, actions)
    }
}

export const ConfirmDialog = {
    show: (title, body, {cancelText, acceptText} = {}) => {
        cancelText = cancelText || 'CANCEL'
        acceptText = acceptText || 'ACCEPT'

        const actions = (closeDialog, cancelDialog) => {
            return [
                    <button onClick={() => cancelDialog()} key="cancelDialog">{cancelText}</button>,
                    <button className="primary" onClick={() => closeDialog()} key="closeDialog">{acceptText}</button>
                ]
        }

        return showDialog(title, body, actions)
    }
}

export default {
    show: showDialog
}
