import React, {Fragment} from 'react';
import HeaderContainer from "../containers/common/HeaderContainer";
import PostListContainer from "../containers/posts/PostListContainer";

const PostListPage = () => {
    return (
        <Fragment>
            <HeaderContainer/>
            <PostListContainer/>
        </Fragment>
    );
};

export default PostListPage;