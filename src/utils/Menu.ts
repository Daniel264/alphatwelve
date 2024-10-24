import { ReactNode } from "react";
import Home from "../assets/images/home.svg";

interface MenuItem {
    id: number;
    text: ReactNode;
    image: string;
}

export const MenuArray: MenuItem[] = [
    { id: 1, text: "Home", image: Home },
    {
        id: 2,
        text: "Events",
        image: "src/assets/images/solar_calendar-linear.svg",
    },

    {
        id: 3,
        text: "Speakers",
        image: "src/assets/images/solar_user-speak-rounded-linear.svg",
    },
    {
        id: 4,
        text: "Reports",
        image: "src/assets/images/solar_document-linear.svg",
    },
    {
        id: 5,
        text: `(
            <div>
                <div>
                    2
                </div>
            </div>
        )`, // Pass JSX directly
        image: "src/assets/images/bell.svg",
    },
    {
        id: 6,
        text: "Messages",
        image: "src/assets/images/double-chat-bubble (1).svg",
    },
    { id: 7, text: "Settings", image: "src/assets/images/settings-2.svg" },
    {
        id: 8,
        text: "Collapse",
        image: "src/assets/images/double-chevron-left (1).svg",
    },
];
