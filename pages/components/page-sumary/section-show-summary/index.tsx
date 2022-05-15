interface Props{
  title?: String,
  content:
  [
    {
      name?: String,
      date?: any,
      topcsTitle?:String,
      description?:String,
      topcs?:Array<String>
    }
  ]
}

export default function SectionShowSummary({title, content}: any) {
  return (
      <div id="section-show-summary">
        <h2 className="title f-w-600">{ title }</h2>
        {
          content.map((item, index) => {
            return(
              <div key={ index }className="content">
                <h3 className="f-w-600">{ item.name }</h3>
                {
                  item.date && <div className="date-with-bg-color d-flex j-c-center"><p>{ item.date }</p></div>
                }
                <p className="description">{ item.description }</p>
                <h4 className="f-w-200">{ item.topcsTitle }</h4>
                <div className="topcs">
                  <ul>
                    {
                      item.topcs?.map((son, sonIndex) => {
                        return(
                          <li key={ sonIndex }>{son}</li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            )
          })
        }
      </div>
  )
}