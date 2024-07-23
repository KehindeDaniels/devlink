import Button from "@/components/Button";

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to the Link Sharing App
      </h1>
      <div className="mb-4">
        <Button label="c" variant="primary" state="default" />
      </div>
      <div className="mb-4">
        <Button label="Button" variant="primary" state="active" />
      </div>
      <div className="mb-4">
        <Button label="Button" variant="primary" state="disabled" />
      </div>
      <div className="mb-4">
        <Button label="Button" variant="secondary" state="default" />
      </div>
      <div className="mb-4">
        <Button label="Button" variant="secondary" state="active" />
      </div>
      <div className="mb-4">
        <Button label="Button" variant="secondary" state="disabled" />
      </div>
    </div>
  );
};

export default Home;
