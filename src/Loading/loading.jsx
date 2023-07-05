import "./loading.css";
const Loading = ({them}) => {
    return(
        <div className="loading-with-them ">
            <div className={`loading spinner-border text-${them || "success"}`}>
            </div>
        </div>
    )
}
export default Loading