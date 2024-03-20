import { useRouter } from 'next/router';
import Link from 'next/link';
import breadcrumbsStyles from "../styles/breadcrumbs.module.css";

const Breadcrumbs = () => {
    const router = useRouter();
    const pathnames = router.pathname.split('/').filter((x) => x);

    return (
        <nav className={breadcrumbsStyles.nav}>
            <ol className={breadcrumbsStyles["breadcrumbs-list"]}>
                <li>
                    <Link className={breadcrumbsStyles["breadcrumb-item"]} href="/">
                        Home
                    </Link>
                </li>
                {pathnames.map((pathname, index) => {
                    // Перевірка, чи поточний шлях не містить "services"
                    if (pathname.toLowerCase() === "services") return null;

                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    return (
                        <li key={index} className={breadcrumbsStyles["breadcrumbs-list"]}>
                            {isLast ? (
                                <span>{pathname}</span>
                            ) : (
                                <Link className={breadcrumbsStyles["breadcrumb-item"]} href={routeTo}>
                                    {pathname}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
