{   
    // method to submit the form data for new post using AJAX
    let createPost = function(){
        let newPostForm = $('#new-post');

        newPostForm.submit(function(e){
            e.preventDefault();

            $.ajax({
                type: 'post',
                url: '/posts/create',
                data: newPostForm.serialize(),
                success: function(data){
                    let newPost = newPostDom(data.data.post);
                    $('#post-container>ul').prepend(newPost);
                    deletePost($(' .delete-post-button', newPost));
                    
                    // call the create comment class
                    new PostComments(data.data.post._id);

                    new Noty({
                        theme: 'relax',
                        text: "Post published!",
                        type: 'success',
                        layout: 'topRight',
                        timeout: 1500
                        
                    }).show();

                }, error: function(error){
                    console.log(error.responseText);
                }
            });
        });
    }


    // method to create a post in DOM
    let newPostDom = function(post){
        return $(`<li id="post-${post._id}" class="post-box">
                    <p>
                        <small>
                            <a class="delete-post-button" href="/posts/destroy/${post._id}">
                                <i class="fa-solid fa-circle-xmark"></i>
                            </a>
                        </small>

                        ${post.content}
                        <br>
                        <small>
                            Posted By : 
                            ${post.user.name }
                        </small>
                    </p>
                    <div class="post-comment">
                            <form action="/comments/create" method="POST" id="comment">
                                <i class="fa-solid fa-comment"></i>
                                <input type="text" name="content" placeholder="Add Comment......" required id="name">
                                <input type="hidden" name="post" value="${post._id}">
                                <input type="submit" value="Comment">
                        
                        <div class="post-comment-list">
                            <ul id="post-comment-${post._id}">
            
                            </ul>
                        
                        </div>
                    </div>
                    
                </li>`)
    }

    // method to delete a post from DOM
    let deletePost = function(deleteLink){
        $(deleteLink).click(function(e){
            e.preventDefault();

            $.ajax({
                type: 'get',
                url: $(deleteLink).prop('href'),
                success: function(data){
                    $(`#post-${data.data.post_id}`).remove();
                    new Noty({
                        theme: 'relax',
                        text: "Post Deleted",
                        type: 'success',
                        layout: 'topRight',
                        timeout: 1500
                        
                    }).show();
                },error: function(error){
                    console.log(error.responseText);
                }
            });

        });
    }


    createPost();
}