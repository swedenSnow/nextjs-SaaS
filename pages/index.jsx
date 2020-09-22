import React from 'react';
import Link from 'next/link';
import '../src/components/styles.module.css';

const Page = () => (
    <div>
        Index Page
        <Link href="/notes">
            <a>Link</a>
        </Link>
    </div>
);

export default Page;
