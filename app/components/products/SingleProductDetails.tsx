"use client";
import Image from "next/image";
import MainImageBanner from "@/app/components/banner/MainImageBanner";
import Button from "@/app/components/button/Button";
import allproductDetails from "@/products.json";

const data = allproductDetails;

const SingleProductDetails = () => {
  return (
    <main>
      {data?.map((list) => (
        <div key={list.id} className="bg-mitti-bodyColor ">
          <MainImageBanner Title={list.title} />

          <section className="grid grid-cols-10 gap-10 items-start py-40">
            <aside className="row-span-10 col-span-6 grid grid-cols-6 items-center">
              <div className="col-span-1 items-center flex-col justify-center px-10">
                {list.sampleImage?.map((sample) => (
                  <div key={sample.id} className="my-4">
                    <Image
                      src={sample.imageSample}
                      alt={"sample_"}
                      width={100}
                      height={100}
                      className=""
                    />
                  </div>
                ))}
              </div>
              <div className="col-span-5">
                <Image
                  src={list.image}
                  alt={list.title}
                  width={600}
                  height={1000}
                  className=""
                />
              </div>
            </aside>

            <aside className="flex flex-col sticky top-14 text-mitti-secondaryTextColor py-10 col-span-3">
              <h5>{list.starts}</h5>

              <h1 className="font-serif text-4xl font-bold text-black py-4">
                {list.title}
              </h1>

              <p className="font-bold text-mitti-paragraphColor">
                {list.description}
              </p>
              <h3 className="">${list.price} USD</h3>

              <form className="flex flex-col">
                <label className="py-4">Quantity</label>
                <div className="flex w-full">
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={list.quantity}
                    className="focus:outline-none border border-mitti-borderColor w-1/4 px-1 py-2"
                  />
                  <div className="w-full flex-col flex ms-2">
                    <Button variant="button-default" buttonName="Add to Cart" />
                  </div>
                </div>
              </form>
            </aside>
          </section>
          <ProductFooterSection listData={list.productInformation} />
        </div>
      ))}
    </main>
  );
};

export default SingleProductDetails;

const ProductFooterSection = ({ listData }) => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 font-sans text-mitti-secondaryTextColor">
      <TabBar />
      <p>
        {listData.describle?.map((listing) => (
          <div key={listing.id}>{listing.slug}</div>
        ))}
      </p>

      <SectionGroup Text="Benifita" data={listData.benefits} />
      <SectionGroup Text="Feature" data={listData.features} />
    </section>
  );
};

const SectionGroup = ({ Text, data }) => {
  return (
    <section className="py-5">
      <h3 className="font-bold font-serif">{Text}</h3>
      {data?.map((list) => (
        <p key={list.id} className="py-2">
          {list.id}. <b> {list.title} </b>
          {list.slug}
        </p>
      ))}
    </section>
  );
};

const tabList = [
  { id: 1, tabName: "Product Info" },
  { id: 2, tabName: "Shipping Info" },
  { id: 3, tabName: "Return Info" },
];
const TabBar = () => {
  return (
    <div className=" border-b border-b-black flex items-center justify-center">
      {tabList?.map((list) => (
        <div className="" key={list.id}>
          <h3 className=" text-xl font-serif font-bold mx-3 border-b-2 hover:border-b-mitti-secondaryTextColor py-2">
            {list.tabName}
          </h3>
        </div>
      ))}
    </div>
  );
};
