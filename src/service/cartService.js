import * as httpRequest from '../utils/httpRequest';


export const patchCartItem = async (id = 0, amountChange) => {
    try {
        const res = await httpRequest.patch(`cart_item/${id}`, {
            data: { quantity: amountChange }
        });
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);

    }
}

export const addCartItem = async (id = 0, amount = 1) => {
    try {
        const res = await httpRequest.post('cart_item', {
            data: { quantity: amount, product_id: id }
        })
        return res;
    } catch (error) {
        console.log(error);

    }
}