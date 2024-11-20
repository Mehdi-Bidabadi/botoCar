import Link from "next/link"
import styles from "./Layout.module.css"

function Layout({ children }) {
    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                <h2>BotoCar</h2>
                <p>choose an buy your car</p>
                </Link>
            </header>
            <div className={styles.container}>
                {children}
            </div>
            <footer className={styles.footer}>
                BotoCar Next.js courses | BotoCar Project &copy;
            </footer>
        </>
    )
}

export default Layout