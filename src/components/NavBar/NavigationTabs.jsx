function NavigationTabs({ Tabs, activeSection }) {
  return (
    <ul className="flex gap-6">
      {Tabs.map((TabName) => (
        <li key={TabName}>
          <a
            href={`#${TabName}`}
            className={`text-(--secondary) nav-link ${
              activeSection === TabName ? "active-nav-link" : ""
            }`}
          >
            {TabName}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavigationTabs;