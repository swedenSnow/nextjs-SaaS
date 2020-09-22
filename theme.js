import { roboto, tailwind } from '@theme-ui/presets';

const theme = {
    ...tailwind,
    colors: {
        ...tailwind.colors,
        primary: '#fff',
        secondary: '#ff1744',
        background: '#fff',
        modes: {
            dark: {
                text: '#fff',
                background: '#121212',
                primary: '#1e1e1e',
                secondary: '#17ffd1',
            },
        },
    },
    containers: {
        card: {
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            border: '1px solid',
            borderColor: 'muted',
            borderRadius: '4px',
            p: 2,
        },
        page: {
            width: '100%',
            maxWidth: '960px',
            m: 0,
            mx: 'auto',
            padding: '24px',
            backgroundColor: 'primary',
        },
    },
    styles: {
        ...tailwind.styles,
    },
};
export default theme;
