interface IDetailsCardProps {
  items: {
    label: string;
    value: string;
  }[];
}

export const DetailsCard = ({ items }: IDetailsCardProps) => {
  return (
    <div className="p-6 rounded-tl-[20px] rounded-br-[20px] bg-white shadow-card space-y-4">
      {items.map((item) => (
        <div key={item.label} className="flex items-center space-x-8">
          <h3 className="w-[127px] text-eyebrow-large font-medium uppercase text-core-blue">
            {item.label}
          </h3>
          <p className="">{item.value}</p>
        </div>
      ))}
    </div>
  );
};
