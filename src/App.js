import Navigation from './components/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function App() {
  const icon = <FontAwesomeIcon icon={faMagnifyingGlass} />
  return (
    <div className="container">
      <Navigation />
    </div>
  );
}

export default App;
