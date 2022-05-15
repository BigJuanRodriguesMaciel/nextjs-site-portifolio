interface Props{
    label: String,
    progress: any,
}

export default function ProgressLine({label, progress} : Props) {
  return (
    <>
        <div className="d-flex" style={{justifyContent: 'space-between'}}>
            <label style={{fontSize: 14}} htmlFor="">{label}</label>
            <label style={{fontSize: 14}} htmlFor="">{progress}%</label>
        </div>
        <progress max={100} value={progress}/>
    </>
  )
}