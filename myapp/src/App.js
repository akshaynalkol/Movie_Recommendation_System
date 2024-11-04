import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Components/MainContainer/Main';
import Popular from './Components/Popular/Popular';
import TopRated from './Components/TopRated/TopRated';
import Upcoming from './Components/Upcoming/Upcoming';
import MoviePage from './Components/MoviePage/MoviePage';
import SearchPage from './Components/SearchPage/SearchPage';

function App() {
  return (
    <> 
      <Router>
        <Routes>
          <Route path='/' element={<Main />}> 
            <Route index element={<Popular />} />
            <Route path='/topRated' element={<TopRated />} />
            <Route path='/upcoming' element={<Upcoming />} />  
            <Route path='/moviePage/:id' element={<MoviePage />} />
            <Route path='/search' element={<SearchPage />} />  
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;