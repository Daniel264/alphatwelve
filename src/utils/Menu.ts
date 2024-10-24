import { ReactNode } from "react";
import Home from "../assets/images/home.svg";
import solar_calendar from "../assets/images/solar_calendar-linear.svg";
import solar_user_speak_rounded_linear from "../assets/images/solar_user-speak-rounded-linear.svg";
import solar_document_linear from "../assets/images/solar_document-linear.svg";
import bell from "../assets/images/bell.svg";
import double_chat_bubble from "../assets/images/double-chat-bubble (1).svg";
import settings_2 from "../assets/images/settings-2.svg";
import double_chevron_left from "../assets/images/double-chevron-left (1).svg";

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
        image: solar_calendar,
    },

    {
        id: 3,
        text: "Speakers",
        image: solar_user_speak_rounded_linear,
    },
    {
        id: 4,
        text: "Reports",
        image: solar_document_linear,
    },
    {
        id: 5,
        text: "Notifications",
        image: bell,
    },
    {
        id: 6,
        text: "Messages",
        image: double_chat_bubble,
    },
    { id: 7, text: "Settings", image: settings_2 },
    {
        id: 8,
        text: "Collapse",
        image: double_chevron_left,
    },
];
