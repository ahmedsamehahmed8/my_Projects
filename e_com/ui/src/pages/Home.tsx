import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook/hook";
import productapi from "../store/products/act/actproductsslice";

import Categores from "../compontes/e-com/categores";
import Loadding from "../compontes/feedback/index";

function Home() {
  const dispatch = useAppDispatch();

  const { error, loading, product } = useAppSelector((state) => state.Product);

  useEffect(() => {
    dispatch(productapi());
  }, [dispatch]);

  const l = product.map((e) => {
    return (
      <>
        <Loadding loading={loading} error={error}>
          <Categores key={e.id} {...e} />
        </Loadding>
      </>
    );
  });

  return <>{l}</>;
}

export default Home;
