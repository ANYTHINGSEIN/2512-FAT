import { useState } from 'react'
import FAT2025Summary from './components/FAT2025Summary'
import RegretBubbles from './components/RegretBubbles'

function App() {
  const [currentPage, setCurrentPage] = useState('summary'); // summary | regrets | next...

  return (
    <>
      {currentPage === 'summary' && (
        <FAT2025Summary onNext={() => setCurrentPage('regrets')} />
      )}
      
      {currentPage === 'regrets' && (
        <RegretBubbles onNext={() => alert('第三页开发中...')} />
      )}
    </>
  )
}

export default App
