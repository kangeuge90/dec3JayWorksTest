import { Link } from 'react-router-dom'
import DisplayJayWorks from './DisplayJayWorks';
import DisplayMezzanineAssembly from './DisplayMezzanineAssembly';
import DisplayAwall from './DisplayAwall';

function Home() {
    return (
        <body className="homeContainer">
          <h1>Home</h1>
          <img src=""></img>
            {/* Jay Works background image */}
          <div className="whatWeDoContainer">
            <img src=""></img>
            <div className="displayContainer">
              <DisplayAwall />
              <DisplayJayWorks />
              <DisplayMezzanineAssembly />
            </div>
          </div>
        </body>
    )
}

export default Home;