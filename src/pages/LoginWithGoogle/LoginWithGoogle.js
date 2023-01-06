import React, { useEffect, useState } from "react";
import { getUrl } from "../../utils/googleAuth";

export default function LoginWithGoogle() {
  const [to, setTo] = useState();

  useEffect(() => {
    const getData = async () => {
      const url = await getUrl();
      setTo(url.data);
      console.log(url);
    };
    getData();
  }, []);
  return (
    <div>
      LoginWithGoogle
      <a href={to}>DDawng nhap</a>
    </div>
  );
}
