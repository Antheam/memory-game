import Background from './components/Background';
import useGetImages from './hooks/useGetImages';
// const BASE_URL = '/v1/search?query=nature&orientation=square';

function App() {
    useGetImages();
    return (
        <>
            <Background />
            <h1>Memory Game</h1>
        </>
    );
}

export default App;
