import { useDispatch, useSelector } from "react-redux";
import { seatDeSelected, seatSelected } from "../../redux/seatBookingSlice";

const Seats = () => {
  const { seatsData, seatReserved } = useSelector(
    (state) => state.seatBookingSlice
  );
  const dispatch = useDispatch();
  let selectClass = false;
  const handleSeatSelect = (seat) => {
    const seatIndex = seatReserved.findIndex(
      (item) => item.soGhe === seat.soGhe
    );
    if (seatIndex !== -1) {
      dispatch(seatDeSelected(seatIndex));
      selectClass = false;
    } else {
      dispatch(seatSelected(seat));
      selectClass = true;
    }
    return selectClass;
  };
  return (
    <div className="ps-5 pe-12 mt-5 grid grid-cols-1">
      {seatsData.map((rowItem, rowIndex) => {
        return (
          <div
            className="seatRows grid items-start grid-cols-13 gap-5 mb-2.5"
            key={rowIndex}
          >
            <button disabled className="text-lg text-orange-400">
              {rowItem.hang}
            </button>
            {rowItem.danhSachGhe.map((seat, seatIndex) => {
              return (
                <button
                  onClick={(e) => {
                    handleSeatSelect(seat);
                    if (selectClass) {
                      e.target.classList.add("select");
                    } else {
                      e.target.classList.remove("select");
                    }
                  }}
                  key={seatIndex}
                  className={`seatNumber${rowIndex == 0 ? " title" : ""}${
                    rowIndex == 5 ? " push-y" : ""
                  }${seatIndex == 4 ? " push-x" : ""}${
                    seat.daDat ? " reserved" : ""
                  }`}
                  disabled={seat.daDat || rowIndex == 0}
                >
                  {seat.soGhe}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Seats;
