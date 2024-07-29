import React from "react";

const ProductItem = (props) => {
  console.log(props); //=> arrSanPham
  return (
    <div className="mx-auto max-w-7xl py-5 grid grid-cols-4 gap-10">
      {/* chạy map để duyệt mảng arrSanPham => hiển thị lên giao diện */}
      {props.arrSanPham.map((item, index) => {
        // console.log(item);
        return (
          <div className="item bg-white rounded-lg shadow-lg" key={index}>
            <img
              className="w-full rounded-t-lg bg-gray-200"
              src={item.image}
              alt={item.name}
            />
            <div className="text-center px-3 pt-3 pb-5">
              <h3 className="font-bold text-lg mb-3 mt-2 text-red-600">
                {item.name}
              </h3>
              <p className="border-b-2 pb-6">{item.shortDescription}</p>
              <a
                onClick={() => {
                  props.layDuLieuGiay(item);
                }}
                className="bg-red-500 text-white py-2 px-5 mt-6 rounded-lg inline-block hover:bg-gray-800 transition-all"
                href="#detail"
              >
                View detail
              </a>
            </div>
          </div>
        );
      })}
    </div>
    // eof return component ProductItem
  );
};

export default ProductItem;
