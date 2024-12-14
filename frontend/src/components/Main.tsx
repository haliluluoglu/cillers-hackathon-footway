import React from 'react';
import Demo from './demos/rest/Demo';
import Body from './demos/rest/Body';

const Main: React.FC = () => {
  const component: React.ReactElement = (() => {
    return (
      <main className="min-h-screen flex flex-row bg-neutral text-neutral-content">
        <div className='w-96 bg-red-300 flex-1'>
          <Body />
        </div>
        <div className='min-w-[400px]'>
          <Demo />
        </div>
      </main>
    )
  })();
  return component;
}

export default Main;
