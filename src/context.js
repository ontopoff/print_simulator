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
        setOwnText,
        text,
        setText,
        defaultText,
        setDefaultText,
        reload,
        setReload,
        modalMenu,
        setModalMenu,
        open,
        setOpen
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
        handleChangeUrl(e.target.value);
    }

    function handleSelectTime(e) {
        setTestTime(e.target.value);
    }

    function handleChangeUrl(num) {
        setUrl("https://baconipsum.com/api/?type=all-meat&sentences=" + num + "&format=json");
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
        text,
        setText,
        defaultText,
        setDefaultText,
        reload,
        setReload,
        modalMenu,
        setModalMenu,
        open,
        setOpen,
        handleChangeUrl,
        handleOwnText,
        toggleCheckbox,
        toggleCheckboxWorkout,
        handleSelectNumberSentence,
        handleSelectTime
    }
}

function ContentProvider(props) {

    const [defaultText, setDefaultText] = useState(["Chislic kielbasa ham pancetta, tenderloin kevin turducken" +
    " sausage t-bone pork alcatra tri-tip swine. Tail biltong ribeye hamburger ball tip. Pork chop turkey turducken," +
    " chislic bacon burgdoggen rump cupim hamburger jowl flank frankfurter sausage ground round. Bresaola drumstick" +
    " cupim porchetta beef kielbasa pastrami burgdoggen pork brisket ribeye short ribs. Short loin boudin shoulder" +
    " biltong kevin pork belly pork chop."])


    const [url, setUrl] = useState("https://baconipsum.com/api/?type=all-meat&sentences=5&format=json")
    const [loading, setLoading] = useState(false);
    const [checkedTypeText, setCheckedTypeText] = useState(false);
    const [sentenceNum, setSentenceNum] = useState(5);
    const [testTime, setTestTime] = useState(1);
    const [workoutType, setWorkoutType] = useState(false);
    const [ownText, setOwnText] = useState("");
    const [text, setText] = useState("");
    const [reload, setReload] = useState(false);
    const [modalMenu, setModalMenu] = useState(false);
    const [open, setOpen] = useState(false);

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
            setOwnText,
            text,
            setText,
            defaultText,
            setDefaultText,
            reload,
            setReload,
            modalMenu,
            setModalMenu,
            open,
            setOpen
        ], [url, loading, checkedTypeText, sentenceNum, testTime, workoutType, ownText, text, defaultText, reload, modalMenu, open])
    return <AppContext.Provider value={value} {...props} />
}

export {ContentProvider, useStates}