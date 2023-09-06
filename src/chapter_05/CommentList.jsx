import Comment from './Comment';

const comments = [
  {
    id: 1,
    name: 'kdjo',
    comment: '안녕하세요. aking입니다.',
  },
  {
    id: 2,
    name: '리액트',
    comment: '리액트 배우러 오세요.',
  },
  {
    id: 3,
    name: '진로 두꺼비',
    comment: '두껍 두껍',
  },
];

const CommentList = () => {
  return (
    <div>
      {
        comments.map( (c) => {
          return (
            <Comment key={c.id} name={c.name} comment={c.comment} />
          );
        })
      }
    </div>
  );
}

export default CommentList;