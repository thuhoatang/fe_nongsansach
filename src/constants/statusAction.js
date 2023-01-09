const statusAction = {
    category: {
        CATEGORY_FETCH: "CATEGORY_FETCH"
    },
    auth: {
        SIGN_IN: 'SIGN_IN',
        CHECK_AUTH: 'CHECK_AUTH',
        SIGN_OUT: 'SIGN_OUT',

    },
    cart: {
        CART_FETCH: 'CART_FETCH',
        EXPANDED: 'EXPANDED'

    }, spinner: {
        CHANGE_STATUS: 'CHANGE_STATUS',
    },
    notification: {
        DISPLAY_NOTIFICATION: 'DISPLAY_NOTIFICATION',
        HIDDEN_NOTIFICATION: 'HIDDEN_NOTIFICATION'
    }
}
export default statusAction;