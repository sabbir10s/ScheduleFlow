const PowerfulFeatures = () => {
  const cardData = [
    {
      id: "1",
      icon: "https://i.ibb.co/yFMQDXr/image-1.jpg",
      heading: "Reduce no shows with reminders",
      para: "Automatic reminders and notifications significantly reduce no shows and admin work.",
    },
    {
      id: "2",
      icon: "https://i.ibb.co/T13t4h9/image-2.jpg",
      heading: "Video/Virtual meeting links",
      para: "Automatically create unique Zoom, Google Meet, and MS Teams links for meetings scheduled.",
    },
    {
      id: "3",
      icon: "https://i.ibb.co/NtsCP18/image-3.jpg",
      heading: "Custom available and control",
      para: "Set up custom availability, padding between appointments and appointment duration.",
    },
  ];
  return (
    <section className="w-full text-center mt-20">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
          Powerful features
        </h1>
        <p className="font-medium text-justify md:text-center mx-10 md:mx-0 md:text-lg">
          Simple, easy to use features to help automate scheduling with your
          customers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {cardData.map((data) => (
          <PowerCard data={data} key={data.id} />
        ))}
      </div>
    </section>
  );
};

const PowerCard = ({ data }: any) => {
  return (
    <div className="p-4 text-center hover:shadow-lg duration-500">
      <img className="max-w-[250px] mx-auto" src={data.icon} alt="" />
      <p className="font-bold text-xl md:text-xl">{data.heading}</p>
      <p className="text-sm text-slate-500">{data.para}</p>
    </div>
  );
};

export default PowerfulFeatures;
