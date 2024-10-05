import { LikeContract } from '../contracts/LikeContract';
import { v4 as uuidv4 } from 'uuid';
import { User } from './User';

export class Like extends LikeContract {
    constructor(
        public id: string = uuidv4(),
        public from: User
    ){
        super(id);
    }
}