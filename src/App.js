import useFetchIndexes from './hooks/useFetchIndexes';
import Loader from './components/shared/Loader';
import Header from './components/Header';
import Error from './components/shared/Error';
import IndexGroup from './components/IndexGroup';
import './App.css';

function App() {
  const [indexes, isLoading, error] = useFetchIndexes();

  return (
    <div className='app'>
      <div className='app__container'>
        <Header />
        <main>
          {error ? (
            <Error message={error} />
          ) : isLoading ? (
            <Loader />
          ) : (
            indexes.map((group) => (
              <IndexGroup
                key={group.id}
                name={group.name}
                id={group.id}
                items={group.indexes}
              />
            ))
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
