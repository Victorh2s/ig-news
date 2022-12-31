import { SignInButton } from './SignInButton';
import styles from './style.module.scss';
import { ActiveLink } from '../ActiveLink';

export function Header(){

 

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                           {/* or next/img */}
                <img src="/images/logo.svg" alt="logo" />
                <nav>

                    <ActiveLink activeClassName={styles.active} href="/">
                        Home 
                        
                    </ActiveLink>

                    <ActiveLink href="/posts" activeClassName={styles.active}>
                        Posts    
                    </ActiveLink>

                </nav>

                <SignInButton />
            </div>
        </header>
    )
}