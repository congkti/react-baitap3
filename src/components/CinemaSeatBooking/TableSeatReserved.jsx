import { useDispatch, useSelector } from "react-redux";
import { seatCancel, seatDeSelected } from "../../redux/seatBookingSlice";

const TableSeatReserved = () => {
  const { seatReserved } = useSelector((state) => state.seatBookingSlice);

  let total = 0;
  seatReserved.forEach((element) => {
    total += element.gia;
  });

  const dispatch = useDispatch();
  const handleSeatCancel = (seat) => {
    const seatIndex = seatReserved.findIndex(
      (item) => item.soGhe === seat.soGhe
    );
    if (seatIndex !== -1) {
      dispatch(seatDeSelected(seatIndex));
    }
  };

  return (
    <div className="seatBookInfo w-2/5 ps-16 pe-5">
      <h3 className="text-center text-xl mb-8 text-white">
        DANH SÁCH GHẾ BẠN CHỌN
      </h3>
      <ul className="guideline text-white">
        <li className="reserved">Ghế đã đặt</li>
        <li className="select">Ghế đang chọn</li>
        <li className="emty">Ghế trống</li>
      </ul>
      {Boolean(seatReserved.length) && (
        <table className="tblKetQua mt-10" border={1} cellPadding={10}>
          <thead>
            <tr className="text-white">
              <td>Số Ghế</td>
              <td>Giá</td>
              <td>Hủy</td>
            </tr>
          </thead>
          <tbody>
            {seatReserved.map((item, index) => {
              let { soGhe, gia } = item;
              return (
                <tr key={index}>
                  <td>{soGhe}</td>
                  <td>
                    {gia.toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleSeatCancel(item);
                      }}
                      className="text-red-600"
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="text-white">Tổng tiền:</td>
              <td colSpan={2}>
                {total.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default TableSeatReserved;
