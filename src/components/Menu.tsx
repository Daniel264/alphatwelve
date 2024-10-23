import { MenuArray } from "../utils/Menu";

const Menu = () => {
    return (
        <div className="border-[#ADA9BB]/20 border-r-2 h-full">
            <ul className="menu h-[100vh] rounded-none w-56">
                {MenuArray.map((item, index) => (
                    <li key={index} className="flex flex-row">
                        <img className="w-14" src={item.image} alt="" />
                        <a className="font-medium text-lg">{item.text}</a>
                    </li>
                ))}
                <div className="w-full flex pl-5 gap-2 pt-3">
                    <input
                        type="checkbox"
                        value="synthwave"
                        className="toggle theme-controller"
                    />
                    <span>Dark Mode</span>
                </div>
            </ul>
        </div>
    );
};

export default Menu;
