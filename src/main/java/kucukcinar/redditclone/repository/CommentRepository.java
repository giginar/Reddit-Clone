package kucukcinar.redditclone.repository;



import kucukcinar.redditclone.model.Comment;
import kucukcinar.redditclone.model.Post;
import kucukcinar.redditclone.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByPost(Post post);

    List<Comment> findAllByUser(User user);
}
