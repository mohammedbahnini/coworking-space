export function Quote() {
    return (
        <div className="quote w80">

            <div className="quote__icon w26 rounded bg-purple flex ai-center jc-center mb12 ">
                <span className="text-white fs7"><i className="fa-solid fa-quote-right"></i></span>
            </div>

            <div className="quote__text" style={{lineHeight : '1.25em'}}>
                <h3 className="fs10 fw700">Apa kata</h3>
                <h3 className="fs10 fw700">mereka tentang
                ruang kerja</h3>
            </div>
        </div>
    )
}