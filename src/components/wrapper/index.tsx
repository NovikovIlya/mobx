import React, { useEffect } from 'react';
import Counter from '../counter';
import { observer } from 'mobx-react-lite';
import CounterStore from '../../store/counter-store';
import { useStores } from '../../root-store.context';

//Разные инстансы
const counter1 = new CounterStore();
const counter2 = new CounterStore();

const Wrapper = observer(() => {
  const { post } = useStores();
  //   const { getPostsAction, posts } = postStore;

  useEffect(() => {
    post.getPostsAction();
  }, []);

  console.log('posts', post.posts);

  if (post.posts?.state === 'pending') {
    return <div>Loading</div>;
  }

  if (post.posts?.state === 'rejected') {
    return <div>Error</div>;
  }

  return (
    <div>
      <Counter {...counter1} total={counter1.total} />
      {/* <Counter {...counter2} total={counter2.total} /> */}
      {post.posts?.value[0].body}
    </div>
  );
});

export default Wrapper;
