import "../styles/globals.css";
import Header from "../components/header/header";
import { AuthProvider } from "../lib/firebase/auth";
import { StudentProvider } from "../lib/mongodb/studentProvider";
import { VStack } from "@chakra-ui/react";

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <StudentProvider>
        <VStack w="full" h="full" spacing={0} align="flex-start">
          <Header />
          <Component {...pageProps} />
        </VStack>
      </StudentProvider>
    </AuthProvider>
  );
}

export default App;
