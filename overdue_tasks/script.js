// - Проекты с просроченными задачами

//     На странице проектов удобно сразу показывать, где есть проблемы со сроками.
// Для каждого проекта верни новый объект с `id`, `name` и полем `hasOverdueTasks`, которое показывает,
// есть ли внутри проекта хотя бы одна просроченная задача.

//     // Вход:
const projects = [
  {
    id: 1,
    name: "Website",
    tasks: [
      { title: "Layout", overdue: false },
      { title: "Deploy", overdue: true },
    ],
  },
  {
    id: 2,
    name: "Mobile app",
    tasks: [{ title: "Login screen", overdue: false }],
  },
];

//     // Вызов:
//     const result = markProjectsWithOverdueTasks(projects);

//     // Ожидаемый результат:
//     const expected = [
//       { id: 1, name: "Website", hasOverdueTasks: true },
//       { id: 2, name: "Mobile app", hasOverdueTasks: false }
//     ];

function markProjectsWithOverdueTasks(arr) {
  function hasOverdueTasks(arr) {
    return arr.some((item) => item.overdue === true);
  }

  return arr.map((item) => ({
    id: item.id,
    name: item.name,
    hasOverdueTasks: hasOverdueTasks(projects[item.id - 1].tasks),
  }));
}

console.log(markProjectsWithOverdueTasks(projects));
