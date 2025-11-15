import Background from './components/Background';
import useGetImages from './hooks/useGetImages';
import Settings from './components/Settings';
// const BASE_URL = '/v1/search?query=nature&orientation=square';

function App() {
    const images = useGetImages();

    console.log({ images });
    return (
        <>
            <Background />
            <h1>Memory Game</h1>
            <Settings />
        </>
    );
}

export default App;
