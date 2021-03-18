import React from 'react';
import Responsive from "../components/common/Responsive";
import EditorContainer from "../components/write/EditorContainer";
import TagBoxContainer from "../components/write/TagBoxContainer";
import WriteActionButtonsContainer from "../containers/write/WriteActionButtonsContainer";

const WritePage = () => {
    return (
        <Responsive>
            <EditorContainer/>
            <TagBoxContainer/>
            <WriteActionButtonsContainer/>
        </Responsive>
    );
};

export default WritePage;