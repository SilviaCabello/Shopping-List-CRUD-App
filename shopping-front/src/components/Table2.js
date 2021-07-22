import Item from "./Item";

const Table2 = ({ data, deleteItems }) => {
  return (
    <div>
      
      {data.map((item) => (
        <Item key={data.id} id={item.id} name={item.name} quantity={item.quantity} deleteItems={deleteItems}/>
      ))}
      <div className="horizontal-line"></div>
    </div>
  );
};

export default Table2;
