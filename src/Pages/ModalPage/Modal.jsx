const Modal = () => {
  return (
    <div>
      {/* The button to open modal */}
      <label
        htmlFor={`my-modal-${index}`}
        className="btn-success px-2 rounded-lg"
      >
        Edit
      </label>

      {/* The modal */}
      <input
        type="checkbox"
        id={`my-modal-${index}`}
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="w-full mx-auto py-4">
            <form onSubmit={handleFormSubmit}>
              {/* Form fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div>
                  <div className="mb-4">
                    <label
                      htmlFor={`name-${index}`}
                      className="block text-sm font-medium"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      id={`name-${index}`}
                      className="mt-1 p-2 border rounded-md w-full"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor={`subCategory-${index}`}
                      className="block text-sm font-medium"
                    >
                      Sub-category
                    </label>
                    <input
                      type="text"
                      id={`subCategory-${index}`}
                      className="mt-1 p-2 border rounded-md w-full"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <label
                      htmlFor={`price-${index}`}
                      className="block text-sm font-medium"
                    >
                      Price
                    </label>
                    <input
                      type="text"
                      id={`price-${index}`}
                      className="mt-1 p-2 border rounded-md w-full"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor={`quantity-${index}`}
                      className="block text-sm font-medium"
                    >
                      Available Quantity
                    </label>
                    <input
                      type="number"
                      id={`quantity-${index}`}
                      className="mt-1 p-2 border rounded-md w-full"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor={`description-${index}`}
                  className="block text-sm font-medium"
                >
                  Description
                </label>
                <textarea
                  id={`description-${index}`}
                  className="mt-1 p-2 border rounded-md w-full"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-400 w-full mx-auto font-bold uppercase"
                >
                  Edit Toy
                </button>
              </div>
            </form>
          </div>
          <div className="modal-action">
            <label htmlFor={`my-modal-${index}`} className="btn">
              close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
