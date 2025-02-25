import { Briefcase, Code2, Home, Mail, Navigation, Phone } from "lucide-react";
import { FC } from 'react';

const GetIcon: FC<{ icon: string; className?: string }> = ({ icon, className }) => {
    switch (icon) {
        case "home":
            return <Home className={className} />
        case "code":
            return <Code2 className={className} />
        case "briefcase":
            return <Briefcase className={className} />
        case "location":
            return <Navigation className={className} />
        case "phone":
        case "cellphone":
            return <Phone className={className} />
        case "email":
        case "mail":
        case "mailbox":
            return <Mail className={className} />
        default: {
            return <></>
        }
    }
}

export default GetIcon