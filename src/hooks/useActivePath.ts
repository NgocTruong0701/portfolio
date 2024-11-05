import { usePathname } from "next/navigation"

export const useActivePath = (path: string) => {
    const pathname = usePathname();
    return path === pathname;
}