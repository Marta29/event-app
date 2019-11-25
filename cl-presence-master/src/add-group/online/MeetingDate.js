import React from 'react';

const MeetingDate = (anyDateChange, counter) => {
  return (
    <React.Fragment>
      <div className="text-center mt-4">
        <label className="grey-text">
            {/*{counter}*/}
        </label>
        <input type="date" name={counter}
               onChange={anyDateChange}
        />
      </div>
    </React.Fragment>
  );
};

export default MeetingDate;
