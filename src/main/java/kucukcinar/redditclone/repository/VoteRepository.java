package kucukcinar.redditclone.repository;

import kucukcinar.redditclone.model.Post;
import kucukcinar.redditclone.model.User;
import kucukcinar.redditclone.model.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VoteRepository extends JpaRepository<Vote, Long> {
    Optional<Vote> findTopByPostAndUserOrderByVoteIdDesc(Post post, User currentUser);
}
