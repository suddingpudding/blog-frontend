import React, {Fragment} from 'react';
import HeaderContainer from "../containers/common/HeaderContainer";
import PostViewerContainer from "../containers/post/PostViewerContainer";

const PostPage = () => {
    return (
        <Fragment>
            <HeaderContainer/>
            <PostViewerContainer/>
        </Fragment>
    );
};

export default PostPage;