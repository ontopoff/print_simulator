import React, {useState} from 'react'

const AppContext = React.createContext();

function useUrl() {
    const context = React.useContext(AppContext)
    if (!context) {
        throw new Error(`useUrl must be used within a ContentProvider`)
    }

    const [url, setUrl, loading, setLoading] = context

    const handleChangeUrl = (e) => {
        e.preventDefault();
        setUrl(e.target.value);
        console.log(url);
    }

    return {
        url,
        setUrl,
        handleChangeUrl,
        loading,
        setLoading,
    }
}

function ContentProvider(props) {
    const [url, setUrl] = React.useState("https://baconipsum.com/api/?type=all-meat&sentences=5&format=json")
    const [loading, setLoading] = useState(false);
    const value = React.useMemo(() => [url, setUrl, loading, setLoading], [url, loading])
    return <AppContext.Provider value={value} {...props} />
}

export {ContentProvider, useUrl}