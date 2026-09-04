import { createContext, useContext } from "react";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const student = {
        name: "Abhilash",
        email: "student@example.com",
        course: "B.Tech CSE",
        college: "ABC College"
    };

    return (
        <StudentContext.Provider value={student}>
            {children}
        </StudentContext.Provider>
    );
};

export const useStudent = () => useContext(StudentContext);
