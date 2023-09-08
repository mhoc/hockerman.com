import Link from "../Link/Link";
import Text from "../Text/Text";
import TypingCursor from "../TypingCursor/TypingCursor";

import styles from "./BasePage.module.css";

interface Props {
  children: React.ReactNode;
  header: any;
  nav: { label: string; href?: string }[];
  onClickTab?: (tab: string) => void;
  selectedTab?: string;
  tabs?: string[];
}

export default function BasePage({
  children,
  header,
  nav,
  onClickTab,
  selectedTab,
  tabs,
}: Props) {
  return (
    <div className={styles.globalcontainer}>
      <header>
        <div className={styles.navcontainer}>
          <div className={styles.pwd}>
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
        <div className={styles.headercontainer}>
          <Text size="h1">
            {header}
            <TypingCursor />
          </Text>
          <div className={styles.tabscontainer}>
            {tabs && tabs.length > 1
              ? tabs.map((tab) => (
                  <div
                    className={`${styles.tabcontainer} ${
                      selectedTab === tab ? styles.tabselected : ""
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
  );
}
