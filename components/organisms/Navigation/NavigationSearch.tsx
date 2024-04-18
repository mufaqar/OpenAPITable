import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NavigationSearch = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handleFormSubmit = (e:any) => {
    e.preventDefault();
    router.push(`https://www.tmforum.org/?s=${value}`);
  };

  return (
    <div className="navigation-container">
      <div className="navigation__search">
        <div>
          <p>SEARCH:</p>
        </div>
        <div className="navigation__search__input">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              style={{
                width: "100%",
                outline: "none",
                height: "33px",
                fontSize: "16px",
                paddingLeft: "5px",
              }}
            />
          </form>
        </div>
        <div>
          <div
            className="navigation__search__icon"
            onClick={(e) => handleFormSubmit(e)}
          >
            <Image
              src="/oda/open-apis/icons/tmf-search-icon-white.svg"
              alt="search icon"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationSearch;
