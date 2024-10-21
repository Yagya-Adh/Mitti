interface ItabProp {
  id: number;
  tabName: string;
  onClickhand: () => void;
}

const TabBar = ({ id, tabName, onClickhand }: ItabProp) => {
  return (
    <div
      className="border-b border-b-black flex flex-col items-center justify-center w-full"
      key={id}
    >
      <h3
        onClick={onClickhand}
        className="text-xl font-serif font-bold mx-3 border-b-2 hover:border-b-mitti-secondaryTextColor py-2 px-5"
      >
        {tabName}
      </h3>
    </div>
  );
};
export default TabBar;
