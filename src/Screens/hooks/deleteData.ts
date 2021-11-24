import { useContext, useState } from "react";
import { Context, IProducts } from "../../context/Context";

export const deleteData = () => {
  const context = useContext(Context);
  const [updateList, setUpdateList] = useState(false);
  const deletedData = (
    productIndex: number,
    storingData: (value: IProducts[]) => void,
  ) => {
    let currentArray = context?.productArray;
    currentArray?.splice(productIndex!, 1);
    context?.setProductArray(currentArray!);
    storingData(currentArray!);
    setUpdateList(true);
  };

  return { deletedData, updateList, setUpdateList };
};
