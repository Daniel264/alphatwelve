import { useEffect, useState } from "react";
import { MenuArray } from "../utils/Menu";
import avatar from "../assets/images/avatar.svg";

const Menu = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div className="border-[#ADA9BB]/20 drawer drawer-start border-r-2 h-full">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            {/* Drawer Content */}
            <div className="drawer-content">
                <label
                    htmlFor="my-drawer-4"
                    className="w-full drawer-button text-center flex cursor-pointer items-center justify-center font-medium flex-col text-2xl"
                >
                    <span className=" bg-[#2563EB]/30 h-10 px-5">Logo</span>
                    <ul>
                        {MenuArray.map((item, index) => (
                            <li key={index} className="pb-2">
                                <img
                                    className="w-6 h-8"
                                    src={item.image}
                                    alt=""
                                />
                            </li>
                        ))}
                    </ul>
                </label>
                {/* Content inside the main section of the page */}
            </div>

            {/* Drawer Side */}
            <div className="drawer-side z-50">
                <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu h-[100vh]  bg-white rounded-none w-56">
                    {MenuArray.map((item, index) => (
                        <li key={index} className="flex flex-row">
                            <img
                                className="w-14"
                                src={item.image}
                                alt="Item Logo Images"
                            />
                            <a className="font-medium text-lg">{item.text}</a>
                        </li>
                    ))}
                    <div className="w-full flex pl-5 gap-2 pt-3">
                        <input
                            type="checkbox"
                            checked={theme === "dark"}
                            onChange={toggleTheme}
                            className="toggle theme-controller"
                        />
                        <span className="text-lg">Dark Mode</span>
                    </div>
                    <div className="w-full flex pl-5 gap-2 pt-3 cursor-pointer">
                        <img
                            src={avatar}
                            alt="image of an avatar"
                        />
                        <div className="flex flex-col">
                            <span className="text-lg">Rudra Devi</span>
                            <span className="text-sm">rudra.devi@gmail.com</span>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Menu;
