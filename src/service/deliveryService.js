import axios from 'axios';

export const getProvinces = async () => {
    try {
        return await axios.post('https://online-gateway.ghn.vn/shiip/public-api/master-data/province', {}, {
            headers: {
                token: "8d38601c-7035-11ec-9054-0a1729325323"
            }
        })
    } catch (error) {
        console.log(error);
    }
};

export const getDistricts = async (id) => {
    try {
        return await axios.get(`https://online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${id}`, {
            headers: {
                token: "8d38601c-7035-11ec-9054-0a1729325323"
            }
        })
    } catch (error) {
        console.log(error);
    }
};

export const getWards = async (id) => {
    try {
        return await axios.get(`https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${id}`, {
            headers: {
                token: "8d38601c-7035-11ec-9054-0a1729325323"
            }
        })
    } catch (error) {
        console.log(error);
    }
};


export const getShippingMethod = async (district_id) => {
    try {
        return await axios.get(`https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/available-services`, {
            headers: {
                token: "8d38601c-7035-11ec-9054-0a1729325323"
            },
            params: {
                "shop_id": 2413843,
                "from_district": 3186,
                "to_district": district_id
            }
        })
    } catch (error) {
        console.log(error);
    }
};

export const getFeeDelivery = async (service_id, district_id, weight) => {
    try {
        return await axios.get(`https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee`, {
            headers: {
                token: "8d38601c-7035-11ec-9054-0a1729325323",
                "shop_id": 2413843

            },
            params: {
                "service_type_id": service_id,
                "insurance_value": 1000,
                "coupon": null,

                "to_ward_code": "340518",
                "from_district_id": 1526,
                "to_district_id": district_id,

                "weight": weight,
                "length": 15,
                "width": 15,
                "height": 15
            }
        })
    } catch (error) {
        console.log(error);
    }
};