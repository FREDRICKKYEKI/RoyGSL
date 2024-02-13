import { MidHeader } from "./MidHeader";

import { TopHeader } from "./TopHeader"

export const Header = () => {
    return (
      <header>
          <TopHeader />
            <MidHeader />
            <StyleSheet/>
      </header>
    );
};


const StyleSheet = () => {
    return (
      <style>
        {`
            header {
                border-bottom: 1px solid var(--color-primary);
            }
        `}
      </style>
    );
}
