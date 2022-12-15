import React from "react";

import { observer } from "mobx-react-lite";

import { useLoginRedirection } from "../../utils/hooks";

interface Props {
    children: React.ReactElement;
}

const Authorization: React.FunctionComponent<Props> = ({ children }) => {
    useLoginRedirection();

    return children;
};

export default observer(Authorization);
