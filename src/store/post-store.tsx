import { makeAutoObservable, runInAction } from 'mobx';
import { Posts, getPosts } from '../api/getPosts';
import { IPendingPromise, IPromiseBasedObservable, fromPromise } from 'mobx-utils';

class PostStore {
  posts?: IPromiseBasedObservable<Posts[]>
 

  constructor() {
    makeAutoObservable(this);
  }

  getPostsAction = ()=>{
    this.posts = fromPromise(getPosts())
  }
}

export default new PostStore();
