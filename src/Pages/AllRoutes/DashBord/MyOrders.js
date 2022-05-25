import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [order, setOrser] = useState([]);
  console.log(order);
  useEffect(() => {
    fetch(`http://localhost:5000/order`)
      .then((res) => res.json())
      .then((data) => setOrser(data));
  }, []);
  return (
    <div >
      <h2 className="text-2xl mb-2 text-primary font-bold">Your Oders</h2>

      <div>
        <table className="w-full ">
        <thead className="bg-gray-100 border-b-2  border-gray-200 ">
                <tr>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    #
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    First Name
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Last Name
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Username
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Last Name
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Username
                  </th>
                </tr>
              </thead>
        </table>
        {order.map((oder) => (
         <>
          <table className="w-full ml-5 ">
             
              <tbody>
                <tr>
                  <td className="p-3 text-s">1</td>
                  <td className="p-3 text-sm">Mark</td>
                  <td className="p-3 text-sm">Otto</td>
                  <td className="p-3 text-sm">@mdo</td>
                  <td className="p-3 text-sm">@mdo</td>
                  <td className="p-3 text-sm">@mdo</td>
                </tr>
               
              </tbody>
            </table>
         </>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
