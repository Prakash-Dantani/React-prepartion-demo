import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 25,
    fontSize: 10,
  },

  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  table: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#000",
    marginTop: 15,
  },

  headerRow: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
  },

  bodyRow: {
    flexDirection: "row",
  },

  cell: {
    padding: 6,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#000",
    fontSize: 9,
  },

  lastCell: {
    borderRightWidth: 0,
  },

  total: {
    marginTop: 15,
    textAlign: "right",
    fontSize: 12,
    fontWeight: "bold",
  },
});

const InvoicePDF = ({ invoice, users }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Invoice</Text>

        <View style={styles.infoRow}>
          <Text>Invoice No : {invoice.invoiceNo}</Text>
          <Text>Date : {invoice.date}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text>Customer : {invoice.customer}</Text>
        </View>

        {/* Invoice Table */}

        <View style={styles.table}>
          <View style={styles.headerRow}>
            <Text style={[styles.cell, { flex: 4 }]}>Product</Text>
            <Text
              style={[
                styles.cell,
                styles.lastCell,
                { flex: 2, textAlign: "right" },
              ]}
            >
              Price
            </Text>
          </View>

          {invoice.items.map((item, index) => (
            <View style={styles.bodyRow} key={index}>
              <Text style={[styles.cell, { flex: 4 }]}>{item.name}</Text>

              <Text
                style={[
                  styles.cell,
                  styles.lastCell,
                  { flex: 2, textAlign: "right" },
                ]}
              >
                ₹{item.price}
              </Text>
            </View>
          ))}
        </View>

        <Text style={styles.total}>Total : ₹{invoice.total}</Text>

        {/* Users Table */}

        <View style={styles.table}>
          <View style={styles.headerRow}>
            <Text style={[styles.cell, { flex: 3 }]}>Name</Text>
            <Text style={[styles.cell, { flex: 2 }]}>Username</Text>
            <Text style={[styles.cell, styles.lastCell, { flex: 4 }]}>
              Email
            </Text>
          </View>

          {users.map((user, index) => (
            <View key={index} style={styles.bodyRow}>
              <Text style={[styles.cell, { flex: 3 }]}>{user.name}</Text>

              <Text style={[styles.cell, { flex: 2 }]}>{user.username}</Text>

              <Text style={[styles.cell, styles.lastCell, { flex: 4 }]}>
                {user.email}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePDF;
