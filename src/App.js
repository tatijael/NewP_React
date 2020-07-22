import React from 'react';
import Card from "./Componentes/Card"
import pasteleriaRecetas from './Components_reload/api';


function App() {
  return (
    <Card info={pasteleriaRecetas[0]}>
    </Card>
  )
}

export default App;
