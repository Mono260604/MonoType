import React from 'react'

const navBar = () => {
  return (
    <div className='navbar text-bgColor bg-textPrimary font-mono'>
     <div className='btn btn-ghost flex-1'>
      <svg className='fill-bgColor' xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm16 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V144zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16H400c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336zM272 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM368 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V240zM464 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16z"/></svg>
      <a className='text-xl font-bold'>MonoType</a>
     </div>
     <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <details>
              <summary>Bumi Theme</summary>
              <ul>
                <li><a>Ily Theme</a></li>
              </ul>
            </details>
          </li>
        </ul>
     </div>
    </div>
  )
}

export default navBar
