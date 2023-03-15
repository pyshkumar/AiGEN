import React from "react";

const CreatePost = () => {
  const handleSubmit = () => {};

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Here we enter textual input to get image
        </p>
      </div>

      <div>
        <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <label htmlFor="">Enter the text</label>
            <input type="text" />
            <img
              className="w-28 h-40"
              src="https://animalia-life.com/data_images/kangaroo/kangaroo1.jpg"
              alt=""
            />
            <button type="button" onClick={handleSubmit}></button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
