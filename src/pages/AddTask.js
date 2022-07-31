import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState('');

  //HANDLE TASK
  const handleTask = e => {
    e.preventDefault(e);

    if (!text) return alert('Please add a task');
    onAdd({ text, day, reminder });

    //To clear
    setText('');
    setDay('');
    setReminder('');
  };

  return (
    <>
      <form action="#" className="add-form" onSubmit={handleTask}>
        <div className="form-control">
          <label> Task </label>
          <input
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label> Day & Time </label>
          <input
            type="text"
            placeholder="Add Day & Time"
            value={day}
            onChange={e => setDay(e.target.value)}
          />
        </div>
        <div className="form-control form-control-check">
          <label> Set Reminder </label>
          <input
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={e => setReminder(e.currentTarget.checked)}
          />
        </div>
        <input type="submit" value={'save'} className="btn btn-block" />
      </form>
    </>
  );
};

export default AddTask;
