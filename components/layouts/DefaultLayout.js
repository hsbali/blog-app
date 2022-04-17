import HeaderNav from "../shared/HeaderNav";
import Footer from "../shared/footer";

export default function DefaultLayout({ children }) {
    return (
        <>
            <HeaderNav />
            <main className="min-h-screen w-full">
                {children}
            </main>
            <Footer />
        </>
    )
}