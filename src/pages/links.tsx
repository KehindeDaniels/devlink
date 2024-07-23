// src/pages/links.tsx
import LinkCard from "@/components/LinkCard";
import MainLayout from "../layouts/MainLayout";
// import LinkCard from "../components/LinkCard";

const Links = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Links Page</h1>
      <p>Manage your shared links here.</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Example Link Cards */}
        <LinkCard
          title="Example Link"
          url="https://example.com"
          description="This is an example link."
        />
        <LinkCard
          title="Another Link"
          url="https://anotherlink.com"
          description="This is another example link."
        />
      </div>
    </>
  );
};

export default Links;
