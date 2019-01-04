import langs from '../assets/langs.json';

const initialState = {
    lang: langs[0],
    menu: false,
    nav: true,
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_MENU':
            if (state.menu === false) {
                return {
                    ...state,
                    ...state.menu = true
                };
            }
            return {
                ...state,
                ...state.menu = false
            };
        case 'TOGGLE_LANG':
            return {
                ...state,
                ...state.lang = langs[action.val]
            };
        default:
            return state;
    }
}

export default reducer;