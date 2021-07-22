import Item from "./Item";

const Table2 = ({ data }) => {
  return (
    <div>
      
      {data.map((item) => (
        <Item key={data.id} name={item.name}/>
      ))}
      <div className="horizontal-line"></div>
    </div>
  );
};

export default Table2;
