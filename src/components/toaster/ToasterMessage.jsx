import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

const ToasterMessage = () => {
    const notify = () => toast('Here is your toast.');
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster position='bottom-right' />
    </div>
  )
}

export default ToasterMessage