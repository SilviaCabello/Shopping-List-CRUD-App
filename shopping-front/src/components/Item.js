import "./Table.css";

const Item = ({ name, quantity, id, deleteItems }) => {
  return (
    <div>
      <div className="horizontal-line"></div>
      <div className="item">
        <p>
          {name} <bn/>
          {quantity}
        </p>
        <button onClick= {() => deleteItems(id)} className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default Item;
