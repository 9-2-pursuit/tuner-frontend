function Modal({ deleteSong }) {
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirm Delete</h3>
          <p className="py-4">
            Are you sure you want to delete this awesome song ?
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn" onClick={deleteSong}>
              Yes
            </label>
            <label htmlFor="my-modal" className="btn">
              No
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
