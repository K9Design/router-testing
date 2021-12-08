
const MisdemeanorsDisplay = ({ data, filter }) => {

  const randomKey = () => "key-" + Math.random() * 10000000;

  const convertMisdemeanor = (offence) => {
    switch (offence) {
      case "vegetables": return "🥗";
      case "united": return "😈";
      case "rudeness": return "🤪";
      case "lift": return "🗣";
      default: return "[error]"

    }
  }

  const randomImage = () => "https://picsum.photos/seed/" + randomKey() + "/140/60";

  const renderTable = () => {
    return data.map(row => (

      < div className="md-row" key={randomKey()} style={{ display: filter.find(e => e === row.misdemeanour) ? 'flex' : 'none' }
      } >
        < div className="md-col-citizenId" > {row.citizenId}</div >
        <div className="md-col-date">{row.date}</div>
        <div className="md-col-misdemeanor">{convertMisdemeanor(row.misdemeanour)}</div>
        <div className="md-col-punishment"><img alt="punishment idea photo" src={randomImage()} />;</div>
      </div >


    ))
  }


  return (
    <>
      <div className="md-table">
        <div className="md-table-header"><h3>Citizen ID</h3><h3>Date</h3><h3>Misdemeanour</h3><h3>Punishment Idea</h3>
        </div>
        {renderTable()}
      </div>
    </>
  )
}

export default MisdemeanorsDisplay