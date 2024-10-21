"use client";
import Image from "next/image";

interface IProp {
  id?: number;
  title?: string;
  slug?: string;
}
interface IlistData {
  describle: IProp[];
  features: IProp[];
  benefits: IProp[];
  image: string;
}
const ProductInformation = ({ listData }: IlistData) => {
  return (
    <>
      {listData.describle?.map((listing) => (
        <div key={listing.id}>
          <p className="py-10">{listing.slug}</p>
        </div>
      ))}
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-7">
          <AsideGroup Text="Benefits:" data={listData.benefits} />
          <AsideGroup Text="Features:" data={listData.features} />
        </div>
        <aside className="col-span-2">
          <Image
            src={listData.image}
            width={200}
            height={600}
            alt="product_image_sample_"
            className="h-full w-full"
          />
        </aside>
      </div>
    </>
  );
};
export default ProductInformation;

const AsideGroup = ({ Text, data }) => {
  return (
    <aside className="py-2">
      <h3 className="font-bold font-serif text-black text-2xl py-2">{Text}</h3>
      {data?.map((list) => (
        <p key={list.id} className="py-2">
          {list.id}. <b className="text-mitti-paragraphColor"> {list.title} </b>
          {list.slug}
        </p>
      ))}
    </aside>
  );
};
