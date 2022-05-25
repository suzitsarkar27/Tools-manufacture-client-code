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
                  {/* <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    First Name
                  </th> */}
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Imgare
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Address
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Quantity
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Pace
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Price
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Cancele
                  </th>
                </tr>
              </thead>
        </table>
        {order.map((oder) => (
         <>
          <table className="w-full  ">
             
              <tbody>
                <tr>
                  <td className="p-3 text-s">1</td>
                  <td className="p-3 text-sm"><span><img className="h-20 w-20" src={oder.service.image} alt="" /></span></td>
                  <td className="p-3 text-sm"><span>{oder.address}</span></td>
                  <td className="p-3 text-sm"><span>{oder.oderQuantity}</span></td>
                  <td className="p-3 text-sm"><span>{oder.oderQuantity}</span></td>
                  <td className="p-3 text-sm"><span>{oder.service.price}</span></td>
                  <td className="p-3 text-sm"><span><button className="btn bg-red-700 ">Cancel</button></span></td>
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
