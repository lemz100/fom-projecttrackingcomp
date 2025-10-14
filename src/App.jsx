import './App.less';
import Menu from './assets/components/Menu/Menu'
import illus1 from './assets/images/illustration-devices.svg';
import Button from './assets/components/Button/Button';
import { useState } from 'react';

function App() {
  const [dropped, setDropped] = useState(false);
  function handleDropdown() {
    setDropped(prev => !prev);
  }

  return (
    <>
    <header>
      <div className="bg-ptn"></div>
      <img className='hero' src={illus1} alt="devices" />
      <Menu dropped={dropped} dropMenu={handleDropdown} />
    </header>
    <main>
      <span className="desc">
        <span className="top">
          <span className="headline">
            <span className='badge'>
              <p>New</p>
            </span>
            <p className='monograph'>Monograph Dashboard</p>
          </span>
          <p className="insight">Powerful insights into your team</p>
        </span>
        <p className="info">Project planning and time tracking for agile teams</p>
      </span>
      <span className="btn-grp">
        <Button text={'Schedule a Demo'}/>
        <p className="preview">To see a preview</p>
      </span>
    </main>
    </>
  );
}

export default App
