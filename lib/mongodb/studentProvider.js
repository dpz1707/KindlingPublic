
// import React, { useState, useEffect, useContext, createContext } from "react";
// import { Spinner } from "@chakra-ui/react";
// import { useAuth } from '../firebase/auth';
// import { useRouter } from 'next/router';

// const studentContext = createContext({
//     student: null,
//     refetchStudent: async () => { },
// });

// export function StudentProvider({ children }) {
//     const router = useRouter();
//     const { user, loading } = useAuth();
//     const [student, setStudent] = useState();
//     const [studentLoading, setStudentLoading] = useState(true);

//     const refetchStudent = async () => {
//         const resp = await fetch("/api/students/fetch", {
//             headers: {
//                 Authorization: `Bearer ${user.token}`,
//                 Accept: "application/json",
//             },
//         });

//         const student = await resp.json();
//         setStudent(student);

//     }



//     useEffect(() => {
//         if (loading) {
//             return;
//         }
//         if(!user){
//             setStudentLoading(false);
//             return
//         }

//         refetchStudent().then(() =>
//         {  
//             setStudentLoading(false);

//         });
//     }, [user, loading, setStudentLoading]);

//     if (loading || studentLoading) {
//         return <Spinner />;
//     }


//     if((!student?.subscription?.isSubscribed) && (router.asPath !== "/")){

//         router.push(`/api/stripe/checkout?uid=${user.uid}`);
//         return <Spinner />;
//     }

//     return (
//         <studentContext.Provider value={{ student, refetchStudent }}>{children}</studentContext.Provider>
//     );


// }

// export const useStudent = () => {
//     return useContext(studentContext);
// };
import React, { useState, useEffect, useContext, createContext } from "react";
import { Spinner } from "@chakra-ui/react";
import { useAuth } from '../firebase/auth';

const studentContext = createContext({
    student: null,
    refetchStudent: async () => { },
});

export function StudentProvider({ children }) {
    const { user, loading } = useAuth();
    const [student, setStudent] = useState();
    const [studentLoading, setStudentLoading] = useState(true);

    const refetchStudent = async () => {
        const resp = await fetch("/api/students/fetch", {
            headers: {
                Authorization: `Bearer ${user.token}`,
                Accept: "application/json",
            },
        });
        const student = await resp.json();
        setStudent(student);
    }

    useEffect(() => {
        if (loading || !user) {
            setStudentLoading(false);
            return;
        }
        refetchStudent().then(() => setStudentLoading(false));
    }, [user, loading]);
    if (loading || studentLoading) {
        return <Spinner />;
    }
    return (
        <studentContext.Provider value={{ student, refetchStudent }}>{children}</studentContext.Provider>
    );
}

export const useStudent = () => {
    return useContext(studentContext);
};