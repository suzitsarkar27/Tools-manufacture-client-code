import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [order, setOrser] = useState([]);
  console.log(order);
  useEffect(() => {
    fetch(`https://sleepy-eyrie-85757.herokuapp.com/order`)
      .then((res) => res.json())
      .then((data) => setOrser(data));
  }, []);

  const handelDelete = (id) => {
    const proceed = window.confirm("Are you Sure?");
  
    if (proceed) {
      const url = `https://sleepy-eyrie-85757.herokuapp.com/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = order.filter((servic) => servic._id !== id);
          setOrser(remaining);
        });
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-2 text-primary font-bold">Your Oders</h2>

      <div>
        <table className="w-full text-center">
          <thead className="bg-gray-100 border-b-2  border-gray-200 ">
            <tr className="">
              <th className="p-3 text-sm font-semibold tracking-wide ">#</th>
              <th className=" text-sm font-semibold tracking-wide ">Imgare</th>
              <th className=" ml-3 text-sm font-semibold tracking-wide ">
                Address
              </th>
              <th className=" text-sm font-semibold tracking-wide">Quantity</th>
              <th className=" text-sm font-semibold tracking-wide text-left">
                Pace
              </th>
              <th className=" text-sm font-semibold tracking-wide text-left">
                Price
              </th>
              <th className="pl-10 text-sm font-semibold tracking-wide text-left">
                Cancele
              </th>
            </tr>
          </thead>
        </table>
        {order.map((oder) => (
          <div key={oder._id}>
            <table className="w-full  ">
              <tbody>
                <tr className="border text-center border-r-4">
                  <td className="p-3 text-sm ">1</td>
                  <td className="p-3 text-sm ">
                    <span>
                      <img
                        className="h-20 w-20"
                        src={oder?.service?.image}
                        alt=""
                      />
                    </span>
                  </td>
                  <div>
                    <td className="p-3 text-sm ">
                      <span>{oder.data.address}</span>
                    </td>
                  </div>
                  <td className="p-3 text-sm ">
                    <span>{oder.service.quintity}</span>
                  </td>
                  <td className="p-3 text-sm ">
                    <span>{oder.data.minimumquintity}</span>
                  </td>
                  <td className="p-3 text-sm ">
                    <span>{oder.service.price}</span>
                  </td>
                  <td className=" text-sm ">
                    <span className="grid grid-cols-1">
                      {" "}
                      <button className="btn bg-yellow-600 mb-1">
                        Playment
                      </button>
                      <button
                      forhtml="my-modal-3"
                        onClick={() => handelDelete(oder._id)}
                        className="btn bg-red-700 "
                      >
                        Cancel
                      </button>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
