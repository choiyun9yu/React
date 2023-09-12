import Container from '@/components/Container';
import Header from '@/components/Header';
import { ThemeProvider } from '@/lib/ThemeContext';
import '@/styles/global.css';

// Component라는 prop은 Next.js 페이지라고 생각하면 된다
export default function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider>
                <Header />
                <Container>
                    <Component {...pageProps} />
                </Container>
            </ThemeProvider>
        </>
    );
}
