// import React, { useState, useEffect, useContext, createContext } from "react";
// import Router from "next/router";
// import firebase from "./firebase";
// import { useRouter } from "next/router";
// import { Spinner } from "@chakra-ui/react";

// const authUserContext = createContext({
//   user: null,
//   loading: true,
//   signIn: async () => { },
//   signOut: async () => { },
// });

// const formatUser = async (user) => {
//   const token = await user.getIdToken();
//   return {
//     uid: user.uid,
//     token: token,
//     email: user.email,
//     name: user.displayName,
//     provider: user.providerData[0].providerId,
//     photoUrl: user.photoURL,
//   };
// };

// function useFirebaseAuth() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const handleUser = async (rawUser) => {
//     if (rawUser) {
//       const user = await formatUser(rawUser);
//       const resp = await fetch("/api/students/create", {
//         method: "POST",
//         body: JSON.stringify(user),
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//       });
//       console.log(resp);
//       setUser(user);

//       setLoading(false);
//       return user;
//     } else {
//       setUser(false);
//       setLoading(false);
//       return false;
//     }
//   };

//   const signIn = (redirect) => {
//     setLoading(true);

//     return firebase
//       .auth()
//       .signInWithPopup(new firebase.auth.GoogleAuthProvider())
//       .then((response) => {
//         handleUser(response.user);

//         if (redirect) {
//           Router.push(redirect);
//         }
//       });
//   };

//   const signOut = () => {
//     return firebase
//       .auth()
//       .signOut()
//       .then(() => handleUser(false));
//   };

//   useEffect(() => {
//     const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);
//     return () => unsubscribe();
//   }, []);

//   return {
//     user,
//     loading,
//     signIn,
//     signOut,
//   };
// }

// export function AuthProvider({ children }) {
//   const auth = useFirebaseAuth();

//   const { user, loading } = auth;
//   const router = useRouter();
//   useEffect(() => {
//     if (router.asPath == "/") {
//       return;
//     }
//     if (!loading && !user) {
//       router.push("/");
//     }
//   }, [user, router, loading]);
//   if (loading) {
//     return <Spinner />;
//   }
//   return (
//     <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
//   );
// }

// export const useAuth = () => {
//   return useContext(authUserContext);
// };
import React, { useState, useEffect, useContext, createContext } from "react";
import Router from "next/router";
import firebase from "./firebase";
import { useRouter } from "next/router";
import { Spinner } from "@chakra-ui/react";

const authUserContext = createContext({
  user: null,
  loading: true,
  signIn: async () => { },
  signOut: async () => { },
});

const formatUser = async (user) => {
  const token = await user.getIdToken();
  return {
    uid: user.uid,
    token: token,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  };
};

function useFirebaseAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleUser = async (rawUser) => {
    if (rawUser) {
      const user = await formatUser(rawUser);
      const resp = await fetch("/api/students/create", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          Authorization: `Bearer ${user.token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      setUser(user);

      setLoading(false);
      return user;
    } else {
      setUser(false);
      setLoading(false);
      return false;
    }
  };

  const signIn = (redirect) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        handleUser(response.user);

        if (redirect) {
          Router.push(redirect);
        }
      });
  };

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);
    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    signIn,
    signOut,
  };
}

export function AuthProvider({ children }) {
  const auth = useFirebaseAuth();

  const { user, loading } = auth;
  const router = useRouter();
  useEffect(() => {
    if (router.asPath == "/" || router.asPath.startsWith("/deals")) {
      return;
    }
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, router, loading]);
  if (loading) {
    return <Spinner />;
  }
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authUserContext);
};