import React, { useState } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image, PDFViewer } from '@react-pdf/renderer';
import { styles } from './template';

const PathologyDocument = ({ report, pageSize = 'A4' }) => (
  <Document>
    <Page size={pageSize} style={styles.page}>
      {/* Header with Lab Info */}
      <View style={styles.header}>
        <View style={styles.labInfo}>
          <View style={styles.labIdentity}>
            {/* {report.logo && <Image src={report.logo} style={styles.logo} />} */}
            <View style={styles.labNameContainer}>
              <Text style={styles.labName}>{report.labName}</Text>
              <Text style={styles.labAddress}>
                {report.labAddress}
              </Text>
              <Text style={styles.labContact}>
                Phone: {report.labPhone} | Email: {report.labEmail}
              </Text>
              <Text style={styles.labCredentials}>
                Accredited by: {report.accreditation} | License: {report.license}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.reportInfo}>
          <Text style={styles.reportId}>Report ID: {report.reportId}</Text>
          <Text style={styles.reportId}>Date: {report.date}</Text>
        </View>
      </View>
      
      {/* Patient Information */}
      <View style={styles.patientInfo}>
        <View style={styles.patientDetails}>
          <Text style={styles.patientHeader}>PATIENT DETAILS</Text>
          <Text style={styles.patientText}>Name: {report.patient.name}</Text>
          <Text style={styles.patientText}>Age/Gender: {report.patient.age} / {report.patient.gender}</Text>
          <Text style={styles.patientText}>Patient ID: {report.patient.id}</Text>
        </View>
        <View style={styles.patientDetails}>
          <Text style={styles.patientHeader}>REFERRING PHYSICIAN</Text>
          <Text style={styles.patientText}>Dr. {report.physician.name}</Text>
          <Text style={styles.patientText}>{report.physician.specialization}</Text>
          <Text style={styles.patientText}>Contact: {report.physician.contact}</Text>
        </View>
      </View>
      
      {/* Test Results - CBC */}
      <View style={styles.testSection}>
        <Text style={styles.testHeader}>COMPLETE BLOOD COUNT (CBC)</Text>
        
        <View style={styles.parameterTable}>
          {/* Hemoglobin */}
          <View style={styles.parameterRow}>
            <Text style={styles.parameterName}>Hemoglobin (Hb)</Text>
            <Text style={[styles.parameterValue, report.results.hemoglobin.isAbnormal && styles.abnormalValue]}>
              {report.results.hemoglobin.value}
            </Text>
            <Text style={styles.parameterRange}>{report.results.hemoglobin.range}</Text>
            <Text style={styles.parameterUnit}>{report.results.hemoglobin.unit}</Text>
          </View>
          
          {/* Hematocrit */}
          <View style={styles.parameterRow}>
            <Text style={styles.parameterName}>Hematocrit (Hct)</Text>
            <Text style={[styles.parameterValue, report.results.hematocrit.isAbnormal && styles.abnormalValue]}>
              {report.results.hematocrit.value}
            </Text>
            <Text style={styles.parameterRange}>{report.results.hematocrit.range}</Text>
            <Text style={styles.parameterUnit}>{report.results.hematocrit.unit}</Text>
          </View>
          
          {/* RBC Count */}
          <View style={styles.parameterRow}>
            <Text style={styles.parameterName}>RBC Count</Text>
            <Text style={[styles.parameterValue, report.results.rbcCount.isAbnormal && styles.abnormalValue]}>
              {report.results.rbcCount.value}
            </Text>
            <Text style={styles.parameterRange}>{report.results.rbcCount.range}</Text>
            <Text style={styles.parameterUnit}>{report.results.rbcCount.unit}</Text>
          </View>
          
          {/* WBC Count */}
          <View style={styles.parameterRow}>
            <Text style={styles.parameterName}>WBC Count</Text>
            <Text style={[styles.parameterValue, report.results.wbcCount.isAbnormal && styles.abnormalValue]}>
              {report.results.wbcCount.value}
            </Text>
            <Text style={styles.parameterRange}>{report.results.wbcCount.range}</Text>
            <Text style={styles.parameterUnit}>{report.results.wbcCount.unit}</Text>
          </View>
          
          {/* WBC Differential (Sub-parameters) */}
          <View style={styles.parameterRow}>
            <Text style={styles.parameterName}>WBC Differential</Text>
            <Text style={styles.parameterValue}></Text>
            <Text style={styles.parameterRange}></Text>
            <Text style={styles.parameterUnit}></Text>
          </View>
          
          {/* Neutrophils */}
          <View style={styles.subParameter}>
            <Text style={styles.subParameterName}>- Neutrophils</Text>
            <Text style={[styles.subParameterValue, report.results.neutrophils.isAbnormal && styles.abnormalValue]}>
              {report.results.neutrophils.value}
            </Text>
            <Text style={styles.subParameterRange}>{report.results.neutrophils.range}</Text>
            <Text style={styles.subParameterUnit}>{report.results.neutrophils.unit}</Text>
          </View>
          
          {/* Lymphocytes */}
          <View style={styles.subParameter}>
            <Text style={styles.subParameterName}>- Lymphocytes</Text>
            <Text style={[styles.subParameterValue, report.results.lymphocytes.isAbnormal && styles.abnormalValue]}>
              {report.results.lymphocytes.value}
            </Text>
            <Text style={styles.subParameterRange}>{report.results.lymphocytes.range}</Text>
            <Text style={styles.subParameterUnit}>{report.results.lymphocytes.unit}</Text>
          </View>
          
          {/* Monocytes */}
          <View style={styles.subParameter}>
            <Text style={styles.subParameterName}>- Monocytes</Text>
            <Text style={[styles.subParameterValue, report.results.monocytes.isAbnormal && styles.abnormalValue]}>
              {report.results.monocytes.value}
            </Text>
            <Text style={styles.subParameterRange}>{report.results.monocytes.range}</Text>
            <Text style={styles.subParameterUnit}>{report.results.monocytes.unit}</Text>
          </View>
          
          {/* Eosinophils */}
          <View style={styles.subParameter}>
            <Text style={styles.subParameterName}>- Eosinophils</Text>
            <Text style={[styles.subParameterValue, report.results.eosinophils.isAbnormal && styles.abnormalValue]}>
              {report.results.eosinophils.value}
            </Text>
            <Text style={styles.subParameterRange}>{report.results.eosinophils.range}</Text>
            <Text style={styles.subParameterUnit}>{report.results.eosinophils.unit}</Text>
          </View>
          
          {/* Basophils */}
          <View style={styles.subParameter}>
            <Text style={styles.subParameterName}>- Basophils</Text>
            <Text style={[styles.subParameterValue, report.results.basophils.isAbnormal && styles.abnormalValue]}>
              {report.results.basophils.value}
            </Text>
            <Text style={styles.subParameterRange}>{report.results.basophils.range}</Text>
            <Text style={styles.subParameterUnit}>{report.results.basophils.unit}</Text>
          </View>
          
          {/* Platelet Count */}
          <View style={styles.parameterRow}>
            <Text style={styles.parameterName}>Platelet Count</Text>
            <Text style={[styles.parameterValue, report.results.plateletCount.isAbnormal && styles.abnormalValue]}>
              {report.results.plateletCount.value}
            </Text>
            <Text style={styles.parameterRange}>{report.results.plateletCount.range}</Text>
            <Text style={styles.parameterUnit}>{report.results.plateletCount.unit}</Text>
          </View>
        </View>
        
        {/* Interpretation */}
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 5 }}>INTERPRETATION:</Text>
          <Text style={{ fontSize: 11, lineHeight: 1.5 }}>{report.interpretation}</Text>
        </View>
      </View>
      
      {/* Signature */}
      <View style={styles.signature}>
        <View style={styles.signatureBox}>
          <Text style={styles.signatureText}>Dr. {report.labHead.name}</Text>
          <Text style={styles.signatureText}>{report.labHead.designation}</Text>
          <Text style={styles.signatureText}>{report.labName}</Text>
        </View>
      </View>
      
      {/* Footer */}
      <View style={styles.footer} fixed>
        <Text>This is an electronically generated report. No physical signature required.</Text>
        <Text>{report.labName} | {report.labAddress} | Phone: {report.labPhone} | Email: {report.labEmail}</Text>
      </View>
    </Page>
  </Document>
);

