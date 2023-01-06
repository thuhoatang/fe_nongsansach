import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { callbackBE } from "../../utils/googleAuth";

export default function AuthGoogle(props) {
  const params = useLocation().search;
  useEffect(() => {
    const getData = async () => {
      const data = await callbackBE(params);
      //   fetch(`http://localhost:8000/callback${params}`, {
      //     headers: new Headers({ accept: "application/json" }),
      //   })
      //     .then((response) => {
      //       if (response.ok) {
      //         return response.json();
      //       }
      //       throw new Error("Something went wrong!");
      //     })
      //     .then((data) => {
      //       this.setState({ loading: false, data });
      //     })
      //     .catch((error) => {
      //       this.setState({ loading: false, error });
      //       console.error(error);
      //     });
      //   console.log(data);
    };
    getData();
  });
  return <div>AuthGoogle</div>;
}
