import React from 'react';
import './spinner.scss';


const spinner = (props) => {

    let cssClassesMenu = 'loader';
    if (props.addClass) {
        cssClassesMenu += ' ' + props.addClass;
    }

    return (
        <div className={cssClassesMenu}>
            <div className="spinner"></div>
        </div>
    );
};

export default spinner;
