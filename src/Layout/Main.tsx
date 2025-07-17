
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "@/Shared/Footer";
import Header from "@/Shared/Header";

import { Outlet } from "react-router";


const Main = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Header />
                <div className="flex min-h-screen">
                    <Outlet />
                </div>
                <Footer />
            </ThemeProvider>

        </div>
    );
};

export default Main;