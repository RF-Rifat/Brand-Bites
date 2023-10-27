import { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/brandData.json")
      .then((res) => res.json())
      .then((item) => setData(item));
  }, []);

  return (
    <section className="py-6 border-info">
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {data.map((element) => (
          <ServiceCard
            key={element.id}
            title={element.title}
            details={element.description}
            icon={<img src={element.photo} className="rounded" />}
          ></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Products;

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="px-4">
        <div className="mb-8 rounded-[20px] p-10 shadow-lg hover:shadow-lg md:px-7 xl:px-10 h-[300px]">
          <div
            className={`mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary`}
          >
            {icon}
          </div>
          <h4 className="mb-3 text-xl font-semibold text-dark">{title}</h4>
          <p className="text-body-color">{details}</p>
        </div>
      </div>
    </>
  );
};
