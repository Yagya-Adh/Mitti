"use client";
import Image from "next/image";
import React from "react";
import MainImageBanner from "@/app/components/banner/MainImageBanner";

const BlogDetails = () => {
  return (
    <div className="bg-mitti-bodyColor">
      <MainImageBanner Title="Cozy Corners: Natural Texture and Warmth" />
      <section className="mx-auto max-w-screen-2xl px-10 py-10">
        <Image
          src={"/assets/images/blog/cozyCorn.webp"}
          alt="blog-details"
          width={1000}
          height={1000}
          className=""
        />
      </section>

      <DateTime />
    </div>
  );
};

export default BlogDetails;

const DateTime = () => {
  return (
    <>
      <section className="max-w-screen mx-auto px-10 py-10">
        <div className="flex items-center">
          <h4 className="py-4 border-b">
            <span className="font-bold">Date:</span> September 5, 2024
          </h4>

          <h3 className="py-4 border-b">
            <span className="font-bold">Share On:</span>
          </h3>
        </div>
      </section>

      <SingleDetails />
    </>
  );
};

const SingleDetails = () => {
  return (
    <>
      <section className="flex  items-center">
        <h3 className="font-bold  px-4 ">Organic Elements:</h3>
        <p>
          The image of woven baskets by the window highlights the importance of
          incorporating natural textures into minimalist decor. These baskets
          add warmth and an organic touch to the space, balancing the clean
          lines and neutral tones typically associated with minimalism. The
          soft, woven texture of the baskets brings a tactile element that
          contrasts beautifully with smooth surfaces like wood or stone,
          creating visual interest without overwhelming the space. By
          integrating organic elements like these baskets, you can soften the
          overall aesthetic and make your home feel more inviting and lived-in.
        </p>
      </section>

      <section className="flex flex-col">
        <h3>Versatility and Functionality:</h3>
        <p>
          One of the key principles of minimalist design is the emphasis on
          functionality. The woven baskets showcased are not only decorative but
          also incredibly practical for storage. Whether used to hold extra
          blankets in the living room, towels in the bathroom, or magazines in a
          reading nook, these baskets provide versatile storage solutions that
          help keep your space organized and clutter-free. Their simple,
          unadorned design ensures they blend seamlessly with various decor
          styles while adding a touch of rustic charm. Highlighting the dual
          purpose of these baskets emphasizes how minimalist decor can be both
          beautiful and functional.
        </p>
      </section>

      <section className="flex flex-col">
        <h3>Creating Cozy Corners:</h3>
        <p>
          Minimalist design often focuses on the larger picture, but creating
          small, cozy corners can add personality and warmth to your home. The
          image suggests how a pair of woven baskets can transform a simple
          corner into a cozy and functional space. Adding elements like a soft
          throw, a houseplant, or a small stack of books can enhance this nook,
          making it a perfect spot for relaxation. These intimate spaces offer a
          retreat within your home, promoting a sense of calm and well-being. By
          paying attention to these details, you can create a harmonious balance
          between minimalism and coziness.
        </p>
      </section>

      <section className="flex flex-col">
        <h3>Organic Elements</h3>
        <p>
          The image of woven baskets by the window highlights the importance of
          incorporating natural textures into minimalist decor. These baskets
          add warmth and an organic touch to the space, balancing the clean
          lines and neutral tones typically associated with minimalism. The
          soft, woven texture of the baskets brings a tactile element that
          contrasts beautifully with smooth surfaces like wood or stone,
          creating visual interest without overwhelming the space. By
          integrating organic elements like these baskets, you can soften the
          overall aesthetic and make your home feel more inviting and lived-in.
        </p>
      </section>

      <section className="flex flex-col">
        <h3>Organic Elements</h3>
        <p>
          The image of woven baskets by the window highlights the importance of
          incorporating natural textures into minimalist decor. These baskets
          add warmth and an organic touch to the space, balancing the clean
          lines and neutral tones typically associated with minimalism. The
          soft, woven texture of the baskets brings a tactile element that
          contrasts beautifully with smooth surfaces like wood or stone,
          creating visual interest without overwhelming the space. By
          integrating organic elements like these baskets, you can soften the
          overall aesthetic and make your home feel more inviting and lived-in.
        </p>
      </section>

      <section className="flex flex-col">
        <h3>Organic Elements</h3>
        <p>
          The image of woven baskets by the window highlights the importance of
          incorporating natural textures into minimalist decor. These baskets
          add warmth and an organic touch to the space, balancing the clean
          lines and neutral tones typically associated with minimalism. The
          soft, woven texture of the baskets brings a tactile element that
          contrasts beautifully with smooth surfaces like wood or stone,
          creating visual interest without overwhelming the space. By
          integrating organic elements like these baskets, you can soften the
          overall aesthetic and make your home feel more inviting and lived-in.
        </p>
      </section>

      <section className="flex flex-col">
        <h3>Organic Elements</h3>
        <p>
          The image of woven baskets by the window highlights the importance of
          incorporating natural textures into minimalist decor. These baskets
          add warmth and an organic touch to the space, balancing the clean
          lines and neutral tones typically associated with minimalism. The
          soft, woven texture of the baskets brings a tactile element that
          contrasts beautifully with smooth surfaces like wood or stone,
          creating visual interest without overwhelming the space. By
          integrating organic elements like these baskets, you can soften the
          overall aesthetic and make your home feel more inviting and lived-in.
        </p>
      </section>

      <section className="flex flex-col">
        <h3>Organic Elements</h3>
        <p>
          The image of woven baskets by the window highlights the importance of
          incorporating natural textures into minimalist decor. These baskets
          add warmth and an organic touch to the space, balancing the clean
          lines and neutral tones typically associated with minimalism. The
          soft, woven texture of the baskets brings a tactile element that
          contrasts beautifully with smooth surfaces like wood or stone,
          creating visual interest without overwhelming the space. By
          integrating organic elements like these baskets, you can soften the
          overall aesthetic and make your home feel more inviting and lived-in.
        </p>
      </section>
    </>
  );
};
