export default function Input({ name, placeholder, type = "text" }) {
  return (
    <div className=" p-3 my-2">
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        className="border-2 block w-full rounded p-2"
      />
    </div>
  );
}
