import Item from "./Item";

const Table2 = ({ data }) => {
  return (
    <div>
      
      {data.map((item) => (
        <Item key={data.id} {...data} />
      ))}
      {/* <p>{data[1].name}</p> */}
      <div className="horizontal-line"></div>
    </div>
  );
};

export default Table2;
