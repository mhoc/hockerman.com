import { TypingCursor } from "../components/text";
import { Link } from "./common/Link";
import { Text } from "./common/Text";
import colors from "./styles/colors";
import * as fonts from "./styles/fonts";

interface Props {
  children: any;
  header: any;
  nav: { label: string; href?: string }[];
  onClickTab?: (tab: string) => void;
  selectedTab?: string;
  tabs?: string[];
}

const BasePage = ({
  children,
  header,
  nav,
  onClickTab,
  selectedTab,
  tabs,
}: Props) => {
  return (
    <>
      <div className={`globalcontainer ${fonts.jetBrainsMono}`}>
        <header>
          <div className="nav-container">
            <div className="pwd">
              <Text color="muted">$PWD=</Text>
              {nav.map((navItem) => {
                return (
                  <span key={navItem.label}>
                    <Text color="muted">/</Text>
                    {navItem.href ? (
                      <Link hideUnderline href={navItem.href}>
                        {navItem.label}
                      </Link>
                    ) : (
                      <Text color="muted">{navItem.label}</Text>
                    )}
                  </span>
                );
              })}
              <Text color="muted">/</Text>
            </div>
          </div>
          <div className="header-container">
            <Text size="h1">
              {header}
              <TypingCursor />
            </Text>
            <div className="tabs-container">
              {tabs && tabs.length > 1
                ? tabs.map((tab) => (
                    <div
                      className={`tab-container${
                        selectedTab === tab ? " tab-selected" : ""
                      }`}
                      key={tab}
                    >
                      {selectedTab === tab ? (
                        <Text>{tab}</Text>
                      ) : (
                        <Link
                          onClick={() =>
                            onClickTab ? onClickTab(tab) : undefined
                          }
                        >
                          {tab}
                        </Link>
                      )}
                    </div>
                  ))
                : null}
            </div>
          </div>
        </header>
        <main>{children}</main>
      </div>
      <style jsx global>{`
        html {
          font-family: ${fonts.jetBrainsMono.style.fontFamily};
        }
        body {
          background-color: ${colors.background};
          margin: 0;
        }
        .globalcontainer {
          max-width: 1200px;
          padding: 15vh 10vw;
        }
        @media only screen and (max-width: 600px) {
          .globalcontainer {
            padding: 15vh 5vw;
          }
        }
        .nav-container {
          display: flex;
          flex-direction: column;
          margin-bottom: 4px;
        }
        .pwd {
          display: flex;
          flex-direction: row;
        }
        .header-container {
          display: flex;
          flex-direction: column;
          margin-bottom: 24px;
        }
        .tabs-container {
          display: flex;
          flex-direction: row;
          margin-top: 4px;
        }
        .tab-container {
          margin-right: 8px;
          padding: 2px 4px;
        }
        .tab-selected {
          border-radius: 4px;
          border: 1px solid ${colors.secondary};
        }
      `}</style>
    </>
  );
};

export default BasePage;
