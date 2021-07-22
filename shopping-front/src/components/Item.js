import "./Table.css";

const Item = ({ name, quantity, id, deleteItems, editItems }) => {
  return (
    <div>
      <div className="horizontal-line"></div>
      <div className="item">
        <div className="name-and-quantity">
          <p>
            {name}
          </p>
          <p>
            <span className="quantity">({quantity})</span>
          </p>
        </div>

        <div>
          {/* <button onClick={() => editItems(id)} className="edit-button">
            Edit
          </button> */}
          <button onClick={() => deleteItems(id)} className="delete-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
