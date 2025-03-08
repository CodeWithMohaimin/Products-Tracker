import Products from "./components/Products";

export default function Home() {
  return (
    <main>
      <div className="text-center max-w-[780px] mx-auto pt-[40px] pb-[60px]">
        <h1 className="h1 font-[600] leading-[1] tracking-tight capitalize">Products Tracker</h1>
        <p className="p leading-[1.1] text-gray-500">This website was created to track how long the products we regularly use in our daily lives have been in use or how long their lifespan has lasted.</p>
      </div>
      <Products />
    </main>
  );
}
