export function Feature(props) {
    const { title, caption, icon } = props;
    return (
        <div className="features__item flex col-gap8 ai-start">
            <div className="icon flex ai-center jc-center bg-light-cyan w13 rounded block shrink-0">
                <span className="fs6 text-cyan">{icon}</span>
            </div>
            <div className="content">
                <h2 className="title fs5 fw700 mb3">{title}</h2>
                <p className="caption text-grayish-blue fs4 fw400" >
                    {caption}
                </p>
            </div>
        </div>
    )
}