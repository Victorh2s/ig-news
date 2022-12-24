import { SignInButton } from './SignInButton';
import styles from './style.module.scss';

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                           {/* or next/img */}
                <img src="/images/logo.svg" alt="logo" />
                <nav>
                    <a className={styles.active} href="">Home</a>
                    <a href="" >Posts</a>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}