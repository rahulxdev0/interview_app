import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image } from '@react-pdf/renderer';
import { styles } from './template'; 

// Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'column',
//     backgroundColor: '#FFFFFF',
//     padding: 30,
//     fontFamily: 'Helvetica'
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//     borderBottom: '2px solid #3498db',
//     paddingBottom: 15
//   },
//   labInfo: {
//     width: '70%'
//   },
//   labIdentity: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     gap: 15
//   },
//   labNameContainer: {
//     flex: 1
//   },
//   labName: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#2c3e50',
//     marginBottom: 8
//   },
//   labAddress: {
//     fontSize: 11,
//     color: '#5d6d7e',
//     marginBottom: 4,
//     lineHeight: 1.4
//   },
//   labContact: {
//     fontSize: 10,
//     color: '#7f8c8d',
//     marginBottom: 4,
//     lineHeight: 1.4
//   },
//   labCredentials: {
//     fontSize: 10,
//     color: '#7f8c8d',
//     lineHeight: 1.4
//   },
//   reportInfo: {
//     width: '30%',
//     alignItems: 'flex-end'
//   },
//   reportId: {
//     fontSize: 10,
//     color: '#7f8c8d'
//   },
//   logo: {
//     width: 60,
//     height: 60,
//     marginTop: 5
//   },
//   patientInfo: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//     backgroundColor: '#f8f9fa',
//     padding: 15,
//     borderRadius: 5
//   },
//   patientDetails: {
//     width: '48%'
//   },
//   patientHeader: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color: '#2c3e50'
//   },
//   patientText: {
//     fontSize: 11,
//     marginBottom: 3,
//     color: '#34495e'
//   },
//   testSection: {
//     marginBottom: 25
//   },
//   testHeader: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#2c3e50',
//     marginBottom: 10,
//     borderBottom: '1px solid #e0e0e0',
//     paddingBottom: 5
//   },
//   parameterTable: {
//     width: '100%',
//     marginBottom: 15
//   },
//   parameterRow: {
//     flexDirection: 'row',
//     borderBottom: '1px solid #e0e0e0',
//     paddingVertical: 8
//   },
//   parameterName: {
//     width: '40%',
//     fontSize: 11,
//     fontWeight: 'bold',
//     color: '#34495e'
//   },
//   parameterValue: {
//     width: '20%',
//     fontSize: 11,
//     textAlign: 'center',
//     color: '#34495e'
//   },
//   parameterRange: {
//     width: '30%',
//     fontSize: 11,
//     color: '#7f8c8d'
//   },
//   parameterUnit: {
//     width: '10%',
//     fontSize: 11,
//     color: '#7f8c8d'
//   },
//   subParameter: {
//     flexDirection: 'row',
//     paddingLeft: 15,
//     paddingVertical: 5
//   },
//   subParameterName: {
//     width: '40%',
//     fontSize: 10,
//     color: '#7f8c8d'
//   },
//   subParameterValue: {
//     width: '20%',
//     fontSize: 10,
//     textAlign: 'center',
//     color: '#7f8c8d'
//   },
//   subParameterRange: {
//     width: '30%',
//     fontSize: 10,
//     color: '#7f8c8d'
//   },
//   subParameterUnit: {
//     width: '10%',
//     fontSize: 10,
//     color: '#7f8c8d'
//   },
//   abnormalValue: {
//     color: '#e74c3c',
//     fontWeight: 'bold'
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 30,
//     left: 30,
//     right: 30,
//     fontSize: 10,
//     color: '#95a5a6',
//     textAlign: 'center',
//     borderTop: '1px solid #e0e0e0',
//     paddingTop: 10
//   },
//   signature: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     marginTop: 40
//   },
//   signatureBox: {
//     width: '30%',
//     borderTop: '1px solid #2c3e50',
//     paddingTop: 5,
//     textAlign: 'center'
//   },
//   signatureText: {
//     fontSize: 10,
//     color: '#2c3e50'
//   }
// });

// Create Document Component
const PathologyDocument = ({ report }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header with Lab Info */}
      <View style={styles.header}>
        <View style={styles.labInfo}>
          <View style={styles.labIdentity}>
            {report.logo && <Image src={report.logo} style={styles.logo} />}
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

// Component with download button
const PathologyReportTemplate = () => {
  // Sample report data
  const report = {
    logo: 'pathlog.png', // Replace with actual logo URL
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
    <div style={{ padding: '20px' }}>
      <h2>Pathology Report Generator</h2>
      <PDFDownloadLink 
        document={<PathologyDocument report={report} />} 
        fileName={`pathology_report_${report.reportId}.pdf`}
        style={{
          textDecoration: 'none',
          padding: '10px 20px',
          backgroundColor: '#3498db',
          color: 'white',
          borderRadius: 4,
          fontWeight: 'bold',
          marginTop: '20px',
          display: 'inline-block'
        }}
      >
        {({ loading }) => (loading ? 'Generating report...' : 'Download Pathology Report')}
      </PDFDownloadLink>
    </div>
  );
};

export default PathologyReportTemplate;