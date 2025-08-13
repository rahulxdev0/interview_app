import React from 'react'
import PathologyReportTemplate from './components/template/PathologyReportTemplate'
import ToasterMessage from './components/toaster/ToasterMessage'
import TemplateSelector from './components/TemplateSelector'

const App = () => {

  return (
    <div className='bg-black w-full h-screen text-white'>
      {/* <OnlineStatusTracker /> */}
      {/* <BillingTemplate /> */}
      {/* <PathologyReportTemplate /> */}
      {/* <ToasterMessage /> */}
      <TemplateSelector />
    </div>
  )
}

export default App