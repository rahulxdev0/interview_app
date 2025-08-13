import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 11,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    borderBottom: "2px solid #3498db",
    paddingBottom: 15,
  },
  labInfo: {
    width: "70%",
  },
  labIdentity: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 15,
  },
  labNameContainer: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 4,
    marginTop: 5,
    textAlign: "center"
  },
  address: {
    fontSize: 11,
    color: "#5d6d7e",
    marginBottom: 4,
    lineHeight: 1.4,
    textAlign: "center"
  },
  contact: {
    fontSize: 10,
    color: "#7f8c8d",
    marginBottom: 4,
    lineHeight: 1.4,
    textAlign: "center"
  },
  reportInfo: {
    width: "30%",
    alignItems: "flex-end",
  },
  reportId: {
    fontSize: 10,
    color: "#7f8c8d",
  },
  patientInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    backgroundColor: "#f8f9fa",
    padding: 15,
    borderRadius: 5,
  },
  patientDetails: {
    width: "48%",
  },
  patientHeader: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#2c3e50",
  },
  patientText: {
    fontSize: 11,
    marginBottom: 3,
    color: "#34495e",
  },
  section: {
    marginTop: 8,
    border: "1px solid #e0e0e0",
    padding: 8,
    borderRadius: 5
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4
  },
  label: {
    fontWeight: "bold",
    color: "#2c3e50"
  },
  table: {
    width: "100%",
    marginTop: 15,
    marginBottom: 20
  },
  tr: {
    flexDirection: "row",
    borderBottom: "1px solid #e0e0e0",
    paddingVertical: 8,
  },
  th: {
    fontWeight: "bold",
    color: "#2c3e50",
    fontSize: 11
  },
  td: {
    fontSize: 11,
    color: "#34495e",
  },
  colName: {
    width: "45%"
  },
  colRes: {
    width: "20%",
    textAlign: "center"
  },
  colUnit: {
    width: "15%",
    textAlign: "center"
  },
  colRange: {
    width: "20%",
    textAlign: "center"
  },
  abnormalValue: {
    color: "#e74c3c",
    fontWeight: "bold",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 30,
    right: 30,
    fontSize: 10,
    color: "#95a5a6",
    textAlign: "center",
    borderTop: "1px solid #e0e0e0",
    paddingTop: 10,
  },
  signature: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 30,
  },
  signatureBox: {
    width: "30%",
    borderTop: "1px solid #2c3e50",
    paddingTop: 5,
    textAlign: "center",
  },
  signatureText: {
    fontSize: 10,
    color: "#2c3e50",
  },
  notes: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "#f8f9fa",
    borderRadius: 5
  },
  notesTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#2c3e50",
  }
});

export function ModernTemplate({ data }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header with Lab Info */}
        {data.lab.logo && (
          <View style={{ alignItems: 'center', marginBottom: 10 }}>
            <Image src={data.lab.logo} style={{ width: 80, height: 80 }} />
          </View>
        )}
        
        <Text style={styles.title}>{data.lab.name}</Text>
        <Text style={styles.address}>{data.lab.address}</Text>
        <Text style={styles.contact}>
          Phone: {data.lab.phone} | Email: {data.lab.email || 'N/A'} | License: {data.lab.license || 'N/A'}
        </Text>

        {/* Patient Information */}
        <View style={styles.patientInfo}>
          <View style={styles.patientDetails}>
            <Text style={styles.patientHeader}>PATIENT DETAILS</Text>
            <Text style={styles.patientText}>Name: {data.patient.name}</Text>
            <Text style={styles.patientText}>Age/Gender: {data.patient.age} / {data.patient.sex}</Text>
            <Text style={styles.patientText}>Patient ID: {data.patient.id}</Text>
          </View>
          <View style={styles.patientDetails}>
            <Text style={styles.patientHeader}>REFERRING PHYSICIAN</Text>
            <Text style={styles.patientText}>Dr. {data.doctor.name}</Text>
            <Text style={styles.patientText}>{data.doctor.specialization || 'General Practitioner'}</Text>
            <Text style={styles.patientText}>Contact: {data.doctor.contact || 'N/A'}</Text>
          </View>
        </View>

        {/* Report Metadata */}
        <View style={styles.section}>
          <View style={styles.row}>
            <Text><Text style={styles.label}>Collected:</Text> {data.meta.collectedAt}</Text>
            <Text><Text style={styles.label}>Reported:</Text> {data.meta.reportedAt}</Text>
          </View>
          <View style={styles.row}>
            <Text><Text style={styles.label}>Report ID:</Text> {data.meta.reportId || 'N/A'}</Text>
            <Text><Text style={styles.label}>Accreditation:</Text> {data.lab.accreditation || 'N/A'}</Text>
          </View>
        </View>

        {/* Test Results Table */}
        <View style={styles.table}>
          <View style={[styles.tr, { backgroundColor: '#f8f9fa' }]}>
            <Text style={[styles.th, styles.colName]}>Investigation</Text>
            <Text style={[styles.th, styles.colRes]}>Result</Text>
            <Text style={[styles.th, styles.colUnit]}>Unit</Text>
            <Text style={[styles.th, styles.colRange]}>Reference Range</Text>
          </View>
          {data.tests.map((t, i) => (
            <View key={i} style={styles.tr}>
              <Text style={[styles.td, styles.colName]}>{t.name}</Text>
              <Text style={[
                styles.td, 
                styles.colRes,
                t.isAbnormal && styles.abnormalValue
              ]}>
                {t.result}
              </Text>
              <Text style={[styles.td, styles.colUnit]}>{t.unit}</Text>
              <Text style={[styles.td, styles.colRange]}>{t.range}</Text>
            </View>
          ))}
        </View>

        {/* Notes/Interpretation */}
        {data.notes && (
          <View style={styles.notes}>
            <Text style={styles.notesTitle}>INTERPRETATION & NOTES</Text>
            <Text>{data.notes}</Text>
          </View>
        )}

        {/* Signature */}
        <View style={styles.signature}>
          <View style={styles.signatureBox}>
            <Text style={styles.signatureText}>Dr. {data.lab.headName || 'Lab Director'}</Text>
            <Text style={styles.signatureText}>{data.lab.headTitle || 'Chief Pathologist'}</Text>
            <Text style={styles.signatureText}>{data.lab.name}</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer} fixed>
          <Text>This is an electronically generated report. No physical signature required.</Text>
          <Text>{data.lab.name} | {data.lab.address} | Phone: {data.lab.phone}</Text>
        </View>
      </Page>
    </Document>
  );
}