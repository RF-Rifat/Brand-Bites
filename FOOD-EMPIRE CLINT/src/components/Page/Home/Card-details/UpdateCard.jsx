import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCard = () => {
  const data = useLoaderData();
  
  const { _id, name, brand, description, image, price, rating, type } = data;
  console.log(data);
  const handleInputData = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const image = formData.get("image");
    const brand = formData.get("brand");
    const price = formData.get("price");
    const type = formData.get("type");
    const rating = formData.get("rating");
    const description = formData.get("description");

    const newItem = {
      name,
      image,
      brand,
      price,
      type,
      rating,
      description,
    };
    // Updating data to server
    fetch(`https://brand-bites.vercel.app/userCartData/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {

          Swal.fire({
            title: "Success!",
            text: "Food Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <>
      <Helmet>
        <title>FOODIE | UPDATE</title>
      </Helmet>
      <div className="grid">
        <main className="mx-auto w-5/6 flex flex-col items-center justify-center">
          <header className="my-2 lg:mt-6 lg:mb-2">
            <p className="text-center font-extrabold text-warning tracking-tight text-3xl lg:text-5xl font-serif">
              UPDATE PRODUCTS
            </p>
          </header>
          <form
            onSubmit={handleInputData}
            className="w-full grid gap-2 px-8 bg-accent text-accent-content rounded my-4 lg:my-10 py-4"
          >
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6"
                  >
                    Food Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      defaultValue={name}
                      placeholder="Enter Food Name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 input input-bordered"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium leading-6"
                  >
                    Image URL
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="image"
                      defaultValue={image}
                      placeholder="Enter Image URL"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6"
                  >
                    Food Brand
                  </label>
                  <div className="mt-2">
                    <select
                      name="brand"
                      required
                      defaultValue={brand}
                      className="rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 select select-success w-full"
                    >
                      <option>CoCa-Cola</option>
                      <option>Mc-Donald</option>
                      <option>Starbucks Coffee</option>
                      <option>Pepsi Cola</option>
                      <option>Nestlé</option>
                      <option>Kellogg&apos;s</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6"
                  >
                    Price
                  </label>
                  <div className="mt-2">
                    <input
                      name="price"
                      type="text"
                      defaultValue={price}
                      placeholder="price in dollar"
                      autoComplete="text"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 input input-bordered"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6"
                  >
                    Food Type
                  </label>
                  <div className="mt-2">
                    <select
                      name="type"
                      defaultValue={type}
                      className="rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 select select-success w-full "
                    >
                      <option>Soft Drink</option>
                      <option>Sweets</option>
                      <option>Junk Food</option>
                      <option>Snacks</option>
                      <option>Salads</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6"
                  >
                    Rating
                  </label>
                  <div className="mt-2">
                    <select
                      name="rating"
                      defaultValue={rating}
                      className="rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 select select-success w-full "
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      defaultValue={description}
                      rows="6"
                      required
                      type="text"
                      name="description"
                      placeholder="Enter Food Description"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 input input-bordered"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="btn btn-warning">ADD PRODUCT</button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default UpdateCard;
