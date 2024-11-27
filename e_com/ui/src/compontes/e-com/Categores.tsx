import React from "react";
type tt = {
  id: number;
  name: string;
  brand: string;
  instok: number;
  photo: string;
};
function Categores({ id, name, brand, photo }: tt) {
  return (
    <div className="border w-[350px] ">
      <div className=" flex justify-center " key={id}>
        {name}
      </div>
      <div className="flex justify-center font-bold text-3xl">{brand}</div>
      <img src={photo} alt="" />
    </div>
  );
}

export default Categores;
