import NewAppartmentForm from "../features/newAppartment/NewAppartmentForm.js";

function CreateAppartment() {
  return (
    <main className="form-wrapper form-shadow" style={{ maxWidth: "900px" }}>
      <h3>Add new appartment</h3>
      <NewAppartmentForm />
    </main>
  );
}

export default CreateAppartment;
