import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { 
    paddingTop: 20, 
    paddingHorizontal: 20, 
    paddingBottom: 100,
    fontSize: 10,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
    color: '#2d3748'
  },
  
  // Header Section
  headerContainer: {
    marginBottom: 30,
    paddingBottom: 20,
    borderBottom: '2px solid #e2e8f0'
  },
  labName: { 
    fontSize: 24, 
    textAlign: 'center', 
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#1a202c',
    letterSpacing: 0.5
  },
  labInfo: { 
    textAlign: 'center', 
    fontSize: 11,
    color: '#4a5568',
    marginBottom: 4
  },
  // Patient Information Card
  patientCard: { 
    backgroundColor: '#f7fafc',
    border: '1px solid #e2e8f0',
    borderRadius: 8,
    padding: 20,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3
  },
  patientHeader: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  infoItem: {
    width: '48%',
    marginBottom: 8,
    flexDirection: 'row'
  },
  infoLabel: { 
    fontWeight: 'bold',
    color: '#4a5568',
    width: '40%',
    fontSize: 10
  },
  infoValue: {
    color: '#2d3748',
    flex: 1,
    fontSize: 10
  },

  // Modern Table
  tableContainer: {
    marginBottom: 25,
    border: '1px solid #e2e8f0',
    borderRadius: 8,
    overflow: 'hidden'
  },
  tableHeader: {
    backgroundColor: '#2b6cb0',
    flexDirection: 'row',
    paddingVertical: 12
  },
  tableHeaderText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 0.5
  },
  tableRow: { 
    flexDirection: 'row',
    borderBottom: '1px solid #e2e8f0',
    backgroundColor: '#ffffff'
  },
  tableRowAlt: { 
    flexDirection: 'row',
    borderBottom: '1px solid #e2e8f0',
    backgroundColor: '#f7fafc'
  },
  tableCell: { 
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 10,
    color: '#2d3748'
  },
  tableCellCenter: {
    textAlign: 'center'
  },
  tableCellLeft: {
    textAlign: 'left'
  },
  
  // Column widths
  colTest: { width: '40%' },
  colResult: { width: '20%' },
  colUnit: { width: '15%' },
  colRange: { width: '25%' },

  // Abnormal result highlighting
  abnormalResult: {
    color: '#e53e3e',
    fontWeight: 'bold'
  },

  // Notes Section
  notesContainer: {
    backgroundColor: '#fffaf0',
    border: '1px solid #fed7aa',
    borderRadius: 8,
    padding: 16,
    marginBottom: 30
  },
  notesHeader: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#9c4221',
    marginBottom: 8,
    textTransform: 'uppercase'
  },
  notesText: {
    fontSize: 10,
    color: '#744210',
    lineHeight: 1.4
  },

  // Signature Section
  signatureSection: {
    position: 'absolute',
    bottom: 70,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    borderTop: '1px solid #e2e8f0'
  },
  signatureBlock: {
    width: '40%',
    alignItems: 'center'
  },
  signatureLine: {
    width: '100%',
    height: 30,
    borderBottom: '1px solid #4a5568',
    marginBottom: 8
  },
  signatureLabel: {
    fontSize: 9,
    color: '#4a5568',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  signatureName: {
    fontSize: 9,
    color: '#2d3748',
    textAlign: 'center',
    marginTop: 4
  },

  // Footer
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    paddingTop: 12,
    borderTop: '1px solid #e2e8f0'
  },
  footerText: {
    fontSize: 8,
    color: '#718096',
    textAlign: 'center',
    lineHeight: 1.3
  },

  // Utility classes
  bold: { fontWeight: 'bold' },
  italic: { fontStyle: 'italic' },
  uppercase: { textTransform: 'uppercase' }
});

