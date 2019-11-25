import React from 'react';

const Scrum  = (props) => {

  return (
    <div className="scrum-container">
        <h4>Wybierz daty scruma:</h4>

        <div className="text-center mt-4">
          <label htmlFor="date-planning" className="grey-text">
            Planowanie
          </label>
          <input type="date" id="date-planing" name="planning" onChange={e => props.anyDatechange(e)}/>
        </div>

        <div className="text-center mt-4">
          <label htmlFor="date-dayli1" className="grey-text">
            Dayli 1
          </label>
          <input type="date" id="date-dayli1" name="dayli1" onChange={e => props.anyDatechange(e)} />
        </div>

        <div className="text-center mt-4">
          <label htmlFor="date-dayli2" className="grey-text">
            Dayli 2
          </label>
          <input type="date" id="date-dayli2" name="dayli2" onChange={e => props.anyDatechange(e)} />
        </div>

        <div className="text-center mt-4">
          <label htmlFor="date-dayli3" className="grey-text">
            Dayli 3
          </label>
          <input type="date" id="date-dayli3" name="dayli3" onChange={e => props.anyDatechange(e)} />
        </div>

        <div className="text-center mt-4">
          <label htmlFor="date-dayli4" className="grey-text">
            Dayli 4
          </label>
          <input type="date" id="date-dayli4" name="dayli4" onChange={e => props.anyDatechange(e)} />
        </div>

        <div className="text-center mt-4">
          <label htmlFor="date-dayli5" className="grey-text">
            Dayli 5
          </label>
          <input type="date" id="date-dayli5" name="dayli5" onChange={e => props.anyDatechange(e)} />
        </div>

        <div className="text-center mt-4">
          <label htmlFor="date-retro" className="grey-text">
            Retrospektywa
          </label>
          <input type="date" id="date-retro" name="retro" onChange={e => props.anyDatechange(e)} />
        </div>
    </div>
  );
}

export default Scrum;
