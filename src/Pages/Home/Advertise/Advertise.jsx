import { useQuery } from "@tanstack/react-query";
import React from "react";

const Advertise = () => {
  const { data = [] } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => {
      const res = await fetch("https://resellbd-server.vercel.app/advertise");
      const data = res.json();
      return data;
    },
  });
  return (
    data?.length && (
      <div>
        <h3 className="text-4xl text-center my-4">Advertise</h3>
        <div className="max-w-[1440px] grid grid-cols-1 mx-auto lg:grid-cols-6 gap-4 my-6 text-center px-2">
          {data.map((info) => (
            <div key={info?._id}>
              <div className="card w-48 mx-auto image-full">
                <figure>
                  <img className="w-full" src={info?.img} alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title ">{info?.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Advertise;
