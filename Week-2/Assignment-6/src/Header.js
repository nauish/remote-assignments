const Header = () => (
  <header>
    <nav className="nav">
      <Logo />
      <div>
        <ul>
          <NavItem
            text="Item 1"
            link={"https://www.youtube.com/watch?v=Tn6-PIqc4UM"}
          />
          <NavItem
            text="Item 2"
            link={"https://www.youtube.com/watch?v=Tn6-PIqc4UM"}
          />
          <NavItem
            text="Item 3"
            link={"https://www.youtube.com/watch?v=Tn6-PIqc4UM"}
          />
          <NavItem
            text="Item 4"
            link={"https://www.youtube.com/watch?v=Tn6-PIqc4UM"}
          />
        </ul>
      </div>
    </nav>
  </header>
);

const Logo = () => <div className="logo">Welcome Title / Logo</div>;

const NavItem = ({ text, link }) => (
  <li>
    <a href={link}>{text}</a>
  </li>
);

export default Header;
