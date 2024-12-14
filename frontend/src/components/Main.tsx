import React from 'react';
import Demo from './demos/rest/Demo';
import Body from './demos/rest/Body';

const Main: React.FC = () => {
  const component: React.ReactElement = (() => {
    return (
      <main className="h-screen flex flex-row bg-neutral text-neutral-content">
        <div className='bg-gray-100 flex-[2] h-full overflow-auto'>
          <Body />
        </div>
        <div className='flex-1'>
          <Demo />
        </div>
      </main>
    )
  })();
  return component;
}

export default Main;
