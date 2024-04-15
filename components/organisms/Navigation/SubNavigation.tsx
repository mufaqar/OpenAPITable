import Link from "next/link";

const SubNavigation = () => {
  const navLinks = [
    "Open Digital Architecture",
    "Quick Links",
    "Resources",
    "Projects",
    "Communities",
  ];

  return (
    <div className="subNavigation">
      {navLinks.map((link) => (
        <Link key={link} href="/">
          <p className="subNavigation__item">{link}</p>
        </Link>
      ))}
    </div>
  );
};

export default SubNavigation;
