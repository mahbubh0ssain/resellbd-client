import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ReportedItems = () => {
  const [items, setItems] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/reported-items", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("ResellBD-Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [deleted]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete-report?id=${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("ResellBD-Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Reported item deleted");
          setDeleted(!deleted);
        }
      });
  };

  return (
    <>
      {items?.length && (
        <>
          <div className="my-6 mx-4">
            <h2 className="text-3xl">Reported Items</h2>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, i) => (
                    <tr key={item._id}>
                      <th>{i + 1}</th>
                      <td>
                        <div className="avatar">
                          <div className="w-20 rounded-xl">
                            <img src={item.img} alt="" />
                          </div>
                        </div>
                      </td>
                      <td>{item.name}</td>
                      <td>
                        <button
                          onClick={() => handleDelete(item?.id)}
                          className="btn btn-xs btn-primary"
                        >
                          Delete
                        </button>{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
      <>
        {items.length === 0 && (
          <p className="text-3xl flex justify-center items-center">
            No reported item
          </p>
        )}
      </>
    </>
  );
};

export default ReportedItems;
