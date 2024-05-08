import { Bars3Icon } from "@heroicons/react/24/outline";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import BasketLoginNav from "./BasketLoginNav";
import Logo from "./Logo";

export default function Header() {
  const hamburgerMenuHandler = () => {};
  return (
    <>
      <header className="p-5 container">
        <div className="flex items-center flex-wrap lg:flex-row lg:flex-1 justify-between">
          <Bars3Icon
            className="w-7 lg:hidden text-red-600"
            onClick={hamburgerMenuHandler}
          />
          <Logo />
          <SearchBar />
          <BasketLoginNav />
        </div>
      </header>
      <Nav />
    </>
  );
}