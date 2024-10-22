import React from "react";
import Menu from "./Menu";

const SideBar = () => {
    return (
        <section>
            <Menu
                name={"Home"}
                image={
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5.62516 16.0419H14.3752C15.2956 16.0419 16.0418 15.2957 16.0418 14.3752V8.12519L10.0002 3.95853L3.9585 8.12519V14.3752C3.9585 15.2957 4.70469 16.0419 5.62516 16.0419Z"
                            stroke="#64748B"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M8.12465 13.1244C8.12465 12.2039 8.87085 11.4577 9.79132 11.4577H10.208C11.1285 11.4577 11.8747 12.2039 11.8747 13.1244V16.0411H8.12465V13.1244Z"
                            stroke="#64748B"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                }
            />
            <Menu
                name={"Calendar"}
                image={
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.66665 3.95834V6.87501M13.3333 3.95834V6.87501M6.45831 8.95834H13.5416M5.62498 16.0417H14.375C15.2955 16.0417 16.0416 15.2955 16.0416 14.375V7.29168C16.0416 6.3712 15.2955 5.62501 14.375 5.62501H5.62498C4.70451 5.62501 3.95831 6.3712 3.95831 7.29168V14.375C3.95831 15.2955 4.70451 16.0417 5.62498 16.0417Z"
                            stroke="#64748B"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                }
            />
            <Menu
                name={"Components"}
                image={
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.12498 5.83334L9.99998 3.95834L11.875 5.83334L9.99998 7.70834L8.12498 5.83334Z"
                            stroke="#64748B"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M12.2916 10L14.1666 8.12501L16.0416 10L14.1666 11.875L12.2916 10Z"
                            stroke="#64748B"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M8.12498 14.1667L9.99998 12.2917L11.875 14.1667L9.99998 16.0417L8.12498 14.1667Z"
                            stroke="#64748B"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M3.95831 10L5.83331 8.12501L7.70831 10L5.83331 11.875L3.95831 10Z"
                            stroke="#64748B"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                }
            />
        </section>
    );
};

export default SideBar;
