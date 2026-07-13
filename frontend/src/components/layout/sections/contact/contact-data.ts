import {
    Mail,
    Phone,
    MapPin,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export const contactItems = [
    {
        icon: Mail,
        title: "Email",
        value: "nguyentienphat2904@gmail.com",
        href: "mailto:nguyentienphat2904@gmail.com",
    },
    {
        icon: Phone,
        title: "Phone",
        value: "(+84) 326 782 970",
        href: "tel:+84326782970",
    },
    {
        icon: MapPin,
        title: "Location",
        value: "Ho Chi Minh City, Vietnam",
    },
];

export const socials = [
    {
        icon: FaGithub,
        title: "GitHub",
        href: "https://github.com/nguyentienphat2904",
    },
    {
        icon: FaLinkedin,
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/ph%C3%A1t-nguy%E1%BB%85n-ti%E1%BA%BFn-993854344/",
    },
];