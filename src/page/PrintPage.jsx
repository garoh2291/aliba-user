import "./styles.css";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#d11fb6",
    color: "white",
  },
  section: {
    margin: 10,
    padding: 10,
    border: "1px solid #000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  image: {
    width: 50,
    height: 50,
  },
});

export const PrintPage = () => {
  const localStorageFinale = JSON.parse(localStorage.getItem("finale"));
  const localStorageCourse = JSON.parse(localStorage.getItem("course"));
  console.log(localStorageFinale);
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Image
              style={styles.image}
              src="https://image.shutterstock.com/image-photo/tiny-floating-house-on-lake-600w-1980476267.jpg"
            />
          </View>
          <View style={styles.section}>
            <Text>World</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
