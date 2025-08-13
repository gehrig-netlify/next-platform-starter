'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/netlify-logo.svg';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Revalidation', href: '/revalidation' },
    { linkText: 'Image CDN', href: '/image-cdn' },
    { linkText: 'Edge Function', href: '/edge' },
    { linkText: 'Blobs', href: '/blobs' },
    { linkText: 'Classics', href: '/classics' }
];

export function Header() {
    const [theme, setTheme] = useState('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const initialTheme = storedTheme === 'light' || storedTheme === 'dark'
            ? storedTheme
            : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        setTheme(initialTheme);
        document.documentElement.classList.add(initialTheme);
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(nextTheme);
        localStorage.setItem('theme', nextTheme);
        setTheme(nextTheme);
    };

    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <Link href="/">
                <Image src={netlifyLogo} alt="Netlify logo" />
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2">
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <div className="ml-auto flex items-center gap-4">
                {mounted && (
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle Dark Mode"
                        className="p-2 rounded"
                    >
                        {theme === 'dark' ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path d="M12 3.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V4.5A.75.75 0 0112 3.75zm0 14.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM4.97 4.97a.75.75 0 011.06 0l1.061 1.061a.75.75 0 11-1.06 1.06L4.97 6.03a.75.75 0 010-1.06zm12.939 12.939a.75.75 0 011.06 0l1.061 1.061a.75.75 0 11-1.06 1.06l-1.061-1.061a.75.75 0 010-1.06zM3.75 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75zm14.25 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM6.28 17.72a.75.75 0 011.06 0l1.061-1.061a.75.75 0 10-1.06-1.06L6.28 16.66a.75.75 0 000 1.06zm11.439-11.439a.75.75 0 011.06 0l1.061 1.061a.75.75 0 11-1.06 1.06l-1.061-1.061a.75.75 0 010-1.06zM12 6a6 6 0 100 12 6 6 0 000-12z" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M17.25 12a5.25 5.25 0 01-8.076 4.427 6.75 6.75 0 008.076-8.076 5.25 5.25 0 010 3.649z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                    </button>
                )}
                <Link
                    href="https://github.com/netlify-templates/next-platform-starter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:inline-flex"
                >
                    <Image src={githubLogo} alt="GitHub logo" className="w-7" />
                </Link>
            </div>
        </nav>
    );
}
