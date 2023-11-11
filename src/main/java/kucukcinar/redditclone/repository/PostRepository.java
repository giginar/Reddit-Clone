package kucukcinar.redditclone.repository;


import kucukcinar.redditclone.model.Post;
import kucukcinar.redditclone.model.Subreddit;
import kucukcinar.redditclone.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findAllBySubreddit(Subreddit subreddit);

    List<Post> findByUser(User user);
}
