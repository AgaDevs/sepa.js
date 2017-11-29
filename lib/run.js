'use strict';

var SEPA = require("./sepa.js");

var doc = new SEPA.Document('pain.001.001.06');
doc.grpHdr.id = "XMPL.20140201.TR0";
doc.grpHdr.created = new Date();
doc.grpHdr.initiatorName = "Example LLC"; // optional

var info = doc.createPaymentInfo();

// MEMBERS:

/** SEPA payment method. */
// method: null,
//
// /** If true, booking will appear as one entry on your statement */
// batchBooking: false,
//
// /** Grouping, defines structure handling for XML file */
// grouping: 'MIXD',
//
// /** Sum of all payments, will be automatically set */
// controlSum: 0,
//
// /* Instrumentation code:
//  * 'CORE' - Standard Transfer
//  * 'COR1' - Expedited Transfer
//  * 'B2B'  - Business Transfer
//  */
// localInstrumentation: 'CORE',
//
// /**
//  * 'FRST' - First transfer
//  * 'RCUR' - Subsequent transfer
//  * 'OOFF' - One Off transfer
//  * 'FNAL' - Final transfer
//  */
// sequenceType: 'FRST',
//
// /** Requested collection date */
// collectionDate: null,
//
// /** Execution date of the SEPA order */
// requestedExecutionDate: null,
//
// /** Id assigned to the creditor */
// creditorId: '',
//
// /** Name, Address, IBAN and BIC of the creditor */
// creditorName: '',
// creditorStreet: null,
// creditorCity: null,
// creditorCountry: null,
// creditorIBAN: '',
// creditorBIC: '',
//
// /** Id assigned to the debtor for Transfer payments */
// debtorId: '',
//
// /** Name, Address, IBAN and BIC of the debtor */
// debtorName: '',
// debtorStreet: null,
// debtorCity: null,
// debtorCountry: null,
// debtorIBAN: '',
// debtorBIC: '',
//
// /** SEPA order priority, can be HIGH or NORM */
// instructionPriority: 'NORM',

info.requestedExecutionDate = new Date();
info.debtorId = '1';
info.debtorIBAN = "DE40987654329876543210";

doc.addPaymentInfo(info);

var tx = info.createTransaction();

// MEMBERS:

/** The unique transaction id */
// id: '',
//
// /** The End-To-End id */
// end2endId: '',
//
// /** The currency to transfer */
// currency: 'EUR',
//
// /** The amount to transfer */
// amount: 0,
//
// /** (optional) The purpose code to use */
// purposeCode: null,
//
// /** The mandate id of the debtor */
// mandateId: '',
//
// /** The signature date of the mandate */
// mandateSignatureDate: null,
//
// /** Name, Address, IBAN and BIC of the debtor */
// debtorName: '',
// debtorStreet: null,
// debtorCity: null,
// debtorCountry: null,
// debtorIBAN: '',
// debtorBIC: '',
//
// /** Unstructured Remittance Info */
// remittanceInfo: '',
//
// /** Name, Address, IBAN and BIC of the creditor */
// creditorName: '',
// creditorStreet: null,
// creditorCity: null,
// creditorCountry: null,
// creditorIBAN: '',
// creditorBIC: '',

tx.creditorIBAN = "DE87123456781234567890";


tx.mandateId = "XMPL.CUST487.2014";
tx.mandateSignatureDate = new Date();
tx.amount = 50.23;
tx.currency = 'EUR'; //optional
tx.remittanceInfo = "INVOICE 54";
tx.end2endId = "XMPL.CUST487.INVOICE.54";

tx.purposeCode = 'PURP_CODE';

info.addTransaction(tx);

console.info('---------------------------');
console.log(console.info(require('util').inspect(doc, { colors: true, depth: null })));
console.info('---------------------------');
console.log(doc.toString());

