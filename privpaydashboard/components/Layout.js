
import NavBar from "./NavBar/navbar";
import TopBar from "./TopBar/topbar";


export default function Layout({ children }) {
    return (
        <>
            <NavBar />

            <main>{children}</main>

        </>
    )
}
