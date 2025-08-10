// BillingTemplate.js
import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 10
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'navy'
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  tableRow: { 
    margin: "auto", 
    flexDirection: "row" 
  },
  tableColHeader: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: '#f0f0f0'
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 12,
    fontWeight: 'bold'
  },
  tableCell: {
    margin: 5,
    fontSize: 10
  },
  total: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right'
  }
});

// Create Document Component
const BillingDocument = ({ invoice }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>INVOICE</Text>
        
        {/* Invoice Info */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
          <View>
            <Text>Invoice Number: {invoice.invoiceNumber}</Text>
            <Text>Date: {invoice.date}</Text>
          </View>
          <View>
            <Text>Bill To:</Text>
            <Text>{invoice.customerName}</Text>
            <Text>{invoice.customerAddress}</Text>
          </View>
        </View>
        
        {/* Items Table */}
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Item</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Quantity</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Price</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Amount</Text>
            </View>
          </View>
          
          {/* Table Rows */}
          {invoice.items.map((item, i) => (
            <View style={styles.tableRow} key={i}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.name}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.quantity}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>${item.price.toFixed(2)}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>${(item.quantity * item.price).toFixed(2)}</Text>
              </View>
            </View>
          ))}
        </View>
        
        {/* Total */}
        <Text style={styles.total}>
          Total: ${invoice.items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
        </Text>
        
        {/* Footer */}
        <View style={{ marginTop: 30, fontSize: 10 }}>
          <Text>Thank you for your business!</Text>
          <Text>Terms & Conditions: Payment due within 30 days</Text>
        </View>
      </View>
    </Page>
  </Document>
);

// Component with download button
const BillingTemplate = () => {
  // Sample invoice data
  const invoice = {
    invoiceNumber: 'INV-2023-001',
    date: new Date().toLocaleDateString(),
    customerName: 'John Doe',
    customerAddress: '123 Main St, Anytown, USA',
    items: [
      { name: 'Website Design', quantity: 1, price: 1000 },
      { name: 'Hosting (1 year)', quantity: 1, price: 200 },
      { name: 'Domain Registration', quantity: 1, price: 15 }
    ]
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Billing Template</h2>
      <PDFDownloadLink 
        document={<BillingDocument invoice={invoice} />} 
        fileName={`invoice_${invoice.invoiceNumber}.pdf`}
      >
        {({ loading }) => (
          <button disabled={loading}>
            {loading ? 'Loading document...' : 'Download PDF'}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default BillingTemplate;