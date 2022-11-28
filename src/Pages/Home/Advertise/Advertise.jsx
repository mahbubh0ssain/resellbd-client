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
      <div className="max-w-[1440px] grid grid-cols-1 lg:grid-cols-6 gap-4 my-6 text-center">
        {data.map((info) => (
          <div key={info._id}>
            <div className="card w-48  shadow-xl image-full">
              <figure>
                <img src={info?.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{info.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default Advertise;
