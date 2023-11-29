import { VoteType } from "./vote-button/vote-type";

export class VotePayload {
    voteType!: VoteType;
    postId!: number;
}