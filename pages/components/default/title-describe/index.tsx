interface Props {
  title: String,
  describe:{
    start: String,
    highlight: String,
    end?: String,
  },
}

export default function TitleDescribe({title, describe}: Props) {
  return (
    <div id="title_describe">
      <h1 className="big-title">{title}</h1>
      <h2 className="sub-big-title f-w-400">{describe.start} <strong className="text-highlight f-w-400">{describe.highlight}</strong> {describe.end}</h2>
    </div>
  )
}