import React, {Suspense} from 'react';
const RemoteApp1 = React.lazy(() => import("microFrontEnd1/MicroFrontEnd1Index"));
const RemoteApp2 = React.lazy(() => import("microFrontEnd2/MicroFrontEnd2Index"));

function App() {
  return (
    <div>
      <h1>Container</h1>
      <Suspense fallback={"loading..."}>
        <RemoteApp1/>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <RemoteApp2/>
      </Suspense>
    </div>
  )
}

export default App