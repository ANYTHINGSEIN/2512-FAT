import { useState } from 'react'
import FAT2025Summary from './components/FAT2025Summary'
import RegretBubbles from './components/RegretBubbles'
import CoConstruction2026 from './components/CoConstruction2026'
import MedalAward from './components/MedalAward'

function App() {
  const [currentPage, setCurrentPage] = useState('summary'); // summary | regrets | construction | medal

  return (
    <>
      {currentPage === 'summary' && (
        <FAT2025Summary onNext={() => setCurrentPage('regrets')} />
      )}
      
      {currentPage === 'regrets' && (
        <RegretBubbles onNext={() => setCurrentPage('construction')} />
      )}

      {currentPage === 'construction' && (
        <CoConstruction2026 onNext={() => setCurrentPage('medal')} />
      )}

      {currentPage === 'medal' && (
        <MedalAward onRestart={() => setCurrentPage('summary')} />
      )}
    </>
  )
}

export default App
