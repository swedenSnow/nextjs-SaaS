/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default ({ note }) => (
    //! Client side rendering
    // const router = useRouter();
    // const { id } = router.query;

    <div sx={{ variant: 'containers.page' }}>
        <h1>Note: {note.title} </h1>
        <p> Id is: {note.id}</p>
    </div>
);

export async function getServerSideProps({ params, req, res }) {
    const response = await fetch(
        `${process.env.API_URL}/api/note/${params.id}`
    );
    if (!response.ok && typeof window === 'undefined') {
        res.writeHead(302, { Location: '/notes' });
        res.end();
        return { props: {} };
    }

    const { data } = await response.json();

    if (data) {
        return {
            props: { note: data },
        };
    }
}
