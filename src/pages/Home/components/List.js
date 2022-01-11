import Item from "./Item";

const List = ({ listData, deleteData }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { id, note, location, date, time } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            location={location}
            date={date}
            time={time}
            deleteData={deleteData}
          />
        );
      })}
    </div>
  );
};
export default List;
