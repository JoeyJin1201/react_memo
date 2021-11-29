import Item from "./Item";

const List = ({ listData, deleteData, submittingStatus }) => {
  console.log(listData);
  return (
    <div className="list">
      {listData.map((item) => {
        // 解構，方便設置預設值
        const { note, date, time, id } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};

export default List;
