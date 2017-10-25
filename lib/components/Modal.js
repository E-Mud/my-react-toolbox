import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';


class Modal extends React.Component {
    stopClick(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    render() {
        let children;

        if(typeof this.props.children === 'function'){
            children = this.props.children
        }else{
            children = () => this.props.children;
        }

        return (
            <div className={'modal-mask'} onClick={this.props.cancelModal}>
                <div className={'modal flex-50'} onClick={this.stopClick}>
                    {
                        children(this.props.closeModal, this.props.cancelModal)
                    }
                </div>
            </div>
        )
    }
}

const getModalContainer = () => {
    let modalContainer = document.getElementById('modal-container');

    if(!modalContainer) {
        modalContainer = document.createElement('DIV')
        modalContainer.setAttribute('id', 'modal-container')

        document.body.appendChild(modalContainer)
    }

    return modalContainer
}

const clearModalContainer = () => unmountComponentAtNode(getModalContainer())

export default {
    show: (modalContent) => {
        const modalPromise = new Promise((resolve, reject) => {
            const closeModal = (result) => resolve(typeof result === 'undefined' ? true : result);
            const cancelModal = (reason) => {
                resolve(typeof reason === 'undefined' ? false : reason)
            };

            render(<Modal closeModal={closeModal} cancelModal={cancelModal}>{modalContent}</Modal>, getModalContainer());
        })

        return modalPromise.then((result) => {
            clearModalContainer();
            return result;
        }, (reason) => {
            console.log(reason);
            clearModalContainer();
            return reason;
        })
    }
}
