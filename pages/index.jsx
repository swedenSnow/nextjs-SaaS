/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';

export default ({ content }) => (
    <div sx={{ height: `calc(100vh - 108px)` }}>
        <div
            sx={{
                variant: 'containers.page',
                display: 'flex',
                alignItems: 'center',
                height: '100%',
            }}
        >
            <h1
                sx={{
                    fontSize: 8,
                    my: 0,
                    color: 'red.9',
                }}
            >
                {content.title}
            </h1>
        </div>
    </div>
);

export function getStaticProps() {
    //! get data from cms

    return {
        props: {
            content: {
                title: 'This is a really dope note taking app. No really',
            },
        },
    };
}