// Preview Modal Component
const PreviewModal = ({ isOpen, onClose, report, pageSize }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="w-[95%] h-[95%] bg-white rounded-lg flex flex-col">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Report Preview - {pageSize}</h2>
          <div className="flex gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              Print
            </button>
            <PDFDownloadLink 
              document={<PathologyDocument report={report} pageSize={pageSize} />} 
              fileName={`pathology_report_${report.reportId}_${pageSize}.pdf`}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors no-underline"
            >
              {({ loading }) => (loading ? 'Generating...' : 'Download PDF')}
            </PDFDownloadLink>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
        
        {/* PDF Viewer */}
        <div className="flex-1 p-4">
          <PDFViewer width="100%" height="100%">
            <PathologyDocument report={report} pageSize={pageSize} />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
};

// Logo Upload Component
const LogoUploader = ({ onLogoChange, currentLogo }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onLogoChange(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">Custom Logo</h3>
      <div className="space-y-3">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {currentLogo && (
          <div className="flex items-center gap-2">
            <img src={currentLogo} alt="Current logo" className="w-12 h-12 object-contain border rounded" />
            <span className="text-sm text-gray-600">Current logo</span>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Component
const PathologyReportTemplate = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [pageSize, setPageSize] = useState('A4');
  const [logoUrl, setLogoUrl] = useState('/pathlog.png');

  // Sample report data
  const report = {
    logo: logoUrl,
    labName: 'Advanced Diagnostic Center',
    labAddress: '123 Medical Drive, Health City, HC 12345',
    labPhone: '+1 (555) 123-4567',
    labEmail: 'info@advanceddiagnostic.com',
    accreditation: 'CAP, CLIA, ISO 15189',
    license: 'CLIA# 45D1234567',
    reportId: 'RPT-2023-45678',
    date: new Date().toLocaleDateString(),
    patient: {
      name: 'Sarah Johnson',
      age: '32 years',
      gender: 'Female',
      id: 'PID-789456'
    },
    physician: {
      name: 'Michael Chen',
      specialization: 'Internal Medicine',
      contact: '+1 (555) 987-6543'
    },
    labHead: {
      name: 'Elizabeth Rodriguez, MD',
      designation: 'Chief Pathologist'
    },
    results: {
      hemoglobin: {
        value: '12.5',
        range: '12.0 - 15.5',
        unit: 'g/dL',
        isAbnormal: false
      },
      hematocrit: {
        value: '38.5',
        range: '36.0 - 46.0',
        unit: '%',
        isAbnormal: false
      },
      rbcCount: {
        value: '4.2',
        range: '4.0 - 5.2',
        unit: 'mil/µL',
        isAbnormal: false
      },
      wbcCount: {
        value: '7.8',
        range: '4.5 - 11.0',
        unit: 'thou/µL',
        isAbnormal: false
      },
      neutrophils: {
        value: '62',
        range: '40 - 70',
        unit: '%',
        isAbnormal: false
      },
      lymphocytes: {
        value: '28',
        range: '20 - 40',
        unit: '%',
        isAbnormal: false
      },
      monocytes: {
        value: '7',
        range: '2 - 10',
        unit: '%',
        isAbnormal: false
      },
      eosinophils: {
        value: '2',
        range: '1 - 6',
        unit: '%',
        isAbnormal: false
      },
      basophils: {
        value: '1',
        range: '0 - 2',
        unit: '%',
        isAbnormal: false
      },
      plateletCount: {
        value: '185',
        range: '150 - 450',
        unit: 'thou/µL',
        isAbnormal: false
      }
    },
    interpretation: "The Complete Blood Count (CBC) results are within normal reference ranges for this patient. No significant abnormalities detected. Mild elevation in lymphocyte percentage may be seen in viral infections but is not clinically significant in this context."
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Pathology Report Generator</h1>
          <p className="text-gray-600">Customize and generate professional pathology reports</p>
        </div>

        {/* Controls Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Logo Upload */}
          <LogoUploader onLogoChange={setLogoUrl} currentLogo={logoUrl} />

          {/* Page Size Selection */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Page Size</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="pageSize"
                  value="A4"
                  checked={pageSize === 'A4'}
                  onChange={(e) => setPageSize(e.target.value)}
                  className="mr-2"
                />
                <span className="text-gray-700">A4 (210 × 297 mm)</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="pageSize"
                  value="A5"
                  checked={pageSize === 'A5'}
                  onChange={(e) => setPageSize(e.target.value)}
                  className="mr-2"
                />
                <span className="text-gray-700">A5 (148 × 210 mm)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setShowPreview(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Preview Report ({pageSize})
            </button>
            
            <PDFDownloadLink 
              document={<PathologyDocument report={report} pageSize={pageSize} />} 
              fileName={`pathology_report_${report.reportId}_${pageSize}.pdf`}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold no-underline"
            >
              {({ loading }) => (loading ? 'Generating...' : `Download ${pageSize} PDF`)}
            </PDFDownloadLink>
          </div>
        </div>

        {/* Report Info */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Report Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><span className="font-medium">Patient:</span> {report.patient.name}</p>
              <p><span className="font-medium">Report ID:</span> {report.reportId}</p>
              <p><span className="font-medium">Page Size:</span> {pageSize}</p>
            </div>
            <div>
              <p><span className="font-medium">Lab:</span> {report.labName}</p>
              <p><span className="font-medium">Date:</span> {report.date}</p>
              <p><span className="font-medium">Logo:</span> {logoUrl ? 'Custom' : 'Default'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      <PreviewModal 
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        report={report}
        pageSize={pageSize}
      />
    </div>
  );
};

export default PathologyReportTemplate;