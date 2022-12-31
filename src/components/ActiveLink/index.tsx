import { useRouter } from 'next/dist/client/router';
import Link, {LinkProps} from 'next/link';

interface ActiveLinkProps extends LinkProps{
    children: string;
    activeClassName: string;
}

export function ActiveLink({children, activeClassName, ...rest}: ActiveLinkProps){

    const { asPath } = useRouter()

    const className = asPath === rest.href ? activeClassName : '';

    return (
        <Link {...rest} className={className}>
            {children}
        </Link>
    )

}