/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import React from 'react';
import Link from 'next/link';

const Nav = props => {
    const [colorMode, setColorMode] = useColorMode();
    return (
        <header
            sx={{
                height: '60px',
                width: '100vw',
                bg: 'primary',
                boxShadow:
                    'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
                backgroundColor: 'primary',
                mb: '24px',
            }}
        >
            <nav
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    variant: 'containers.page',
                    height: '100%',
                }}
            >
                <Link href="/">
                    <a
                        sx={{
                            fontWeight: 'bold',
                            fontSize: 4,
                            cursor: 'pointer',
                            flex: '1 1 auto',
                        }}
                    >
                        Note App
                    </a>
                </Link>

                <Link href="/notes">
                    <a
                        sx={{
                            color: 'secondary',
                            fontSize: 3,
                            cursor: 'pointer',
                            fontWeight: 'bold',
                        }}
                    >
                        notes
                    </a>
                </Link>
                <button
                    sx={{
                        background: 'transparent',
                        fontSize: 3,
                        textAlign: 'center',
                        border: 'none',
                        outline: 'none',
                        padding: '7px 14px',
                        cursor: 'pointer',
                        borderRadius: '4px',
                    }}
                    type="button"
                    onClick={e => {
                        setColorMode(
                            colorMode === 'default' ? 'dark' : 'default'
                        );
                    }}
                >
                    {colorMode === 'default' ? '🌚' : '🌞'}
                </button>
                <a
                    sx={{
                        color: 'text',
                        fontSize: 1,
                        cursor: 'pointer',
                    }}
                    href={process.env.REPO_URL}
                >
                    help
                </a>
            </nav>
        </header>
    );
};

export default Nav;
