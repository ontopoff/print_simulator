import React, {useState} from 'react'

const AppContext = React.createContext();

function useStates() {
    const context = React.useContext(AppContext)

    if (!context) {
        throw new Error(`useStates must be used within a ContentProvider`)
    }

    const [
        url,
        setUrl,
        loading,
        setLoading,
        checkedTypeText,
        setCheckedTypeText,
        sentenceNum,
        setSentenceNum,
        testTime,
        setTestTime,
        workoutType,
        setWorkoutType,
        ownText,
        setOwnText
    ] = context

    function handleOwnText(e) {
        setOwnText(e.target.value);
    }

    function toggleCheckbox() {
        setCheckedTypeText(!checkedTypeText);
    }

    function toggleCheckboxWorkout() {
        setWorkoutType(!workoutType);
    }

    function handleSelectNumberSentence(e) {
        setSentenceNum(e.target.value);
    }

    function handleSelectTime(e) {
        setTestTime(e.target.value);
    }

    const handleChangeUrl = (e) => {
        e.preventDefault();
        setUrl(e.target.value);
    }

    return {
        url,
        setUrl,
        loading,
        setLoading,
        checkedTypeText,
        setCheckedTypeText,
        sentenceNum,
        setSentenceNum,
        testTime,
        setTestTime,
        workoutType,
        setWorkoutType,
        ownText,
        setOwnText,
        handleChangeUrl,
        handleOwnText,
        toggleCheckbox,
        toggleCheckboxWorkout,
        handleSelectNumberSentence,
        handleSelectTime
    }
}

function ContentProvider(props) {
    const [url, setUrl] = useState("https://baconipsum.com/api/?type=all-meat&sentences=5&format=json")
    const [loading, setLoading] = useState(false);
    const [checkedTypeText, setCheckedTypeText] = useState(false);
    const [sentenceNum, setSentenceNum] = useState(5);
    const [testTime, setTestTime] = useState(1);
    const [workoutType, setWorkoutType] = useState(false);
    const [ownText, setOwnText] = useState("");


    const value = React.useMemo(() =>
        [
            url,
            setUrl,
            loading,
            setLoading,
            checkedTypeText,
            setCheckedTypeText,
            sentenceNum,
            setSentenceNum,
            testTime,
            setTestTime,
            workoutType,
            setWorkoutType,
            ownText,
            setOwnText
        ], [url, loading, checkedTypeText, sentenceNum, testTime, workoutType, ownText])
    return <AppContext.Provider value={value} {...props} />
}

export {ContentProvider, useStates}