import { useState, useEffect } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import MisdemeanorsDisplay from './MisdemeanorsDisplay';
import generateMisdemeanours from '../data/generateMisdemeanours';

const Misdemeanors = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(["vegetables", "united", "rudeness", "lift"]);

  const setFilterHandler = (event) => {
    setFilter(event.map(f => f.value));
  }

  const getData = async () => {
    const results = await generateMisdemeanours();
    setData(results);
  }

  useEffect(() => {
    console.log("md load");
    getData();
  }, []);

  const animatedComponents = makeAnimated();
  const offenceOptions = [
    { value: 'vegetables', label: '🥗' },
    { value: 'united', label: '😈' },
    { value: 'rudeness', label: '🤪' },
    { value: 'lift', label: '🗣' }
  ]

  return (
    <>
      <div className="md-title-container">
        <h1 className="md-title">Misdemeanors</h1>
        <div className="md-filter">
          <label>Show Offences</label>
          <Select className="md-selectOffences-container" classNamePrefix="md-selectOffences"
            options={offenceOptions}
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={offenceOptions}
            isMulti
            onChange={setFilterHandler}
          />
        </div>
      </div>

      <hr />
      <MisdemeanorsDisplay data={data} filter={filter} />
    </>
  )
}

export default Misdemeanors