import "./styles.css";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
  Link,
} from "@react-pdf/renderer";
import main from "../assets/main.jpg";
// Create styles
const styles = StyleSheet.create({
  page: {
    color: "black",
  },
  imgSection: {
    margin: 5,
    padding: 5,
    //border: "1px solid #000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 12,
    marginTop: 40,
  },
  section: {
    margin: 5,
    padding: 5,
    //border: "1px solid #000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 12,
  },
  column: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    fontSize: 10,
    color: "#3b3b3b",
  },
  link: {
    color: "#3b3b3b",
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  image: {
    width: 100,
    height: 100,
  },
  table: {
    margin: 10,
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: "#ECECEC",
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "70%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColVal: {
    width: "30%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    display: "flex",
    alignItems: "center",
  },
  tableCell: {
    margin: 5,
    fontSize: 14,
    fontWeight: "900",
  },
});

export const PrintPage = () => {
  const localStorageFinale = JSON.parse(localStorage.getItem("finale"));
  const localStorageCourse = JSON.parse(localStorage.getItem("course"));

  const price = (
    +localStorageFinale.carPrice.value +
    +localStorageFinale.duty.value +
    +localStorageFinale.auctionFee.value +
    +localStorageFinale.vat.value +
    +localStorageFinale.deliveryPrice.value +
    +localStorageFinale.eco.value +
    +localStorageFinale.insPrice.value +
    75 +
    300
  ).toFixed(0);

  const priceUsd = new Intl.NumberFormat("en-US").format(price);
  const priceAmd = new Intl.NumberFormat("en-US").format(
    (price * localStorageCourse).toFixed(0)
  );
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View style={styles.imgSection}>
            <Image style={styles.image} src={main} />
          </View>
          <View style={styles.section}>
            <View style={styles.column}>
              <Text>Yerevan , Str 52</Text>
              <Link src="mailto:garoh2291@gmail.com" style={styles.link}>
                garoh2291@gmail.com
              </Link>
              <Link src="tel:098598398" style={styles.link}>
                098598398
              </Link>
            </View>
          </View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Auction</Text>
              </View>
              <View style={styles.tableColVal}>
                <Text style={styles.tableCell}>
                  {localStorageFinale.autionPlace.value}
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Car Price</Text>
              </View>
              <View style={styles.tableColVal}>
                <Text style={styles.tableCell}>
                  {localStorageFinale.carPrice.value} $
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Auction Fee</Text>
              </View>
              <View style={styles.tableColVal}>
                <Text style={styles.tableCell}>
                  {+localStorageFinale.auctionFee.value} $
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Shipping</Text>
              </View>
              <View style={styles.tableColVal}>
                <Text style={styles.tableCell}>
                  {+localStorageFinale.deliveryPrice.value} $
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Broker fee</Text>
              </View>
              <View style={styles.tableColVal}>
                <Text style={styles.tableCell}>{75} $</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Service Fee</Text>
              </View>
              <View style={styles.tableColVal}>
                <Text style={styles.tableCell}>{300} $</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Insurance</Text>
              </View>
              <View style={styles.tableColVal}>
                <Text style={styles.tableCell}>
                  {+localStorageFinale.insPrice.value.toFixed(0)} $
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>VAT</Text>
              </View>
              <View style={styles.tableColVal}>
                <Text style={styles.tableCell}>
                  {localStorageFinale.vat.value.toFixed(0)} $
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Customs Duty</Text>
              </View>
              <View style={styles.tableColVal}>
                <Text style={styles.tableCell}>
                  {+localStorageFinale.duty.value.toFixed(0)} $
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Eco tax</Text>
              </View>
              <View style={styles.tableColVal}>
                <Text style={styles.tableCell}>
                  {+localStorageFinale.eco.value.toFixed(0)} $
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Total USD</Text>
              </View>
              <View style={styles.tableColVal}>
                <Text style={styles.tableCell}>{priceUsd} $</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Total AMD</Text>
              </View>
              <View style={styles.tableColVal}>
                <Text style={styles.tableCell}>{priceAmd} </Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
