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
        <table className="w-full text-center">
        <thead className="bg-gray-100 border-b-2  border-gray-200 ">
                <tr className="">
                  <th className="p-3 text-sm font-semibold tracking-wide ">
                    #
                  </th>
                
                  <th className="p-3 text-sm font-semibold tracking-wide ">
                  Imgare
                  </th>
                  <th className="pl-14 ml-3 text-sm font-semibold tracking-wide ">
                    Address
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide">
                    Quantity
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Pace
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Price
                  </th>
                  <th className="pl-10 text-sm font-semibold tracking-wide text-left">
                    Cancele
                  </th>
                </tr>
              </thead>
        </table>
        {order.map((oder) => (
         <>
          <table className="w-full  ">
             
              <tbody >
                <tr className="border text-center border-r-4">
                  <td className="p-3 text-sm ">1</td>
                  <td className="p-3 text-sm "><span><img className="h-20 w-20" src={oder.service.image} alt="" /></span></td>
                  <td className="p-3 text-sm "><span>{oder.address}</span></td>
                  <td className="p-3 text-sm "><span>{oder.oderQuantity}</span></td>
                  <td className="pl-10 text-sm "><span>{oder.oderQuantity}</span></td>
                  <td className="p-3 text-sm "><span>{oder.service.price}</span></td>
                  <td className="pl-3 text-sm "><span><button className="btn bg-red-700 ">Cancel</button></span></td>
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
