import React, { useEffect, useState } from "react";
import SkeletonCategory from "./loadings/skeleton/SkeletonCategory";

const CollectionsGrid = ({ collections }: { collections: any }) => {
  const [collectionsData, setCollectionsData] = useState([]);
  const [loadingCollectionsData, setLoadingCollectionsData] = useState(true);

  useEffect(() => {
    setCollectionsData(collections);
    setLoadingCollectionsData(false);
  }, [collections]);

  if (loadingCollectionsData) {
    return <SkeletonCategory />;
  }

  return (
    <div
    className="grid grid-cols-2 lg:grid-cols-4 gap-6"
    >
    {collectionsData?.map((item: any) => {
        const { title, handle, image, } = item;
        return (
            <div className="text-center relative">
                <img
                    src={image?.url}
                    width={424}
                    height={306}
                    alt={title}
                    className="h-[150px] md:h-[250px] lg:h-[306px] object-cover rounded-md"
                />
                <div className="py-6">
                    <h3 className="mb-2 font-medium h4">
                    <a
                        className="after:absolute after:inset-0"
                        href={`/products?c=${handle}`}
                    >
                        {title}
                    </a>
                    </h3>
                    <p className="text-light dark:text-darkmode-light text-sm md:text-xl">
                    {item.products?.edges.length} items
                    </p>
                </div>
            </div>
        );
    })}
    </div>
  );
};

export default CollectionsGrid;
