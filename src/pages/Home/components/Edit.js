import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add }) => {
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }
  const [location, setLocation] = useState("");
  function locationChange(e) {
    setLocation(e.target.value);
  }
  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }
  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  function addItem() {
    add(function (preData) {
      return [
        {
          id: v4(),
          note,
          location,
          date,
          time,
        },
        ...preData,
      ];
    });
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事:</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>地點:</p>
      <input type="text" value={location} onChange={locationChange} />
      <p>日期:</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>時間:</p>
      <input type="time" value={time} onChange={timeChange} />

      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};
export default Edit;