export function ClassicTemplate({ data }) {
  // Helper function to determine if result is abnormal
  const isAbnormal = (result, range) => {
    // Simple check - you can enhance this logic
    if (!range || !result) return false;
    // Add your abnormal value detection logic here
    return false;
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* Modern Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.labName}>{data.lab.name}</Text>
          <Text style={styles.labInfo}>{data.lab.address}</Text>
          <Text style={styles.labInfo}>Phone: {data.lab.phone} | Email: {data.lab.email || 'info@lab.com'}</Text>
        </View>

        {/* Patient Information Card */}
        <View style={styles.patientCard}>
          <Text style={styles.patientHeader}>Patient Information</Text>
          <View style={styles.infoGrid}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Patient Name:</Text>
              <Text style={styles.infoValue}>{data.patient.name}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Patient ID:</Text>
              <Text style={styles.infoValue}>{data.patient.id}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Age:</Text>
              <Text style={styles.infoValue}>{data.patient.age} years</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Gender:</Text>
              <Text style={styles.infoValue}>{data.patient.sex}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Referring Doctor:</Text>
              <Text style={styles.infoValue}>{data.doctor.name}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Department:</Text>
              <Text style={styles.infoValue}>{data.doctor.department || 'General'}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Collection Date:</Text>
              <Text style={styles.infoValue}>{data.meta.collectedAt}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Report Date:</Text>
              <Text style={styles.infoValue}>{data.meta.reportedAt}</Text>
            </View>
          </View>
        </View>

        {/* Modern Test Results Table */}
        <View style={styles.tableContainer}>
          {/* Table Header */}
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderText, styles.colTest]}>Test Parameter</Text>
            <Text style={[styles.tableHeaderText, styles.colResult]}>Result</Text>
            <Text style={[styles.tableHeaderText, styles.colUnit]}>Unit</Text>
            <Text style={[styles.tableHeaderText, styles.colRange]}>Reference Range</Text>
          </View>
          
          {/* Table Rows */}
          {data.tests.map((test, index) => (
            <View key={index} style={index % 2 === 0 ? styles.tableRow : styles.tableRowAlt}>
              <Text style={[styles.tableCell, styles.tableCellLeft, styles.colTest]}>
                {test.name}
              </Text>
              <Text style={[
                styles.tableCell, 
                styles.tableCellCenter, 
                styles.colResult,
                isAbnormal(test.result, test.range) && styles.abnormalResult
              ]}>
                {test.result}
              </Text>
              <Text style={[styles.tableCell, styles.tableCellCenter, styles.colUnit]}>
                {test.unit}
              </Text>
              <Text style={[styles.tableCell, styles.tableCellCenter, styles.colRange]}>
                {test.range}
              </Text>
            </View>
          ))}
        </View>

        {/* Notes Section */}
        {data.notes && (
          <View style={styles.notesContainer}>
            <Text style={styles.notesHeader}>Clinical Notes & Remarks</Text>
            <Text style={styles.notesText}>{data.notes}</Text>
          </View>
        )}

        {/* Modern Signature Section */}
        <View style={styles.signatureSection}>
          <View style={styles.signatureBlock}>
            <View style={styles.signatureLine}></View>
            <Text style={styles.signatureLabel}>LAB TECHNICIAN</Text>
            <Text style={styles.signatureName}>{data.technician?.name || 'Authorized Signatory'}</Text>
          </View>
          
          <View style={styles.signatureBlock}>
            <View style={styles.signatureLine}></View>
            <Text style={styles.signatureLabel}>PATHOLOGIST</Text>
            <Text style={styles.signatureName}>{data.pathologist?.name || data.doctor.name}</Text>
          </View>
        </View>

        {/* Modern Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            This is a computer-generated report and does not require a physical signature.
          </Text>
          <Text style={styles.footerText}>
            For queries, contact: {data.lab.phone} | Visit: {data.lab.address}
          </Text>
          <Text style={styles.footerText}>
            Report ID: {data.meta.reportId || 'RPT-' + Date.now()} | Generated on: {new Date().toLocaleDateString()}
          </Text>
        </View>
        
      </Page>
    </Document>
  );
}