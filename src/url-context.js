import React from 'react'

const UrlContext = React.createContext()

function useUrl() {
    const context = React.useContext(UrlContext)
    if (!context) {
        throw new Error(`useUrl must be used within a CountProvider`)
    }

    const [url, setUrl] = context

    const handleChangeUrl = (e) => {
        e.preventDefault();
        setUrl(e.target.value);
        console.log(url);
    }

    return {
        url,
        setUrl,
        handleChangeUrl,
    }
}

function UrlProvider(props) {
    const [url, setUrl] = React.useState("https://baconipsum.com/api/?type=all-meat&sentences=5&format=json")
    const value = React.useMemo(() => [url, setUrl], [url])
    return <UrlContext.Provider value={value} {...props} />
}

export {UrlProvider, useUrl}