import './App.css';
import Head from "./Components/Head/Head";
import RowPosts from "./Components/RowPosts/RowPosts";
import {
    actionsEndpoint,
    netflixOriginalsEndpoint,
    horrorEndpoint,
    romanceEndpoint,
    comedyEndpoint,
    documentariesEndpoint
} from "./constants/apiEndPoints";

function App() {
    return (
        <div className="App">
            <Head/>
            <RowPosts title={'Netflix Originals'} endpoint={netflixOriginalsEndpoint} bigPoster={true}/>
            <RowPosts title={'Actions'} endpoint={actionsEndpoint}/>
            <RowPosts title={'Horror'} endpoint={horrorEndpoint} />
            <RowPosts title={'Romance'} endpoint={romanceEndpoint} />
            <RowPosts title={'Comedy'} endpoint={comedyEndpoint} />
            <RowPosts title={'Documentaries'} endpoint={documentariesEndpoint} />
        </div>
    );
}

export default App;
