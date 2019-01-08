const Standardoptions = (elementclass, props, variants) => {
    let cssClassesMenu = elementclass;
    let animate = false;
    let animateOnce = false;
    let animateIn = 'fadeIn';
    let animateOut = 'fadeOut';
    let animationOffset = 50;
    let animationDuration = 0.5;
    let animationDelay = 0;

    if (props.animateIn) {
        animateIn = props.animateIn;
    }
    if (props.animateOut) {
        animateOut = props.animateOut;
    }
    if (props.animateOnce === true) {
        animateOnce = true;
    }
    if (props.animate === true) {
        animate = true;
    }
    if (props.animationOffset) {
        animationOffset = props.animationOffset;
    }
    if (props.animationDuration) {
        animationDuration = props.animationDuration;
    }
    if (props.animationDelay) {
        animationDelay = props.animationDelay;
    }
    if (props.color) {
        variants.forEach(variant => {
            if (variant === props.color) {
                cssClassesMenu += ' ' + elementclass + '-' + variant;
            }
        });
    }
    return { cssClassesMenu, animate, animateOnce, animateIn, animateOut, animationOffset, animationDuration, animationDelay }
}

export default Standardoptions;