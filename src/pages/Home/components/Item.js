const Item = ({ id, note, location, date, time, deleteData }) => {
  function DeleteItem() {
    deleteData(function (prevData) {
      return prevData.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{location}</p>
        <p>
          {date} {time}
        </p>
      </div>
      <button className="remove" onClick={DeleteItem}>
        刪除
      </button>
    </div>
  );
};
export default Item;
