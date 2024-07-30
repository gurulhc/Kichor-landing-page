import ItemsList from "./components/items/page";
import Header from "./components/navbar/page";
import WaitList from "./components/waitlist/page";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <WaitList />
      <ItemsList />
    </div>
  );
}
