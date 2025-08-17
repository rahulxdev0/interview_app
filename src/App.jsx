import React from 'react'
import PathologyReportTemplate from './components/template/PathologyReportTemplate'
import ToasterMessage from './components/toaster/ToasterMessage'
import TemplateSelector from './components/TemplateSelector'
import Child from './components/Child'
import Dashboard from './components/Dashboard'

const App = () => {
  const userInfo = {
    name: 'Rahul Kumar',
    age: 30,
    email: 'rahul.kumar@example.com',
  }

  const counter = () => {
    console.log('Counter function called')
  }

  return (
    <div className='bg-black w-full h-screen text-white'>
      {/* <OnlineStatusTracker /> */}
      {/* <BillingTemplate /> */}
      {/* <PathologyReportTemplate /> */}
      {/* <ToasterMessage /> */}
      {/* <TemplateSelector /> */}
      <Dashboard />
    </div>
  )
}

export default App