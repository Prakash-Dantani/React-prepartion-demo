import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import InvoicePDF from "./InvoicePDF";
import { useState, useEffect } from "react";
import axios from "axios";

const DownloadInvoice = () => {
  const invoice = {
    invoiceNo: "INV-1001",

    customer: "Prakash Dantani",

    date: "08-Aug-2026",

    items: [
      {
        name: "Laptop",
        price: 50000,
      },

      {
        name: "Mouse",
        price: 1500,
      },

      {
        name: "Keyboard",
        price: 2500,
      },
    ],

    total: 54000,
  };
  const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <PDFDownloadLink
        document={<InvoicePDF invoice={invoice} users={users} />}
        fileName="invoice.pdf"
        onClick={() => setLoading(true)}
      >
        {({ loading }) => (loading ? "Generating PDF..." : "Download Invoice")}
      </PDFDownloadLink>

      {/* <PDFViewer document={<InvoicePDF invoice={invoice} users={users} />}>
        View Invoice
      </PDFViewer> */}

      <PDFViewer width="100%" height="800" showToolbar={true}>
        <InvoicePDF invoice={invoice} users={users} />
      </PDFViewer>
    </div>
  );
};
export default DownloadInvoice;
