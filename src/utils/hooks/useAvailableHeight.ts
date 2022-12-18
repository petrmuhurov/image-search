import { useState, useCallback } from "react";

import useInterval from "./useInterval";

const useAvailableHeight = (node: HTMLElement | null) => {
    const [height, setHeight] = useState(0);

    const onUpdate = useCallback(() => {
        const rect = node?.getBoundingClientRect?.() as DOMRect;

        if (rect) setHeight(window.innerHeight - rect.top);
    }, [node]);

    useInterval(onUpdate, 300);

    return height;
};

export default useAvailableHeight;
