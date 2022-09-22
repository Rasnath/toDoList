function DummyTasks () {
    const dummyTasks = [
        {
          id: "id1",
          title: "This is a task!",
          priority: "Low",
          date: new Date(2022, 9, 24),
          state: false,
        },
        {
          id: "id11",
          title: "Low priority task",
          priority: "Low",
          date: new Date(2022, 9, 23),
          state: false,
        },
        {
          id: "id2",
          title: "This is a new task",
          priority: "Medium",
          date: new Date(2022, 9, 26),
          state: false,
        },
        {
          id: "id3",
          title: "This is a completed task",
          priority: "Medium",
          date: new Date(2022, 9, 28),
          state: true,
        },
        {
          id: "id4",
          title: "This is a new completed task",
          priority: "Low",
          date: new Date(2022, 10, 30),
          state: true,
        },
      ];
return (dummyTasks)
}

export default DummyTasks