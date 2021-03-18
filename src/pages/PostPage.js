import React, {Fragment} from 'react';
import HeaderContainer from "../containers/common/HeaderContainer";
import PostViewer from "../components/post/PostViewer";

const PostPage = () => {
    return (
        <Fragment>
            <HeaderContainer/>
            <PostViewer/>
        </Fragment>
    );
};

export default PostPage;