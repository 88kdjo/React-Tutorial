const students = [
  {
    id: 1,
    name: 'Jeff',
  },
  {
    id: 2,
    name: 'Matt',
  },
  {
    id: 3,
    name: 'Big',
  },
  {
    id: 4,
    name: 'Rob',
  },
  {
    id: 5,
    name: 'Steve',
  },
  {
    id: 6,
    name: 'Harry',
  },
  {
    id: 7,
    name: 'Jo',
  },
];

const AttendanceBook = (props) => {
  return (
    <ul>
      {
        students.map( (student) => {
          return <li key={student.id}>{student.name}</li>;
        })
      }
    </ul>
  )
}

export default AttendanceBook;