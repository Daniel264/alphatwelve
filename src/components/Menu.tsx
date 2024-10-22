import { MenuArray } from "../utils/Menu";

const Menu = () => {
    return (
        <div>
            <ul className="menu border-[#ADA9BB]/20 border-r-2 h-[100vh] rounded-none w-56">
                {MenuArray.map((item, index) => (
                    <li key={index} className="flex flex-row">
                        <img className="w-14" src={item.image} alt="" />
                        <a>{item.text}</a>
                    </li>
                ))}
                
            </ul>

        </div>
    );
};

export default Menu;
