import { MidHeader } from "./MidHeader";
import { Nav } from "./Nav";
import { TopHeader } from "./TopHeader"

export const Header = () => {
    return (
      <header>
        <TopHeader />
        <MidHeader />
        <Nav />
      </header>
    );
};


