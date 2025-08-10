import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 30,
    fontFamily: "Helvetica",
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
  labName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 8,
  },
  labAddress: {
    fontSize: 11,
    color: "#5d6d7e",
    marginBottom: 4,
    lineHeight: 1.4,
  },
  labContact: {
    fontSize: 10,
    color: "#7f8c8d",
    marginBottom: 4,
    lineHeight: 1.4,
  },
  labCredentials: {
    fontSize: 10,
    color: "#7f8c8d",
    lineHeight: 1.4,
  },
  reportInfo: {
    width: "30%",
    alignItems: "flex-end",
  },
  reportId: {
    fontSize: 10,
    color: "#7f8c8d",
  },
  logo: {
    width: 60,
    height: 60,
    marginTop: 5,
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
  testSection: {
    marginBottom: 25,
  },
  testHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10,
    borderBottom: "1px solid #e0e0e0",
    paddingBottom: 5,
  },
  parameterTable: {
    width: "100%",
    marginBottom: 15,
  },
  parameterRow: {
    flexDirection: "row",
    borderBottom: "1px solid #e0e0e0",
    paddingVertical: 8,
  },
  parameterName: {
    width: "40%",
    fontSize: 11,
    fontWeight: "bold",
    color: "#34495e",
  },
  parameterValue: {
    width: "20%",
    fontSize: 11,
    textAlign: "center",
    color: "#34495e",
  },
  parameterRange: {
    width: "30%",
    fontSize: 11,
    color: "#7f8c8d",
  },
  parameterUnit: {
    width: "10%",
    fontSize: 11,
    color: "#7f8c8d",
  },
  subParameter: {
    flexDirection: "row",
    paddingLeft: 15,
    paddingVertical: 5,
  },
  subParameterName: {
    width: "40%",
    fontSize: 10,
    color: "#7f8c8d",
  },
  subParameterValue: {
    width: "20%",
    fontSize: 10,
    textAlign: "center",
    color: "#7f8c8d",
  },
  subParameterRange: {
    width: "30%",
    fontSize: 10,
    color: "#7f8c8d",
  },
  subParameterUnit: {
    width: "10%",
    fontSize: 10,
    color: "#7f8c8d",
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
    marginTop: 40,
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
});
