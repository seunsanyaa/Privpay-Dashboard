
import NavBar from "./NavBar/navbar";
import TopBar from "./TopBar/topbar";
import layout from "./layout.module.scss"

export default function Layout({ children }) {
    return (
        <div className={layout.style}>
            <NavBar />

            <main>{children}</main>

        </div>
    )
}
