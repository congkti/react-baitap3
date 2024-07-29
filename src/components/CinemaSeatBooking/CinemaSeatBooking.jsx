import { useDispatch, useSelector } from "react-redux";
import { seatReset, updateReserved } from "../../redux/seatBookingSlice";
import "./cinema.scss";
import Seats from "./Seats";
import TableSeatReserved from "./TableSeatReserved";

const CinemaSeatBooking = () => {
  const { seatsData, seatReserved } = useSelector(
    (state) => state.seatBookingSlice
  );
  console.log(seatsData);
  const dispatch = useDispatch();

  const handleConfirmBooking = () => {
    let newSeatData = seatsData.map((row) => {
      let updatedDanhSachGhe = row.danhSachGhe.map((seat) => {
        let reservedSeat = seatReserved.find(
          (item) => item.soGhe === seat.soGhe
        );
        if (reservedSeat) {
          return { ...seat, daDat: true };
        }
        return seat;
      });
      return { ...row, danhSachGhe: updatedDanhSachGhe };
    });

    dispatch(updateReserved(newSeatData));
  };
  return (
    <section className="cinemaSeatBooking p-5">
      <h2 className="pb-6 text-center text-2xl text-orange-400 relative z-10 w-3/5">
        ĐẶT VÉ XEM PHIM CYBERLEARN.VN
      </h2>
      <div className="row flex gap-4 relative z-10">
        <div className="seatLayout w-3/5">
          <div className="screen bg-orange-400 text-center text-sm p-3">
            Vị trí Màn hình
          </div>

          <Seats />

          <div className="groupButtons text-center p-3">
            <button
              onClick={handleConfirmBooking}
              className="me-10 py-2 px-5 rounded-lg bg-orange-400 hover:bg-green-400 transition-all"
            >
              Xác nhận Đặt chỗ
            </button>
            <button
              onClick={() => {
                dispatch(seatReset());
              }}
              className="py-2 px-5 rounded-lg bg-red-500 hover:bg-gray-400 transition-all"
            >
              Đặt lại
            </button>
          </div>
        </div>
        <TableSeatReserved />
      </div>
    </section>
  );
};

export default CinemaSeatBooking;
