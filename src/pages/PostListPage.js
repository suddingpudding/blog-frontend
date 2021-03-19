import React, {Fragment} from 'react';
import HeaderContainer from "../containers/common/HeaderContainer";
import PostList from "../components/posts/PostList";

const PostListPage = () => {
    return (
        <Fragment>
            <HeaderContainer/>
            <PostList/>
        </Fragment>
    );
};

export default PostListPage;