import './loader.styles.css'

import { useRef } from 'react'

interface LoaderProps {
    loading: boolean,
}

export const Loading = ({ loading }: LoaderProps) => {
    const loadingRef: any = useRef();
    return (
        <div id="loader"
            ref={loadingRef}>
            <img
                id="loading-icon"
                alt=""
                src="/loading-icon.svg"
                draggable="false"></img>
        </div>
    )
}