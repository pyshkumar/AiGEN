import React, { useState, useEffect } from "react";
import { Loader, Card, FormField } from "../components";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const [searchText, setSearchText] = useState("The text searched for");

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Community Service{" "}
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Browser through a collection imaginative and visulally stunning people
        </p>
        <div className="mt-16">
          <FormField />
        </div>

        <div className="mt-10">
          {loading ? (
            <div className="flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <>
              {searchText && (
                <h2 className="font-medium text-[#666e75] text-xl mb">
                  Searching result{" "}
                  <span className=" text-[#222328]">{searchText}</span>
                </h2>
              )}

              <div className=""></div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
