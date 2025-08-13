import React, { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { ClassicTemplate } from '../templates/ClassicTemplate';
import { ModernTemplate } from '../templates/ModernTemplate';
import { sampleReport } from '../data/sampleData';

const TemplateSelector = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('classic');

  const templates = [
    {
      id: 'classic',
      name: 'Classic Template',
      description: 'Traditional layout with borders and structured format',
      component: ClassicTemplate,
      preview: '/preview-classic.png' // You can add preview images later
    },
    {
      id: 'modern',
      name: 'Modern Template',
      description: 'Clean, modern design with cards and better typography',
      component: ModernTemplate,
      preview: '/preview-modern.png' // You can add preview images later
    }
  ];

  const selectedTemplateData = templates.find(t => t.id === selectedTemplate);
  const SelectedComponent = selectedTemplateData?.component;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Select Report Template</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Template Selection Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Available Templates</h2>
              
              <div className="space-y-4">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      selectedTemplate === template.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                    onClick={() => setSelectedTemplate(template.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{template.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                      </div>
                      <div className={`w-4 h-4 rounded-full border-2 mt-1 ${
                        selectedTemplate === template.id
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300'
                      }`}>
                        {selectedTemplate === template.id && (
                          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  onClick={() => {
                    alert(`Selected template: ${selectedTemplateData?.name}`);
                    // Here you can add logic to save the selection or proceed with the selected template
                  }}
                >
                  Use Selected Template
                </button>
              </div>
            </div>
          </div>

          {/* PDF Preview Panel */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Preview: {selectedTemplateData?.name}
                </h2>
                <div className="text-sm text-gray-500">
                  Live Preview
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden h-screen" >
                {SelectedComponent && (
                  <PDFViewer
                    key={selectedTemplate}
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                    showToolbar={false}
                  >
                    <SelectedComponent data={sampleReport} />
                  </PDFViewer>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;