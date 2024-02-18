export function Stats() {
    return (
        <>
           <div className="stats w80">

            <div className="stats__head mb16">
                <h2 className="title fs7 fw700 mb4">
                Kenapa Ruang Kerja?
                </h2>
                <h3 className="sub--title fs4 fw300 " style={ { lineHeight : '1.8em'}}>
                Kami telah berpengalaman melayani ratusan ribu orang dalam menemukan ruang kerja idaman mereka
                </h3>
            </div>

            <div className="stat__content">

                <div className="stats__item mb16">
                    <h1 className="fs20 fw800 text-cyan">600+</h1>
                    <h2 className="text-pale-blue fs4 fw300">Ruang Kerja di seluruh Indonesia</h2>
                </div>

                <div className="stats__item ">
                    <h1 className="fs20 fw800 text-cyan">135+</h1>
                    <h2 className="text-pale-blue fs4 fw300">Staff yang siap membantu Anda</h2>
                </div>

            </div>
           </div>
        </>

    )
}