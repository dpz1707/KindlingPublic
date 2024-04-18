import { useRouter } from "next/router";
import { useStudent } from "../../lib/mongodb/studentProvider";
import { useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";
import { DealCard } from "../../components/deals/dealCard"

export default function Deals() {

    const router = useRouter();
    const { studentID } = router.query;
    const { student: loggedInStudent } = useStudent();
    const isEditable = studentID === loggedInStudent?.uid;
    const [isReal, setIsReal] = useState();
    const [student, setStudent] = useState();
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(`/api/deals/fetch?studentID=${studentID}`);
            const { student, deals } = await response.json();
            setStudent(student);
            setIsReal(student != null);
            setDeals(deals);
        })();
    }, [studentID, setIsReal])
    console.log(isEditable);

    if (isReal == null) {
        return <Spinner />;
    }

    if (isReal == false) {
        return <h1>Student not found! Please go back!</h1>
    }

    return (
        <div>
            <DealCard isEditable={isEditable} deals={deals} student={student} />
        </div>
    );
}