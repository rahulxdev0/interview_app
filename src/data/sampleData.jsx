export const sampleReport = {
  lab: {
    name: 'Comestro Diagnostics',
    address: '2nd Floor, Connaught Place, New Delhi',
    phone: '+91 9876543210',
    email: 'info@comestro.example',
    gstin: '07ABCDE1234Z1Z1',
  },
  patient: {
    name: 'Rahul Kumar',
    id: 'PT-2025-00042',
    age: '28 Y',
    sex: 'Male',
  },
  doctor: {
    name: 'Dr. Ananya Mehta (MD Pathology)',
    reg: 'DMC/12345',
  },
  meta: {
    reportId: 'LR-000123',
    collectedAt: '2025-08-12 09:40',
    reportedAt: '2025-08-13 13:10',
  },
  tests: [
    { section: 'Hematology', name: 'Hemoglobin (Hb)', result: '13.8', unit: 'g/dL', range: '12.0 - 16.0', flag: '' },
    { section: 'Hematology', name: 'Total WBC Count', result: '6.2', unit: 'x10^3/µL', range: '4.0 - 10.0', flag: '' },
    { section: 'Biochemistry', name: 'Fasting Glucose', result: '92', unit: 'mg/dL', range: '70 - 99', flag: '' },
    { section: 'Biochemistry', name: 'Cholesterol (Total)', result: '182', unit: 'mg/dL', range: '< 200', flag: '' },
  ],
  notes: 'Fasting sample. Please correlate clinically.\nThis is a computer generated report.',
};