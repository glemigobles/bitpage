import React from 'react';
import './modal.scss';
import Standardoptions from './standardoptions';
import Button from './button';
import Backbox from './backbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const modal = (props) => {
    //**standardoptions*
    let options = Standardoptions('modal', props, []);
    //**additonal options */
    let label;
    let buttonOk;
    let buttonOkName = 'OK';
    let buttonCancel;
    let buttonCancelName = 'Cancel';
    let display = false;
    if (props.buttonCancelName) {
        buttonCancelName = props.buttonCancelName;
    }
    if (props.buttonOkName) {
        buttonOkName = props.buttonOkName;
    }
    if (props.display == true) {
        display = props.display;
    }
    if (props.label) {
        label = <p className="label">{props.label}</p>
    }
    if (props.buttonOk) {
        buttonOk = <Button onClick={props.buttonOk}>{buttonOkName}</Button>
    }
    if (props.buttonCancel) {
        buttonCancel = <Button color="dark" onClick={props.buttonCancel}>{buttonCancelName}</Button>
    }
    //**component pattern */
    let element =

        <div className={options.cssClassesMenu}>
            <Backbox color="dark" addClass="partial space-btw center-v">
                {label} <div className="margin-l" id="close-modal" onClick={props.onClose}><h3><FontAwesomeIcon icon={["far", "window-close"]} /></h3></div>
            </Backbox>
            <Backbox color="outlined" addClass="partial center-h center-v column">
                {props.children}
                <div className="partial center-h wrap">
                    {buttonOk} {buttonCancel}
                </div>
            </Backbox>
        </div>
    //**output component with optional classes and animation*/
    const Element = !display === true ?
        null
        :
        <div className="backdrop">

            {element}

        </div>
    //**return component */
    return (
        Element
    );
};

export default modal;