import React, { useEffect, useState } from "react";
import { getDistricts, getFeeDelivery, getProvinces, getShippingMethod, getWards } from "../../service/deliveryService";
import "./ThongTinNguoiNhan.css";

const ThongTinNguoiNhan = ({ weight, setFee }) => {
  const [provinces, setProvinces] = useState({ selected: 'true', items: [] });
  const [districts, setDistricts] = useState({ selected: 'true', items: [] });
  const [wards, setWards] = useState({ selected: 'true', items: [] });

  useEffect(() => {
    const getData = async () => {
      const data = await getProvinces();
      setProvinces({ ...provinces, items: data.data.data })
    }
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const data = await getDistricts(provinces.selected);
      setDistricts({ selected: 'true', items: data.data.data })
    }

    if (provinces.selected === 'true') {
      setDistricts({ selected: 'true', items: [] })

    } else {
      getData();
    }
  }, [provinces.selected]);

  useEffect(() => {
    const getData = async () => {
      const data = await getWards(districts.selected);
      setWards({ ...wards, items: data.data.data })
    }

    if (districts.selected === 'true') {
      setWards({ selected: 'true', items: [] })

    } else {
      getData();
    }
  }, [districts.selected]);

  useEffect(() => {
    const getData = async () => {
      const data = await getShippingMethod(districts.selected);
      const fee = await getFeeDelivery(data.data.data[0].service_type_id, districts.selected, weight);
      setFee(fee.data.data.total)
      // console.log(fee.data.data.total);
    }

    if (districts.selected === 'true') {
      setWards({ selected: 'true', items: [] })

    } else {
      getData();

    }
  }, [wards.selected]);


  return (
    <>
      <div className="header-thongtinnhanhang">
        <p>Thông tin nhận hàng</p>
      </div>

      <div className="body-thongtinnhanhang">
        <div className="div-input">
          <p>Email</p>
          <input
            className="input-thongtinnhanhang mb-2"
            placeholder="Nhập email"
          />
        </div>
        <div className="div-input">
          <p>Họ và tên</p>
          <input
            className="input-thongtinnhanhang mb-2"
            placeholder="Nhập họ và tên"
          />
        </div>
        <div className="div-input">
          <p>Số điện thoại</p>
          <input
            className="input-thongtinnhanhang mb-2"
            placeholder="Nhập số điện thoại"
          />
        </div>
        <div className="div-input">
          <p>Địa chỉ tùy chọn</p>
          <input
            className="input-thongtinnhanhang mb-2"
            placeholder="Nhập địa chỉ"
          />
        </div>
        <div className="div-input">
          <p>Chọn tỉnh/ thành phố</p>
          <select value={provinces.selected} className="" aria-label="Default select example" onChange={(e) => setProvinces({ ...provinces, selected: e.target.value })}>
            <option value={true} >Chọn tỉnh\thành phố</option>
            {provinces.items.map((item) => <option key={item.ProvinceID} value={item.ProvinceID}>{item.ProvinceName}</option>)}
          </select>
        </div>

        <div className="div-input">
          <p>Chọn quận/ huyện</p>
          <select value={districts.selected} className="" aria-label="Default select example" onChange={(e) => setDistricts({ ...districts, selected: e.target.value })}>
            <option value={true}>Chọn quận/huyện</option>
            {districts.items.map((item) => <option key={item.DistrictID} value={item.DistrictID}>{item.DistrictName}</option>)}

          </select>
        </div>

        <div className="div-input">
          <p>Chọn phường/ xã</p>
          <select value={wards.selected} onChange={(e) => setWards({ ...wards, selected: e.target.value })} className="" aria-label="Default select example">
            <option value={true}>Chọn phường/xã</option>
            {wards.items.map((item) => <option key={item.WardCode} value={item.WardCode}>{item.WardName}</option>)}

          </select>
        </div>
      </div>
    </>
  );
};

export default ThongTinNguoiNhan;
